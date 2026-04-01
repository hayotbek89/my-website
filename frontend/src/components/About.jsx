import React from 'react';
import styled from 'styled-components';
import CyberCard from './CyberCard';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Men haqimda</h2>
        <StyledWrapper>
          <div className="about-content-wrapper">
            <div className="modern-card-container">
              <div className="modern-card-header">
                <h3>Startap g'oyalardan haqiqiy mahsulotgacha</h3>
                <span className="badge">Innovation</span>
              </div>
              <div className="modern-card-body">
                <p>
                  Men o'zimni ijodiy va maqsadga yo'naltirilgan dasturchi deb bilaman.
                  Maqsadim – shunchaki kod yozish emas, balki odamlarga foyda keltiradigan va 
                  biznes jarayonlarini osonlashtiradigan startap loyihalarni yaratish.
                </p>
                <p>
                  So'nggi yillarda turli loyihalar — mobil ilovalar, sun'iy intellekt tizimlari
                  va ta'lim sohasidagi interaktiv SaaS platformalarni ishlab chiqdim.
                </p>
                <p>
                  Ishimda texnik aniqlik, zamonaviy dizayn va eng asosiysi – yuqori darajadagi 
                  foydalanuvchi qulayligini (UX/UI) birlashtirishga harakat qilaman.
                </p>
              </div>
            </div>
            
            {/* O'ng tomondagi Animatsiyali Kartochka */}
            <div className="startup-card-wrapper">
               <CyberCard />
            </div>
            
          </div>
        </StyledWrapper>
      </div>
    </section>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;

  .about-content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    max-width: 1100px;
  }

  .modern-card-container {
    flex: 1;
    max-width: 700px;
    background: var(--card-bg);
    box-shadow: var(--glow);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    padding: 2.5rem;
    transition: transform 0.3s ease;
  }

  .modern-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
  }

  .modern-card-header h3 {
    font-size: 1.4rem;
    color: var(--primary);
    margin: 0;
    font-weight: 600;
  }

  .badge {
    background: rgba(236, 72, 153, 0.1);
    color: var(--secondary);
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .modern-card-body p {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
  }

  .modern-card-body p:last-child {
    margin-bottom: 0;
  }

  .startup-card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 320px;
  }

  @media (max-width: 992px) {
    .about-content-wrapper {
      flex-direction: column;
      gap: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    .modern-card-container { padding: 1.5rem; }
    .modern-card-header h3 { font-size: 1.2rem; }
    .startup-card-wrapper { width: 100%; max-width: 350px; }
  }
`;

export default About;