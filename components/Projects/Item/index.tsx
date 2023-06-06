import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import {
  Project,
  ProjectWrap,
  ProjectHeading,
  ProjectDescription,
  ProjectLine
} from './style'

import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

type Props = {
  name: string;
  datetime: string;
  description?: string;
  color?: string;
}

const ProjectItem = ({ name, datetime, description, color }: Props): JSX.Element => {
  const project = useRef<HTMLElement>(null)
  const projectHeading = useRef<HTMLElement>(null)
  const projectDescription = useRef<HTMLElement>(null)
  const projectImages = useRef<HTMLElement>(null)

  return (
    <Project ref={project} color={color}>
      <ProjectWrap>
        <ProjectHeading>
          <h3>{name}</h3>
        </ProjectHeading>
        <ProjectDescription ref={projectDescription}>
          <p>Lead an initiative to modernize the Facebook mobile product from top to bottom by collaborating across disciplines over the course.</p>
        </ProjectDescription>
      </ProjectWrap>
      <ProjectLine />
    </ Project>
  )
}

export default ProjectItem