import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Dasturlash tillari',
    tags: ['Python', 'Java', 'JavaScript', 'Dart', 'Kotlin'],
  },
  {
    title: 'Texnologiyalar',
    tags: ['Flutter', 'Firebase', 'Node.js', 'Electron', 'HTML & CSS'],
  },
  {
    title: "Soha yo'nalishlari",
    tags: [
      'Mobil ilova ishlab chiqish (Android/iOS)',
      "Sun'iy intellekt tizimlari integratsiyasi",
      'Veb-ilovalar va interfeyslar',
      "3D ta'lim dasturlari",
      'Vibe Coding',
    ],
  },
]

function SkillCategory({ title, tags }) {
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
    <div className="skill-category" ref={ref}>
      <h3>{title}</h3>
      <div className="skill-tags">
        {tags.map((tag) => (
          <span className="skill-tag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Mahorat / Ko'nikmalar</h2>
        <div className="skills-container">
          {skillCategories.map((cat) => (
            <SkillCategory key={cat.title} {...cat} />
          ))}
          <p className="skills-note">
            Texnik bilimdan tashqari, men muammolarni tahlil qilish va
            ijodiy yechim topishda ham mahoratliman.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
