import { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledScrollTop = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;

  &.visible {
    opacity: 1;
    pointer-events: all;
  }

  button {
    padding: 0.1em 0.25em;
    width: 4.2em;
    height: 4.2em;
    background-color: #212121;
    border: 0.08em solid #fff;
    border-radius: 0.3em;
    font-size: 12px;
    cursor: pointer;
  }

  button span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0.4em;
    width: 2.5em;
    height: 2.5em;
    background-color: #212121;
    border-radius: 0.2em;
    font-size: 1.5em;
    color: #fff;
    border: 0.08em solid #fff;
    box-shadow: 0 0.4em 0.1em 0.019em #fff;
  }

  button span:hover {
    transition: all 0.5s;
    transform: translate(0, 0.4em);
    box-shadow: 0 0 0 0 #fff;
  }

  button span:not(hover) {
    transition: all 1s;
  }
`;

function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <StyledScrollTop className={visible ? 'visible' : ''}>
      <button
        aria-label="Tepaga chiqish"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span>⬆</span>
      </button>
    </StyledScrollTop>
  )
}

export default ScrollTop
