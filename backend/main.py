import os
import re
import logging
from logging.handlers import RotatingFileHandler
from pathlib import Path
from urllib.parse import unquote

from flask import Flask, abort, send_from_directory, request, make_response
from flask_talisman import Talisman
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = BASE_DIR.parent / 'frontend' / 'dist'

# ==================================================
# 🕵️ XAVFSIZLIK QAYDLARI (SECURITY LOGGING)
# ==================================================
# Xakerlarning barcha urinishlarini va IP manzillarini log faylga yozib boramiz
log_formatter = logging.Formatter('%(asctime)s - IP: %(client_ip)s - XAVF: %(levelname)s - %(message)s')
log_handler = RotatingFileHandler('security_alerts.log', maxBytes=100000, backupCount=3)
log_handler.setFormatter(log_formatter)

logger = logging.getLogger('SecurityLogger')
logger.setLevel(logging.WARNING)
logger.addHandler(log_handler)

class RequestIPFilter(logging.Filter):
    """Loglarga doimiy ravishda mijozning IP manzilini qo'shib beruvchi filtr"""
    def filter(self, record):
        record.client_ip = request.remote_addr if request else 'Unknown'
        return True

logger.addFilter(RequestIPFilter())

app = Flask(__name__, static_folder=str(DIST_DIR), static_url_path='')

# ==================================================
# 🛡️ KIBERXAVFSIZLIK QATLAMI (CYBER SECURITY LAYER)
# ==================================================

# 1. Anti-DDoS (Rate Limiting) - Hujumchilarni botlarini bloklash
# Har bir IP dan kuniga maksimal 1000 ta, daqiqasiga esa maksimal 60 ta so'rov qabul qilinadi
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["1000 per day", "60 per minute"],
    storage_uri="memory://"
)

# Limitdan oshib ketganlarni log qilish uchun maxsus handler
@app.errorhandler(429)
def ratelimit_handler(e):
    logger.warning(f"DDoS shubhasi (Rate Limit oshib ketdi). So'rov: {request.path}")
    return make_response("Juda ko'p so'rov yubordingiz. Iltimos, keyinroq qayta urinib ko'ring (Anti-DDoS faollashdi).", 429)

# ==================================================
# 🔒 KIBER HUJUMLARNI ANIQLASH (PYTHON WAF)
# ==================================================
# Keng tarqalgan hujum naqshlari (SQLi, XSS, Command Injection)
MALICIOUS_PATTERNS = [
    re.compile(r"(<script.*?>.*?</script>)", re.IGNORECASE), # XSS
    re.compile(r"(javascript:.*)", re.IGNORECASE), # XSS
    re.compile(r"(union\s+select|select\s+.*\s+from|insert\s+into|drop\s+table)", re.IGNORECASE), # SQL Injection
    re.compile(r"(;.*|\|.*|`.*|&.*|\$\(.*\))"), # Command Injection
    re.compile(r"(\.\./|\.\.\\)"), # Path Traversal (LFI)
    re.compile(r"(etc/passwd|windows/system32|boot\.ini)", re.IGNORECASE) # LFI aniq fayllar
]

@app.before_request
def security_firewall():
    """Har bir so'rov (Request) backend'ga kirishidan oldin tozaligini tekshiruvchi funksiya"""
    # 1. URL va Path ichidagi shubhali belgilarni tekshirish
    decoded_path = unquote(request.path)
    
    for pattern in MALICIOUS_PATTERNS:
        if pattern.search(decoded_path):
            logger.error(f"ZARARLI SO'ROV BLOKLANDI! Turi: Path Injection/XSS. So'rov: {decoded_path}")
            abort(403) # Zudlik bilan aloqani uzish
            
    # Agar query parametrlar (masalan: ?id=<script>...) ishlatilsa ularni ham tekshiramiz
    for key, value in request.args.items():
        decoded_val = unquote(value)
        for pattern in MALICIOUS_PATTERNS:
            if pattern.search(decoded_val):
                logger.error(f"ZARARLI PARAMETR BLOKLANDI! Turi: XSS/SQLi. Param: {key}={decoded_val}")
                abort(403)

