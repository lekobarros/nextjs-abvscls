import { css } from 'styled-components'

export const container = css`
position: relative;
z-index: 99;
  width: 100%;
  overflow-x: hidden;
//  padding-top: 12rem;
  /* background-color: #FFFFFF;
  background-image:    
    linear-gradient(rgb(255, 255, 255) 8px, transparent 2px),
    linear-gradient(90deg, rgba(226, 226, 226, 1) 1px, transparent 2px);
  background-size: 164px 16px, 164px 164px;
  background-position: -2px -2px; */
`

export const wrapper = css`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  height: 520px;
  font-size: 20rem;

  * > * {
  height: 0.75em;
    position: relative;
    white-space: nowrap;
    top: -0.14em;
    padding-right: 0.43em;
    line-height: 1;
    color: #FFFFFF;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #9bb9a8;

    &:hover {
      color: #9bb9a8;
    }
  }
`



export const style = {
  container,
  wrapper
}

export default style