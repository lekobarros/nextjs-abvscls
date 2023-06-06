import styled, { css } from 'styled-components';

const Container = css`
  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 100%;

  @media (min-width: 640px) { 
    max-width: 640px;
  }

  @media (min-width: 768px) { 
    padding-right: 0rem;
    padding-left: 0rem;
    max-width: 768px;
  }

  @media (min-width: 1024px) { 
    max-width: 1024px;
  }

  @media (min-width: 1280px) { 
    max-width: 1280px;
  }

  @media (min-width: 1920px) {
    max-width: 1536px;
  }
`

export default Container;