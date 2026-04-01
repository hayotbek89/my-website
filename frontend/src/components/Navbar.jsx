import { useState } from 'react'
import ThemeSwitch from './ThemeSwitch'

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <nav>
      <div className="container">
        <div className="logo">HM</div>
        <div className="nav-right">
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {[
              { href: '#home', label: 'Asosiy' },
              { href: '#about', label: 'Men haqimda' },
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#skills', label: "Ko'nikmalar" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={(e) => handleNavClick(e, href)}>{label}</a>
              </li>
            ))}
          </ul>

          {/* Yangi Holo Theme Switch komponenti */}
          <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />

          <button
            className="hamburger"
            aria-label="Menyu ochish"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
