# Hayotbek Maxmudjonov — Portfolio Sayti

## 📁 Loyiha Tuzilmasi

```
mening saytim/
├── frontend/          ← React + Vite (UI qismi)
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── robots.txt
│   ├── security.txt
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── components/
│   ├── css/
│   ├── js/
│   └── images/
│
└── backend/           ← Flask (Server qismi)
    ├── main.py
    ├── remove_bg.py
    └── requirements.txt
```

---

## 🚀 Ishga tushirish

### Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev        # Development rejimi
npm run build      # Production build (dist/ papkasi yaratiladi)
```

### Backend (Flask)
```bash
cd backend
pip install -r requirements.txt
python main.py     # Server ishga tushadi (port 5000)
```

> ⚠️ Backend serverni ishlatishdan oldin `npm run build` buyrug'ini frontend papkasida bajaring.
> Flask server `frontend/dist/` papkasidan statik fayllarni xizmat qiladi.

### Rasm fonini olib tashlash
```bash
cd backend
python remove_bg.py
```

---

## 🛠 Texnologiyalar
- **Frontend:** React 19, Vite 8, styled-components
- **Backend:** Flask, Flask-Talisman, Gunicorn

