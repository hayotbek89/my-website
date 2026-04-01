import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: inline-block; /* Yonma-yon turishi uchun */

  .button {
    /* in scss with just one variable i can change opacity with rgba(variable, opacity) but in css it's not possible so i have used three seperate variables */
    /* with hue-rotate color can be changed */
    --main-color: rgb(46, 213, 115);
    --main-bg-color: rgba(46, 213, 116, 0.36);
    --pattern-color: rgba(46, 213, 116, 0.073);

    /* change this rotation value */
    filter: hue-rotate(0deg);

    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.2rem; /* Matn qatoriga qarab sal moslashtirildi */
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
    background-position:
      center center,
      center center,
      center center;
    border-image: radial-gradient(
        circle,
        var(--main-color) 0%,
        rgba(0, 0, 0, 0) 100%
      )
      1;
    border-width: 1px 0 1px 0;
    color: var(--main-color);
    padding: 1rem 2rem; /* Padding matn uzunroq bo'lganda ham chiroyli turishi uchun biroz kichraytirildi */
    font-weight: 700;
    font-size: 1rem; /* Boshqa matnlar bilan moslashishi uchun shrift qisqartirildi */
    transition: background-size 0.2s ease-in-out;
    background-color: transparent; /* Orqa fon muammosi chiqmasligi uchun */
    font-family: inherit;
    text-align: center;
  }

  .button:hover {
    background-size:
      cover,
      10px 10px,
      10px 10px;
  }
  .button:active {
    filter: hue-rotate(250deg);
  }

  a {
    color: inherit;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

function Button({ children, onClick, href }) {
  if (href) {
    return (
      <StyledWrapper>
        <button className="button" onClick={onClick}>
          <a href={href}>{children}</a>
        </button>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </StyledWrapper>
  );
}

export default Button;
