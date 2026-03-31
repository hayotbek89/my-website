import os
from flask import Flask, send_from_directory
from flask_talisman import Talisman

app = Flask(__name__, static_folder='.', static_url_path='')

# Content Security Policy (CSP) sozlamalari
# Bu qoidalar saytga faqat ishonchli manbalardan skriptlarni yuklashga ruxsat beradi
csp = {
    'default-src': '\'self\'',
    'style-src': [
        '\'self\'',
        'https://fonts.googleapis.com',
        '\'unsafe-inline\''
    ],
    'font-src': [
        '\'self\'',
        'https://fonts.gstatic.com'
    ],
    'img-src': [
        '\'self\'',
        'data:'
    ],
    'script-src': [
        '\'self\'',
        '\'unsafe-inline\''
    ],
    'object-src': '\'none\''
}

# Talisman - Sayt xavfsizligini ta'minlovchi kutubxona
# U avtomatik ravishda HSTS, X-Frame-Options va CSP sarlavhalarini qo'shadi
Talisman(app, content_security_policy=csp, force_https=False)  # Localhostda ishlashi uchun force_https=False qoldirdik

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    # Statik fayllarni (css, js, images) xavfsiz xizmat qilish
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    # Portni muhit o'zgaruvchisidan olish (masalan, Heroku yoki Render uchun)
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
