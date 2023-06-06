import { useEffect, useRef } from 'react'

// GSAP
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Style from './style'

const AB = (): JSX.Element => {
  const section = useRef<HTMLDivElement>(null);
  const elRow = useRef<HTMLDivElement>(null);

  useEffect(() => {

    let tl: GSAPTimeline = gsap.timeline({
      // paused: !0,
      scrollTrigger: {
        trigger: elRow.current,
        pin: true,
        start: "top top",
        end: "+=500",
        toggleActions: 'play',
        markers: true,
        onEnter: () => {
          console.log('in')
          // tl.play();
        },
        onLeave: () => {
          console.log('out')
          // tl.play();
        },
      }
    });

  })

  return (
    <section css={Style.section} ref={section}>
      <div className="here-class" css={Style.cx} ref={elRow}>
        <div className="cb-tagreel-item"><span>FRONT-END DEVELOPER</span></div>
      </div>
      <div>
        Aqua
        dUO
        OJOJ
      </div>
    </section>
  )
}

export default AB;