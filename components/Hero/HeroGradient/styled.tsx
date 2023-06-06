import { css } from 'styled-components';

const wrapper = css`
  display: none;

  @media (min-width: 1024px) {
    display: inline;
    position: absolute;
    z-index: 10;
    inset: 0;
    /* width: clamp(100px, 75vw, 75vw);
    height: clamp(100px, 75vh, 75vh); */
    // inset: 0;
    // height: 50vh;
    pointer-events: none;
    visibility: visible;
    // overflow: hidden;
  }
`;

const radialCircle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 515px;
  height: 515px;
  background: linear-gradient(180deg, #F8E098 0%, #F2C94C 100%);
  filter: blur(60px);
  border-radius: 50%;
`

export const styles = {
  wrapper,
  radialCircle
}

export default styles;