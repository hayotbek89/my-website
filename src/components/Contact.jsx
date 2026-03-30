import { useEffect, useRef } from 'react'
import styled from 'styled-components'

// ===== GitHub Button =====
const StyledGithubButton = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    gap: 15px;
    background-color: #181717;
    outline: 3px #181717 solid;
    outline-offset: -3px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 400ms;
    margin: 1.2rem auto 0;
  }
  .button .text {
    color: white;
    font-weight: 700;
    font-size: 1em;
    transition: 400ms;
  }
  .button svg path { transition: 400ms; }
  .button:hover { background-color: transparent; }
  .button:hover .text { color: #181717; }
  .button:hover svg path { fill: #181717; }
`

// ===== Instagram 3D Card =====
const StyledCard = styled.div`
  .parent {
    width: 100%;
    height: 300px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(135deg, rgb(255, 100, 130) 0%, rgb(200, 50, 255) 50%, rgb(255, 165, 0) 100%);
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(150, 50, 100, 0) 40px 50px 25px -40px,
      rgba(150, 50, 100, 0.2) 0px 25px 25px -5px;
    position: relative;
    overflow: hidden;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(0deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.7) 100%);
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    backdrop-filter: blur(5px);
    background: rgba(255, 100, 150, 0.2);
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 { width: 170px; transform: translate3d(0,0,20px); top: 8px; right: 8px; }
  .logo .circle2 { width: 140px; transform: translate3d(0,0,40px); top: 10px; right: 10px; backdrop-filter: blur(1px); transition-delay: 0.4s; }
  .logo .circle3 { width: 110px; transform: translate3d(0,0,60px); top: 17px; right: 17px; transition-delay: 0.8s; }
  .logo .circle4 { width: 80px;  transform: translate3d(0,0,80px); top: 23px; right: 23px; transition-delay: 1.2s; }
  .logo .circle5 {
    width: 50px;
    transform: translate3d(0,0,100px);
    top: 30px; right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }
  .logo .circle5 .svg { width: 22px; fill: white; }

  .content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
  }
  .content .title {
    display: block;
    color: #7b0080;
    font-weight: 900;
    font-size: 20px;
  }
  .content .text {
    display: block;
    color: rgba(120, 0, 130, 0.75);
    font-size: 13px;
    margin-top: 10px;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transform: translate3d(0, 0, 26px);
  }

  .view-more {
    display: flex;
    align-items: center;
    gap: 4px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;
  }
  .view-more:hover { transform: translate3d(0, 0, 10px); }
  .view-more-button {
    background: none;
    border: none;
    color: #c000c8;
    font-weight: bold;
    font-size: 13px;
    cursor: pointer;
  }
  .view-more .svg {
    fill: none;
    stroke: #c000c8;
    stroke-width: 3px;
    max-height: 15px;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(150,50,100,0.3) 30px 50px 25px -40px,
      rgba(150,50,100,0.1) 0px 25px 30px 0px;
  }
  .parent:hover .card .logo .circle2 { transform: translate3d(0,0,60px); }
  .parent:hover .card .logo .circle3 { transform: translate3d(0,0,80px); }
  .parent:hover .card .logo .circle4 { transform: translate3d(0,0,100px); }
  .parent:hover .card .logo .circle5 { transform: translate3d(0,0,120px); }
`

// ===== Instagram icon SVG =====
function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

const contacts = [
  {
    title: 'Email',
    content: (
      <a href="mailto:maxmudjonovhayotbek30@gmail.com">
        maxmudjonovhayotbek30@gmail.com
      </a>
    ),
  },
  {
    title: 'Telegram',
    content: (
      <a href="https://t.me/maxmudjonovhayotbek" target="_blank" rel="noopener noreferrer">
        @maxmudjonovhayotbek
      </a>
    ),
  },
  {
    title: 'Manzil',
    content: <p>O'zbekiston</p>,
  },
  {
    title: 'GitHub',
    content: (
      <StyledGithubButton>
        <a href="https://github.com/hayotbek874" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button className="button">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white" />
            </svg>
            <p className="text">GitHub</p>
          </button>
        </a>
      </StyledGithubButton>
    ),
  },
]

function ContactCard({ title, content }) {
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
    <div className="contact-card" ref={ref}>
      <h3>{title}</h3>
      {content}
    </div>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Aloqa</h2>
        <p className="contact-intro">
          Agar sizda savol, hamkorlik taklifi yoki loyiha g'oyasi bo'lsa —
          men bilan bog'laning:
        </p>
        <div className="contact-grid">
          {contacts.map((c) => (
            <ContactCard key={c.title} {...c} />
          ))}
        </div>

        {/* Instagram 3D Card */}
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
          <StyledCard>
            <div className="parent">
              <div className="card">
                <div className="logo">
                  <span className="circle circle1" />
                  <span className="circle circle2" />
                  <span className="circle circle3" />
                  <span className="circle circle4" />
                  <span className="circle circle5">
                    <InstagramIcon />
                  </span>
                </div>
                <div className="glass" />
                <div className="content">
                  <span className="title">Instagram</span>
                  <span className="text">@maxmudjonov_hayotbek</span>
                </div>
                <div className="bottom">
                  <a
                    href="https://www.instagram.com/maxmudjonov_hayotbek/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-more"
                  >
                    <button className="view-more-button">Profilni ko'rish</button>
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </StyledCard>
        </div>

      </div>
    </section>
  )
}

export default Contact
