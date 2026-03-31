import React from 'react';
import styled from 'styled-components';

const skillCategories = [
  {
    title: 'Dasturlash tillari',
    tags: ['Python', 'Java', 'JavaScript', 'Dart', 'Kotlin'],
    icon: (
      <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
      </svg>
    ),
    rotate: -15
  },
  {
    title: 'Texnologiyalar',
    tags: ['Flutter', 'Firebase', 'Node.js', 'Electron', 'HTML & CSS'],
    icon: (
      <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-75.6 67.9c.7 5.4 1.1 10.9 1.1 16.5s-.4 11.1-1.1 16.5l75.6 67.9c6.9 6.2 9.6 15.9 6.4 24.6l-44.3 119.7c-3.2 8.7-11.4 14.1-20.1 14.1c-2.4 0-4.8-.4-7.1-1.2l-98.2-34.4c-13.1 9.3-27.4 17.1-42.7 22.9l-22.1 101.9c-2.1 9.6-10.7 16.5-20.6 16.5H164.7c-9.9 0-18.5-6.9-20.6-16.5L122 411.7c-15.3-5.8-29.6-13.6-42.7-22.9L20.1 423.2c-2.3 .8-4.7 1.2-7.1 1.2c-8.7 0-16.9-5.4-20.1-14.1L-31.4 290.6c-3.2-8.7-.5-18.4 6.4-24.6l75.6-67.9c-.7-5.4-1.1-10.9-1.1-16.5s.4-11.1 1.1-16.5L-25 97.2c-6.9-6.2-9.6-15.9-6.4-24.6l44.3-119.7c3.2-8.7 11.4-14.1 20.1-14.1c2.4 0 4.8 .4 7.1 1.2l98.2 34.4c13.1-9.3 27.4-17.1 42.7-22.9l22.1-101.9c2.1-9.6 10.7-16.5 20.6-16.5H347.3c9.9 0 18.5 6.9 20.6 16.5l22.1 101.9c15.3 5.8 29.6 13.6 42.7 22.9l98.2-34.4c2.3-.8 4.7-1.2 7.1-1.2c8.7 0 16.9 5.4 20.1 14.1l44.3 119.7zM256 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
      </svg>
    ),
    rotate: 5
  },
  {
    title: "Yo'nalishlar",
    tags: ['Mobile (Android/iOS)', 'AI Integration', 'Web Apps', '3D Edu', 'Vibe Coding'],
    icon: (
      <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>
    ),
    rotate: 25
  }
];

const Skills = () => {
  return (
    <SkillsWrapper id="skills">
      <div className="container">
        <h2 className="section-title">Mahorat / Ko'nikmalar</h2>
        <div className="skills-stack-container">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              data-text={cat.title}
              style={{ '--r': cat.rotate }}
              className="glass"
            >
              <div className="content">
                <div className="icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <div className="tag-cloud">
                  {cat.tags.map(tag => (
                    <span className="mini-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="skills-note">
          Texnik bilimdan tashqari, men muammolarni tahlil qilish va ijodiy yechim topishda ham mahoratliman.
        </p>
      </div>
    </SkillsWrapper>
  );
};

const SkillsWrapper = styled.section`
  padding: 100px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 60px;
    font-family: 'Orbitron', sans-serif;
    background: linear-gradient(135deg, #00ff41, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .skills-stack-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 450px;
    padding: 40px 0;
  }

  .skills-stack-container .glass {
    position: relative;
    width: 280px;
    height: 380px;
    background: rgba(13, 17, 23, 0.85);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(0, 255, 65, 0.2);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 24px;
    margin: 0 -100px;
    transform: rotate(calc(var(--r) * 1deg));
    z-index: 1;
  }

  .skills-stack-container:hover .glass {
    transform: rotate(0deg);
    margin: 0 20px;
    border-color: #00ff41;
    box-shadow: 0 0 40px rgba(0, 255, 65, 0.4);
  }

  .glass .content {
    padding: 25px;
    text-align: center;
    width: 100%;
  }

  .glass .icon {
    font-size: 3.5rem;
    color: #00ff41;
    margin-bottom: 20px;
    fill: #00ff41;
    filter: drop-shadow(0 0 10px rgba(0, 255, 65, 0.5));
  }

  .glass h3 {
    color: #00ff41;
    margin-bottom: 20px;
    font-size: 1.3rem;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 1px;
  }

  .tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .mini-tag {
    background: rgba(0, 255, 65, 0.1);
    border: 1px solid rgba(0, 255, 65, 0.3);
    color: #d0ffd4;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    transition: 0.3s;
  }

  .mini-tag:hover {
    background: rgba(0, 255, 65, 0.2);
    border-color: #00ff41;
    transform: translateY(-2px);
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(to top, rgba(0, 255, 65, 0.15), transparent);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00ff41;
    font-weight: bold;
    font-size: 0.8rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    opacity: 0;
    transition: 0.5s;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }

  .skills-stack-container:hover .glass::before {
    opacity: 1;
  }

  .skills-note {
    margin-top: 60px;
    color: #4a6552;
    font-size: 0.95rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    border-top: 1px solid rgba(0, 255, 65, 0.1);
    padding-top: 20px;
  }

  @media (max-width: 992px) {
    .skills-stack-container {
      flex-direction: column;
      min-height: auto;
      gap: 40px;
    }
    .skills-stack-container .glass {
      margin: 0;
      transform: rotate(0deg);
      width: 90%;
      max-width: 400px;
    }
  }
`;

export default Skills;