# 2. Strict CSP (Content Security Policy) - XSS va Inyeksiyalarni cheklash
# Faqatgina ushbu saytdan olingan xavfsiz fayllargagina ruxsat bor
csp = {
    'default-src': ['\'self\''],
    'style-src': [
        '\'self\'',
        'https://fonts.googleapis.com',
        '\'unsafe-inline\''  # React styled-components ishlashi uchun kerak
    ],
    'font-src': [
        '\'self\'',
        'https://fonts.gstatic.com',
        'data:'
    ],
    'img-src': [
        '\'self\'',
        'data:',
        'https://*' # Rasmlarga tashqi ruxsat (kerak bo'lganda)
    ],
    'script-src': [
        '\'self\'',
        '\'unsafe-inline\'', # Vite va React uchun zarur
        '\'unsafe-eval\''    # Qora ekran berayotgan sabablardan biri bo'lishi mumkin
    ],
    'object-src': ['\'none\''], # Flash/Java kabi xavfli eski pluginlarni taqiqlash
    'frame-ancestors': ['\'none\''] # Clickjacking ni to'liq taqiqlash
}

# 3. Talisman - Barcha Security Header'larni qo'llash (HSTS, X-Content-Type-Options, Referrer-Policy)
Talisman(app, 
         content_security_policy=csp, 
         force_https=False, # Localhostda ishlab turishi uchun False
         strict_transport_security=True, # HSTS Maxfiylikni yoqish
         session_cookie_secure=True,
         session_cookie_http_only=True)

# ==================================================
# 🌐 YO'NALISHLAR VA FAYLLAR XAVFSIZLIGI (ADVANCED LFI PROTECT)
# ==================================================

@app.route('/')
@limiter.limit("20 per minute") # Bosh sahifaga kirish tezligini sekinlashtirish
def index():
    if not DIST_DIR.exists():
        logger.critical("Frontend papkasi topilmadi (DIST_DIR yo'q)!")
        abort(503, description="Frontend build topilmadi. Avval frontend papkasida `npm run build` ni ishga tushiring.")
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    # Fayl nomi juda uzun yoki maxsus tizim fayllariga (.env, .git) o'xshashligini tekshirish
    if len(path) > 255 or path.startswith('.') or '/.' in path:
        logger.warning(f"Shubhali fayl so'raldi: {path}")
        abort(403)

    # 4. Path Traversal (LFI) Security: 
    try:
        requested_path = (DIST_DIR / path).resolve()
        
        # Foydalanuvchi DIST_DIR papkasidan tashqariga chiqishga urinyaptimi yo'qmi tekshirish
        # commonpath orqali ikkala yo'lning umumiy ildizi DIST_DIR ekanligi tasdiqlanadi
        if os.path.commonpath([str(DIST_DIR), str(requested_path)]) != str(DIST_DIR):
            logger.critical(f"LFI HUJUMI BLOKLANDI! Ruxsatsiz papkaga kirishga urinish: {requested_path}")
            abort(403) # 403 Forbidden - xavfli urinish
            
        if requested_path.exists() and requested_path.is_file():
            return send_from_directory(app.static_folder, path)
            
    except Exception as e:
        logger.error(f"Fayl uzatishda xatolik: {str(e)}")
        
    return send_from_directory(app.static_folder, 'index.html')

# Flask tomonidan beriladigan standart server ma'lumotlarini yashirish
@app.after_request
def hide_server_info(response):
    response.headers['Server'] = 'Hidden' # Server versiyasini hakerlardan yashirish
    return response

if __name__ == '__main__':
    # Portni muhit o'zgaruvchisidan olish (masalan, Heroku yoki Render uchun)
    port = int(os.environ.get('PORT', 5000))
    # Eslatma: Productionda debug=False bo'lishi shart! (Default holatda shunday)
    app.run(host='0.0.0.0', port=port, debug=False)
