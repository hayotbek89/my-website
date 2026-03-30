import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'AXSON AI',
    desc: "Sun'iy intellekt asosida ishlaydigan yordamchi tizim. Foydalanuvchilarga savollarga javob berish va turli vazifalarni bajarishda yordam beradi.",
  },
  {
    title: 'BioEdu 3D',
    desc: "Biologiyani 3D formatda o'rgatadigan interaktiv dastur. Talabalar uchun murakkab biologik tuzilmalarni vizual ko'rinishda o'rganish imkoniyati.",
  },
  {
    title: 'ESLATUVCHI',
    desc: "Ovozli eslatma beruvchi mobil ilova. Foydalanuvchilar muhim vazifalar va uchrashuvlarni unutmaslik uchun ovozli eslatmalar sozlashi mumkin.",
  },
  {
    title: 'EduBu',
    desc: "Talabalar uchun AI bilan integratsiyalangan o'quv platforma. Shaxsiylashtirilgan ta'lim va aqlli tavsiyalar tizimi.",
  },
]

function ProjectCard({ title, desc }) {
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
    <article className="project-card" ref={ref}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  )
}

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio / Loyihalarim</h2>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <p className="project-note">
          Har bir loyiha — bu yangi tajriba, yangi imkoniyat va o'sish bosqichi.
        </p>
      </div>
    </section>
  )
}

export default Portfolio
