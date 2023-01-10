import { css } from 'styled-components';

const heroMediaSocial = css`
  display: none;

  @media (min-width: 1024px) {
    position: absolute;
    z-index: 50;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    transform-origin: left bottom;
    transform: rotate(-90deg) translateY(100%);
  }

  ul li {
    position: relative;
    transition-timing-function: ease-in-out;
    transition-delay: 0.1s;

    &:hover {
      transform: scale3d(1.1, 1.1, 1.1);
      transition-duration: 0.1s;
      transition-delay: 0s;
    }
  }
`;

const heroMediaSocialOutline = css`
  width: 5rem;
  height: 2px;
  background-color: #000000;
`;

export const style = {
  heroMediaSocial,
  heroMediaSocialOutline
}

export default style;