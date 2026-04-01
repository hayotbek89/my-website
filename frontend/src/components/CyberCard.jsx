import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TerminalWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: rgba(1, 10, 4, 0.85); /* Qorong'u kiber fon */
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 65, 0.2);
  box-shadow: 0 10px 30px rgba(0, 255, 65, 0.1), inset 0 0 15px rgba(0, 255, 65, 0.05);
  overflow: hidden;
  font-family: 'Share Tech Mono', monospace;
  position: relative;
  
  /* Yorug'lik effekti (Grid) */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: 0;
    pointer-events: none;
  }
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: rgba(0, 255, 65, 0.05);
  border-bottom: 1px solid rgba(0, 255, 65, 0.15);
  position: relative;
  z-index: 1;

  .dots {
    display: flex;
    gap: 8px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    /* Cyber ranglardagi Mac tugmachalari */
    &.red { background: #ff003c; box-shadow: 0 0 8px rgba(255, 0, 60, 0.5); }
    &.yellow { background: #ffbd2e; box-shadow: 0 0 8px rgba(255, 189, 46, 0.5); }
    &.green { background: #00ff41; box-shadow: 0 0 8px rgba(0, 255, 65, 0.5); }
  }

  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.85rem;
    color: #00d4ff;
    letter-spacing: 1px;
    text-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
  }
`;

const TerminalBody = styled.div`
  padding: 24px;
  font-size: 0.9rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
  min-height: 250px;
  color: #a8c4aa;

  p { margin: 4px 0; }

  /* Kiber kod yoritilishlari (Syntax Highlighting) */
  .bracket { color: #00d4ff; } /* Cyan */
  .tag { color: #ff003c; text-shadow: 0 0 5px rgba(255, 0, 60, 0.4); } /* Neon Red */
  .attr { color: #00ff41; } /* Neon Green */
  .string { color: #ffbd2e; } /* Yellow */
  .text-content { color: #e0e0e0; }
  .comment { color: #4a6552; font-style: italic; }
  
  /* Kursor miltillashi */
  .cursor {
    display: inline-block;
    width: 8px;
    height: 15px;
    background: #00ff41;
    margin-left: 4px;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const CyberCard = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  // Siz yuborgan kodni Kiber-kod tarzida namoyish etish
  const codeLines = [
    { type: 'comment', content: '// Kiber-modul: ProgressBar_v2.0.tsx yüklenmoqda...' },
    { type: 'code', content: '<CyberCard level="secure">' },
    { type: 'code', content: '  <Flex mode="stealth" className="init-seq">' },
    { type: 'code', content: '    <Text color="neon-blue">' },
    { type: 'code', content: '      <Bold>Target Achieved: </Bold> 89%' },
    { type: 'code', content: '    </Text>' },
    { type: 'code', content: '    <Metric status="encrypted"> $ 4,096,128 </Metric>' },
    { type: 'code', content: '  </Flex>' },
    { type: 'code', content: '  <ProgressBar ' },
    { type: 'code', content: '    value={89} ' },
    { type: 'code', content: '    color="hacker-green" ' },
    { type: 'code', content: '    animation="pulse" ' },
    { type: 'code', content: '  />' },
    { type: 'code', content: '</CyberCard>' },
    { type: 'comment', content: 'root@hayotbek:~# Tizim muvaffaqiyatli ishga tushirildi...' },
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timer;

    const typeWriter = () => {
      if (currentLine < codeLines.length) {
        const line = codeLines[currentLine];
        
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[currentLine]) {
            newLines[currentLine] = { type: line.type, content: '' };
          }
          newLines[currentLine].content = line.content.substring(0, currentChar + 1);
          return newLines;
        });

        currentChar++;

        if (currentChar >= line.content.length) {
          currentChar = 0;
          currentLine++;
          timer = setTimeout(typeWriter, 400); // Qatorlar orasidagi pauza
        } else {
          timer = setTimeout(typeWriter, 30); // Harflar yozilish tezligi
        }
      } else {
        setIsTyping(false);
      }
    };

    timer = setTimeout(typeWriter, 1000); // Boshlashdan oldin pauza

    return () => clearTimeout(timer);
  }, []);

  // Formatlash funksiyasi
  const formatCode = (text, type) => {
    if (type === 'comment') return <span className="comment">{text}</span>;

    // Kiber syntax highlight uchun oddiy regex format
    return text.split(/([<>= "{}\/])/).map((part, index) => {
      if (part === '<' || part === '>' || part === '/' || part === '=') return <span key={index} className="bracket">{part}</span>;
      if (part === '{' || part === '}') return <span key={index} className="string">{part}</span>;
      if (part === '"') return <span key={index} className="string">{part}</span>;
      
      if (['CyberCard', 'Flex', 'Text', 'Bold', 'Metric', 'ProgressBar'].includes(part)) {
        return <span key={index} className="tag">{part}</span>;
      }
      if (['level', 'mode', 'className', 'color', 'status', 'value', 'animation'].includes(part)) {
        return <span key={index} className="attr">{part}</span>;
      }
      if (part.startsWith('neon') || part.startsWith('secure') || part.startsWith('stealth') || part.match(/^[0-9]+$/)) {
         return <span key={index} className="string">{part}</span>;
      }
      
      return <span key={index} className="text-content">{part}</span>;
    });
  };

  return (
    <TerminalWrapper>
      <TerminalHeader>
        <div className="dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="title">root@hayotbek:~# ProgressBar.tsx</div>
      </TerminalHeader>
      
      <TerminalBody>
        {displayedLines.map((line, index) => (
          <p key={index} style={{ paddingLeft: line.content.startsWith('  ') ? (line.content.startsWith('    ') ? '32px' : '16px') : '0' }}>
            {formatCode(line.content, line.type)}
          </p>
        ))}
        {isTyping && <span className="cursor" />}
      </TerminalBody>
    </TerminalWrapper>
  );
};

export default CyberCard;