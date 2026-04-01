import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from './Button'

function Hero() {
  const subtitleRef = useRef(null)

  useEffect(() => {
    const texts = ['Dasturchi', 'Flutter Developer', 'AI Builder', 'Mobil Ilova Yaratuvchisi']
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timer

    function typeEffect() {
      const el = subtitleRef.current
      if (!el) return
      const currentText = texts[textIndex]

      if (isDeleting) {
        el.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
      } else {
        el.textContent = currentText.substring(0, charIndex + 1)
        charIndex++
      }

      let delay = isDeleting ? 80 : 120
      if (!isDeleting && charIndex === currentText.length) {
        delay = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
        delay = 400
      }
      timer = setTimeout(typeEffect, delay)
    }

    typeEffect()
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-text">
          <h1 data-text="Assalomu alaykum, men — Hayotbek">Assalomu alaykum, men — Hayotbek</h1>
          <p className="subtitle" ref={subtitleRef}>Dasturchi</p>
          <p>
            Men mobil ilovalar, veb-loyihalar va sun'iy intellekt tizimlari yaratish bilan
            shug'ullanaman. Texnologiyalar orqali hayotni osonroq, aqlliroq va samaraliroq
            qilish — mening asosiy maqsadim.
          </p>
          <div className="cta-buttons">
            <Button onClick={() => scrollTo('#portfolio')}>
              Portfolioimni ko'rish
            </Button>
            <Button onClick={() => scrollTo('#contact')}>
              Men bilan bog'laning
            </Button>
          </div>
        </div>

        <div className="hero-image">
          <ImageContainer>
            <div className="img-wrapper">
              {/* Import qilingan rasmni yoki relative URLni chaqiramiz */}
              <img src="/images/img.png" onError={(e) => { e.target.onerror = null; e.target.src = '../public/images/img.png'; }} alt="Hayotbek Maxmudjonov" className="profile-photo" />
              <div className="cyber-overlay"></div>
            </div>
          </ImageContainer>
        </div>
      </div>
    </section>
  )
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  
  .img-wrapper {
    position: relative;
    /* Rasm to'liq sig'ishi uchun yumshoq, keng to'rtburchak (rounded square) */
    width: 480px;
    height: 480px;
    padding: 8px;
    background: linear-gradient(135deg, rgba(0, 255, 65, 0.8), rgba(0, 212, 255, 0.4));
    border-radius: 40px; /* Qirralari silliqlangan keng quti */
    box-shadow: 0 0 40px rgba(0, 255, 65, 0.3);
    animation: float 6s ease-in-out infinite;
  }

  .profile-photo {
    width: 100%;
    height: 100%;
    /* Rasmni asliga qaytarib moslash (qo'llar kesilmaydi va markazda turadi) */
    object-fit: cover;
    object-position: center 20%; /* Rasm markazdan sal teparoq joylashishi uchun */
    border-radius: 32px; /* Ichki rasm ham silliq qirrali */
    display: block;
    position: relative;
    z-index: 2;
    background: #010a04;
  }

  .cyber-overlay {
    position: absolute;
    inset: 8px; 
    border-radius: 32px;
    background: linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.05), transparent); /* Juda xira qilindi, yuz yashil bo'lmasligi uchun */
    z-index: 3;
    pointer-events: none;
    overflow: hidden;
  }
  
  .cyber-overlay::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    animation: scanline 6s linear infinite; /* Animatsiya sekinroq, tabiiyroq o'tadi */
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); box-shadow: 0 20px 50px rgba(0, 255, 65, 0.4); }
  }

  @keyframes scanline {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  @media (max-width: 992px) {
    .img-wrapper {
      width: 380px;
      height: 380px;
    }
  }

  @media (max-width: 768px) {
    .img-wrapper {
      width: 280px;
      height: 280px;
    }
  }
`;

export default Hero;
