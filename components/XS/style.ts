import { css } from 'styled-components'

const section = css`
  height: 300vh;
  position: relative;
  z-index: 99;
`
const cx = css`
height: 100vh;
    margin-bottom: 1000px;
  background-color: red;
  text-align: center;
    pointer-events: none;
    display: flex;
`

export const styles = {
  section,
  cx
}

export default styles