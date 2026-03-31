import React from 'react';
import styled from 'styled-components';

const projects = [
  {
    title: 'AXSON AI',
    desc: "Sun'iy intellekt asosida ishlaydigan yordamchi tizim.",
    icon: (
      <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M320 0c17.7 0 32 14.3 32 32V96H472c22.1 0 40 17.9 40 40V472c0 22.1-17.9 40-40 40H168c-22.1 0-40-17.9-40-40V136c0-22.1 17.9-40 40-40H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm160 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H368z" />
      </svg>
    ),
    rotate: -15
  },
  {
    title: 'BioEdu 3D',
    desc: "Biologiyani 3D formatda o'rgatadigan interaktiv dastur.",
    icon: (
      <svg viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M210.6 5.9c.3-.1.5-.1.9-.2c.3 0 .5-.1.8-.1c.3 0 .6 0 .8.1c.3 0 .6.1.9.2l192 80c4.4 1.8 7.3 6.1 7.3 10.8s-2.9 9-7.3 10.8l-192 80c-1.8.7-3.9.7-5.7 0l-192-80C2.9 105.7 0 101.4 0 96.7s2.9-9 7.3-10.8l192-80z" />
      </svg>
    ),
    rotate: -5
  },
  {
    title: 'ESLATUVCHI',
    desc: "Ovozli eslatma beruvchi mobil ilova.",
    icon: (
      <svg viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
      </svg>
    ),
    rotate: 15
  },
  {
    title: 'EduBu',
    desc: "Talabalar uchun AI platforma.",
    icon: (
      <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H576V64H224v48c-10.7 0-21 1.4-30.8 4.1L160 64z" />
      </svg>
    ),
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
              data-text={project.title}
              style={{ '--r': project.rotate }}
              className="glass"
            >
              <div className="content">
                <div className="icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
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
    background: linear-gradient(135deg, #00ff41, #00d4ff);
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
    height: 320px;
    background: rgba(13, 17, 23, 0.8);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(0, 255, 65, 0.2);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 20px;
    margin: 0 -80px; /* Kartochkalarni ustma-ust qilish */
    transform: rotate(calc(var(--r) * 1deg));
    z-index: 1;
  }

  .card-stack-container:hover .glass {
    transform: rotate(0deg);
    margin: 0 15px;
    border-color: #00ff41;
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
  }

  .glass .content {
    padding: 20px;
    text-align: center;
    transition: 0.5s;
  }

  .glass .icon {
    font-size: 3rem;
    color: #00ff41;
    margin-bottom: 15px;
    fill: #00ff41;
  }

  .glass h3 {
    color: #00ff41;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .glass p {
    color: #a8c4aa;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    background: rgba(0, 255, 65, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00ff41;
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
    color: #4a6552;
    font-style: italic;
  }

  @media (max-width: 768px) {
    .card-stack-container {
      flex-direction: column;
      gap: 30px;
    }
    .card-stack-container .glass {
      margin: 0;
      transform: rotate(0deg);
    }
  }
`;

export default Portfolio;
