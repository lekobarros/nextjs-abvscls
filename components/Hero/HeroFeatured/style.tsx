import { css } from 'styled-components';

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
    transform: translateX(35%);
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    grid-column: 4 / 9;
    transform: translateX(20%);
  }

  @media (min-width: 1364px) {
    overflow: unset;
    transform: translateX(5%);
  }

  @media (min-width: 1920px) {
    transform: translateX(0);
  }
`;

export const styles = {
  containerGrid,
  containerHeroText,
  containerHeroFigure,
}

export default styles;