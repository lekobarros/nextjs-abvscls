import { useEffect, useRef } from 'react'

import Style from './style'
import StyledContainer from 'src/styled/container'

import Projects from 'src/json/projects'

import ProjectItem from './Item'

const AB = (): JSX.Element => {
  return (
    <section className='w-full'>
      <div css={[StyledContainer, Style.container]}>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold'>Works</h2>
        </div>
      </div>

      {
        Projects.map((item, key) => <ProjectItem name={item.project} datetime={item.years} color={item.color} key={key} />)
      }
    </section>
  )
}

export default AB;