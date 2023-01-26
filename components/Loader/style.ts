import { css } from 'styled-components'

const loader = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  cursor: none;
  pointer-events: none;
`

const backgroundColor = css`
  position: absolute;
  inset: 0 0 0 0;
  background-color: #000000;
`
const word = css`
  position: absolute;
  top: 50%;
  left: 50%;
  color: #FFFFFF;
  font-size: 1rem;
  line-height: 1.25;
  text-align: center;
  opacity: 0;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const styles = {
  loader,
  backgroundColor,
  word
}

export default styles