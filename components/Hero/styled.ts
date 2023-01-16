import styled, { css, keyframes } from 'styled-components';

const container = css`
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
  overflow: hidden;
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
  spinner
}

export default styles;