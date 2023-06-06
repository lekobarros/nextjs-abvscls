import styled, { css } from 'styled-components'

export const Project = styled.div`
  position: relative;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  transition: all 800ms cubic-bezier(0.86, 0, 0.07, 1);

  &:hover {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  &:hover {
    background-color: ${props => props.color};
  }
`

export const ProjectWrap = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  place-content: center space-between;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem; */


    min-height: 180px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  margin: 0 auto;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  width: 100%;
  max-width: 1440px;

  justify-content: space-between;
  justify-items: stretch;
  align-items: center;

  font-family: Satoshi, sans-serif;
`;

export const ProjectHeading = styled.div`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 2;

  h3 {
    font-size: 3.75rem;
    font-weight: bold;
    line-height: 1;
  }
`

export const ProjectParagraph = styled.p`
  flex: 0 0 auto;
  display: flex;
  align-items: center;

  position: relative;
  width: 100%;
  max-width: 600px;
  color: #3D4545;
	font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

export const ProjectImages = styled.div`
  grid-gap: 1;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  place-content: center end;
  margin-left: auto;
  display: grid;
`

export const ProjectDescription = styled.div`
  grid-column-end: 13;
  grid-column-start: 8;
  grid-row-end: 2;
  grid-row-start: 1;
`

export const ProjectLine = styled.div`
  position: absolute;
  left: 0;
  top: auto;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  max-width: 85rem;
  margin-right: auto;
  margin-left: auto;
  background-color: rgba(27, 27, 27, 0.05);
`

export default {
  Project,
  ProjectWrap,
  ProjectHeading,
  ProjectDescription,
  ProjectLine
}
