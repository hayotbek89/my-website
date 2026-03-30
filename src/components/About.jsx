import { useEffect, useRef } from 'react'

function About() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('fade-in')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Men haqimda</h2>
        <div className="about-content" ref={ref}>
          <p>
            Men o'zimni ijodiy va maqsadga yo'naltirilgan dasturchi deb bilaman.
            So'nggi yillarda turli loyihalar — mobil ilovalar, sun'iy intellekt tizimlari
            va ta'lim sohasidagi interaktiv platformalarni ishlab chiqdim.
          </p>
          <p>
            Ishimda texnik aniqlik, zamonaviy dizayn va foydalanuvchi qulayligini
            birlashtirishga harakat qilaman.
          </p>
          <p>
            Bo'sh vaqtimda yangi texnologiyalarni o'rganaman, loyihalarimni
            takomillashtiraman va o'z bilimlarimni boshqalar bilan bo'lishaman.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
