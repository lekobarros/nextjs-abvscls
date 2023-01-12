import styled, { css, keyframes } from 'styled-components';

const container = css`
  overflow-x: hidden;

  display: flex;
  align-items: center;
  position: relative;
  // padding: 1.5rem;
  width: 100%;
  height: 100vh;
  color: #262626;
  background-color: #FFFFFF;
  background-image:    
    linear-gradient(rgb(255, 255, 255) 8px, transparent 2px),
    linear-gradient(90deg, rgba(226, 226, 226, 1) 1px, transparent 2px);
  background-size: 164px 16px, 164px 164px;
  background-position: -2px -2px;

  @media (min-width: 768px) {
    // padding: 4rem 0 4rem 4rem;
  }
`

// Hero
const containerGrid = css`
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 520px;

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-template-rows: repeat(6, minmax(0, 1fr));
    gap: 0.875rem;
  }

  @media (min-width: 1024px) {
    padding-left: 6rem;
    padding-right: 0;
  }

  @media (min-width: 1920px) {
    padding-left: 0;
  }
`
const containerHeroText = css`
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.875rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    grid-column: span 6 / span 6;
    grid-row: 2 / 6;
    gap: 1.5rem;
  }
`;

const containerHeroFigure = css`
  position: absolute;
  z-index: 20;
  transform: translateX(45%);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    height: 100%;
    grid-column: 3 / 9;
    grid-row: 2 / 6;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    grid-column: 4 / 9;
    transform: translateX(0);
  }

  @media (min-width: 1364px) {
    overflow: unset;
    transform: translateX(05%);
  }
`;

const gradints = css`
  visibility: hidden;

  @media (min-width: 768px) {
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    // height: 50vh;
    pointer-events: none;
    visibility: visible;
    overflow: hidden;
  }

  & div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 515px;
    height: 515px;
    background: linear-gradient(180deg, #F8E098 0%, #F2C94C 100%);
    filter: blur(60px);
    border-radius: 50%;

    &:first-child {
      left: 0;
      bottom: 0;
    }

    &:last-child { 
      background: linear-gradient(180deg, rgba(101,83,67, 0.5) 0%, rgba(155,185,168, 0.75) 100%);
      bottom: calc((((515px * 0.5) / 2)  * -1));
      left: calc((((515px * 0.5) / 2 ) * -1));
    }
  }
`

const spinnerFramer = keyframes`
  0% {
    transform:rotate(0); 
  }
  to{
    transform:rotate(1turn)
  }
`;

const spinner = css`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    z-index: 50;
    right: -11%;
    animation: ${spinnerFramer} 16s linear 0s infinite;
  }
`

export const styles = {
  container,
  containerGrid,
  containerHeroText,
  containerHeroFigure,
  gradints,
  spinner
}

export default styles;