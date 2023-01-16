import { css } from 'styled-components';

const wrapper = css`
  visibility: hidden;

  @media (min-width: 768px) {
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 0;
    width: clamp(100px, 75vw, 75vw);
    height: clamp(100px, 75vh, 75vh);
    // inset: 0;
    // height: 50vh;
    pointer-events: none;
    visibility: visible;
    overflow: hidden;
  }
`;

const radialCircle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 515px;
  height: 515px;
  filter: blur(60px);
  border-radius: 50%;
`

const radialCircleFirst = css`
  background: radial-gradient(farthest-corner at center center, #F2C94C 0%, #FDF7E4 100%);
`;

const radialCircleSecond = css`
  bottom: -215px;
  left: -215px;
  background: radial-gradient(farthest-corner at center center, rgba(101,83,67, 0.50) 0%, rgba(101,83,67, 0.50) 25%, rgba(155,185,168, 1) 100%);
`;

export const styles = {
  wrapper,
  radialCircle,
  radialCircleFirst,
  radialCircleSecond
}

export default styles;