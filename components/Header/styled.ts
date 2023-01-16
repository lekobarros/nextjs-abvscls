import { css, keyframes } from 'styled-components';

export const header = css`
  position: fixed;
  z-index: 100;
  right: 0;
  left: 0;
  padding-top: 5rem;
  padding-bottom: 5rem;
  user-select: none;

  /* color: white;
  mix-blend-mode: exclusion;   */
`;

export const wrapper = css`
  /* display: flex;
  justify-content: space-between; */
`

export const magnetArea = css`
    /* position: absolute;
    left: -2em;
    top: -2em;
    right: -2em;
    bottom: -2em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red; */
`;

export const magnetChild = css`
  /* transform: translate(var(--x, 0), var(--y, 0));
  transition: transform cubic-bezier(.17,.67,.83,.67) .6s;
  will-change: transform; */
`;

export const list = css`
  /* position: relative;
  display: flex;
  flex-direction: row;
  gap: 2.1875vw; */
`
export const listChild = css`
  /* display: inline-block;

  a {
    display: block;
    position: relative;
    padding: 0.5em 1em;
    font-weight: 500;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: calc(100% - 1em) calc(100% - 0.25em);
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.4s ease, color 0.2s ease-in-out;

    &:hover {
      background-position: 1em calc(100% - 0.25em);
      background-size: calc(100% - 2em) 2px;
    }
  } */
`


export const styles = {
  header,
  wrapper,
  magnetArea,
  magnetChild,
  list,
  listChild
}

export default styles;


// .magnetArea {
//   position: absolute;
//   left: -2em;
//   top: -2em;
//   right: -2em;
//   bottom: -2em;
//   // z-index: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   // border-radius: 100%;
// }