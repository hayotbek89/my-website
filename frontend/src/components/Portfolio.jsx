import React from 'react';
import styled from 'styled-components';

const projects = [
  {
    title: 'Veb-Sayt Tarjimon',
    desc: "Saytlarni avtomatik tarjima qilish vositasi.",
    link: "https://v0-translate-my-website.vercel.app/",
    rotate: -5
  },
  {
    title: 'Studio Web',
    desc: "Ijodiy loyihalar uchun interaktiv platforma.",
    link: "https://studio-three-ebon.vercel.app/",
    rotate: 15
  },
  {
    title: 'EduBio React',
    desc: "Talabalar uchun interaktiv platforma.",
    link: "https://edubio-reactjs.vercel.app/",
    rotate: 25
  }
];

const Portfolio = () => {
  return (
    <StyledWrapper id="portfolio">
      <div className="container-main">
        <h2 className="section-title">Portfolio / Loyihalarim</h2>
        <div className="card-stack-container">
          {projects.map((project, index) => (
            <div
              key={index}
              data-text={project.link ? "SAYTGA O'TISH ↗" : project.title}
              style={{ '--r': project.rotate }}
              className="glass"
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="content" style={{ padding: project.link ? '15px' : '20px' }}>
                {project.link ? (
                  <div className="iframe-preview-container">
                    <div className="iframe-blocker"></div>
                    <iframe
                      src={project.link}
                      title={project.title}
                      scrolling="no"
                      className="preview-iframe"
                    />
                  </div>
                ) : (
                  <div className="icon">{project.icon}</div>
                )}
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                {project.link && (
                    <span className="visit-link">Kengaytirib ko'rish</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="project-note">
          Har bir loyiha — bu yangi tajriba, yangi imkoniyat va o'sish bosqichi.
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  padding: 80px 0;

  .container-main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 60px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .card-stack-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    padding: 40px 0;
  }

  .card-stack-container .glass {
    position: relative;
    width: 260px;
    height: 350px;
    background: var(--card-bg);
    backdrop-filter: blur(15px);
    border: 1px solid var(--border-color);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 20px;
    margin: 0 -80px; 
    transform: rotate(calc(var(--r) * 1deg));
    z-index: 1;
    cursor: pointer;
  }

  .card-stack-container:hover .glass {
    transform: rotate(0deg);
    margin: 0 15px;
    border-color: var(--primary);
    box-shadow: var(--glow);
  }

  .glass .content {
    width: 100%;
    text-align: center;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .glass .icon {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 15px;
    fill: var(--primary);
  }

  /* Live Iframe uchun konteyner */
  .iframe-preview-container {
    position: relative;
    width: 100%;
    height: 140px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 15px;
    border: 1px solid var(--border-color);
    background: var(--bg-dark);
  }

  /* Iframe hover effectni buzmasligi uchun ustiga blocker qoyildi */
  .iframe-blocker {
    position: absolute;
    inset: 0;
    z-index: 10;
  }

  .preview-iframe {
    width: 140%;
    height: 140%;
    border: none;
    transform: scale(0.71);
    transform-origin: 0 0;
    pointer-events: none; 
  }

  .glass h3 {
    color: var(--text);
    margin-bottom: 8px;
    font-size: 1.2rem;
  }

  .glass p {
    color: var(--text-muted);
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 0;
  }

  .visit-link {
    display: inline-block;
    margin-top: 10px;
    font-size: 0.75rem;
    color: var(--primary);
    font-weight: 600;
    background: rgba(99, 102, 241, 0.1);
    padding: 4px 10px;
    border-radius: 6px;
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    background: rgba(99, 102, 241, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary);
    font-weight: bold;
    font-size: 0.8rem;
    letter-spacing: 2px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    opacity: 0;
    transition: 0.5s;
  }

  .card-stack-container:hover .glass::before {
    opacity: 1;
  }

  .project-note {
    margin-top: 50px;
    color: var(--text-muted);
    font-style: italic;
  }

  @media (max-width: 992px) {
    .card-stack-container {
      flex-direction: column;
      gap: 20px;
    }
    .card-stack-container .glass {
      margin: 0;
      transform: rotate(0deg);
    }
  }
`;

export default Portfolio;