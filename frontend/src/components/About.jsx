import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Men haqimda</h2>
        <StyledWrapper>
          <div className="terminal-container">
            <div className="terminal_toolbar">
              <div className="butt">
                <button className="btn btn-red" />
                <button className="btn btn-yellow" />
                <button className="btn btn-green" />
              </div>
              <p className="user">hayotbek@admin: ~</p>
              <div className="add_tab">+</div>
            </div>
            <div className="terminal_body">
              <div className="terminal_prompt">
                <span className="terminal_user">hayotbek@admin:</span>
                <span className="terminal_location">~</span>
                <span className="terminal_bling">$</span>
                <span className="terminal_command">cat about_me.txt</span>
              </div>

              <div className="about-text-content">
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

              <div className="terminal_prompt">
                <span className="terminal_user">hayotbek@admin:</span>
                <span className="terminal_location">~</span>
                <span className="terminal_bling">$</span>
                <span className="terminal_cursor" />
              </div>
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

  .terminal-container {
    width: 100%;
    max-width: 900px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(0, 255, 65, 0.2);
    background: #1a1a1a;
  }

  .terminal_toolbar {
    display: flex;
    height: 35px;
    align-items: center;
    padding: 0 15px;
    background: #252525;
    justify-content: space-between;
    border-bottom: 1px solid #333;
  }

  .butt {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn {
    height: 12px;
    width: 12px;
    border: none;
    border-radius: 50%;
  }

  .btn-red { background: #ff5f56; }
  .btn-yellow { background: #ffbd2e; }
  .btn-green { background: #27c93f; }

  .user {
    color: #aaa;
    font-size: 13px;
    font-family: 'Share Tech Mono', monospace;
  }

  .add_tab {
    color: #666;
    font-size: 18px;
    cursor: pointer;
  }

  .terminal_body {
    background: rgba(10, 10, 10, 0.95);
    padding: 30px;
    font-family: 'Share Tech Mono', monospace;
    min-height: 320px;
  }

  .terminal_prompt {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 16px;
  }

  .terminal_user { color: #00ff41; }
  .terminal_location { color: #00d4ff; margin-left: 5px; }
  .terminal_bling { color: #fff; margin-left: 5px; }
  .terminal_command { color: #fff; margin-left: 10px; }

  .about-text-content {
    color: #a8c4aa;
    font-size: 16px;
    line-height: 1.8;
    margin: 20px 0 30px 20px;
    border-left: 2px solid rgba(0, 255, 65, 0.1);
    padding-left: 25px;
  }

  .about-text-content p {
    margin-bottom: 15px;
  }

  .terminal_cursor {
    display: block;
    height: 20px;
    width: 10px;
    margin-left: 10px;
    background: #00ff41;
    animation: curbl 1s infinite;
  }

  @keyframes curbl {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  @media (max-width: 768px) {
    .terminal_body { padding: 20px; }
    .about-text-content { font-size: 14px; margin-left: 10px; padding-left: 15px; }
    .terminal_prompt { font-size: 14px; }
  }
`;

export default About;
