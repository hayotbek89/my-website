import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CyberBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Matrix harflari (Kiberxavfsizlikka mos belgilar)
    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&%*<>[]{}/\\';
    const fontSize = 16;
    const columns = width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      // Fonni biroz shaffof qora qilish (iz qoldirish uchun)
      ctx.fillStyle = 'rgba(1, 10, 4, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00ff41'; // Matrix yashil rangi
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <CanvasContainer ref={canvasRef} />;
};

const CanvasContainer = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2; /* Hamma narsadan orqada turishi uchun */
  opacity: 0.6; /* Matnlar o'qilishiga xalaqit bermasligi uchun */
`;

export default CyberBackground;
