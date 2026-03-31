import { useEffect, useRef } from 'react'
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
          <div className="profile-card">
            <img
              src="/images/img.png"
              alt="Hayotbek Maxmudjonov"
              className="original-profile-img"
            />
            <div className="card-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
