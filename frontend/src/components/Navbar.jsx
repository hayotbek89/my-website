import { useState } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  /* Asosiy navigatsiya uslublari qolishi kerak (container, logo, h.k.) */
  
  .nav-links li a {
    /* Effektni kuchaytirish uchun alfa kanallarini (opacity) oshirildi */
    --main-color: rgb(46, 213, 115);
    --main-bg-color: rgba(46, 213, 116, 0.45); /* 0.15 dan 0.45 ga oshirildi - orqa fon yorqinlashdi */
    --pattern-color: rgba(46, 213, 116, 0.2); /* 0.05 dan 0.2 ga oshirildi - katakchalar aniqroq boldi */

    display: inline-block;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    color: #e0e0e0; /* Asl holatida ham ancha yorqin oq-kulrang */
    padding: 0.5rem 1rem;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    text-decoration: none;
    border-radius: 4px;
    
    /* Grid effektlar */
    background: radial-gradient(
        circle,
        var(--main-bg-color) 0%,
        rgba(0, 0, 0, 0) 95%
      ),
      linear-gradient(var(--pattern-color) 1px, transparent 1px),
      linear-gradient(to right, var(--pattern-color) 1px, transparent 1px);
    background-size:
      cover,
      15px 15px,
      15px 15px;
    background-position: center center;
    
    /* Dastlabki holatida ham biroz neon yorug'lik ko'rinib tursin */
    opacity: 0.9;
    border-bottom: 1px solid transparent; /* Sakramog'i uchun oldindan border */
  }

  .nav-links li a:hover,
  .nav-links li a.active {
    color: var(--main-color);
    opacity: 1;
    /* Hover paytida gridlar (katakchalar) maydalashadi va yorqinlik kuchayadi */
    background-size:
      cover,
      10px 10px,
      10px 10px;
    border-image: radial-gradient(
        circle,
        var(--main-color) 0%,
        rgba(0, 0, 0, 0) 100%
      )
      1;
    border-width: 0 0 2px 0; /* Pastki chiziq neon ko'rinishida qalinroq beriladi */
    border-style: solid;
    text-shadow: 0 0 12px rgba(46, 213, 115, 0.8), 0 0 20px rgba(46, 213, 115, 0.4); /* Neon effekti kuchaytirildi */
  }
`;

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
    <StyledNav>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo-container">
          <span className="logo-bracket">[</span>
          <span className="logo-text">HM</span>
          <span className="logo-bracket">]</span>
        </div>

        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`} style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, padding: 0 }}>
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

          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Theme Toggle">
            {theme === 'dark' ? '⚡' : '🌙'}
          </button>

          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            style={{ display: 'none' }} // Mobile ko'rinishida qolishi uchun keyinroq CSS dan to'g'irlanadi
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </StyledNav>
  )
}

export default Navbar
