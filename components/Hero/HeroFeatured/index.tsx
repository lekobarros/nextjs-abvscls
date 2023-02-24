import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import StyledContainer from 'src/styled/container'
import Style from './style'

// Context
import { useAnimationContext } from 'src/context'

// Images
import HeroWebpSm from 'src/imgs/hero_sm.webp'
import HeroWebpLg from 'src/imgs/hero_abvscls.webp'
import Hero from 'src/imgs/hero_abvscls.jpg'

gsap.registerEffect({
  name: 'slidingItem',
  effect: (targets: any, config: any) => {
    return gsap.to(targets, {
      startAt: { ...config.startAt },
      opacity: 1,
      translateY: '0%',
      rotate: 0,
      transformOrigin: config.transformOrigin,
      ease: config.ease,
      delay: config.delay,
      duration: config.duration,
      stagger: config.stagger
    })
  },
  defaults: { startAt: { opacity: 0, translateY: '50%', rotate: 3, transformOrigin: 'center left', ease: "circ.inOut" }, duration: 0.8, delay: 0, stagger: 0 },
  extendTimeline: true,
})

const HeroFeatured = (): JSX.Element => {
  const { animationCompleted } = useAnimationContext()

  const elSurname = useRef<HTMLDivElement>(null)
  const elMainText = useRef<HTMLDivElement>(null)
  const elText = useRef<HTMLDivElement>(null)
  const elDescription = useRef<HTMLDivElement>(null)
  const elFigure = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl: GSAPTimeline = gsap.timeline({ paused: !0 })
    const queryElDescription = gsap.utils.selector(elDescription)

    gsap.set([elMainText?.current, elSurname?.current, elText?.current, queryElDescription('p'), elFigure?.current], { opacity: 0 })

    if (animationCompleted) {
      tl.addLabel('start', '>')

      // Timeline
      tl.slidingItem(elMainText.current, { startAt: { opacity: 0, translateY: '15%', rotate: 1 } })
      tl.slidingItem(elSurname.current, { rotate: 0.1 }, 'start')
      tl.slidingItem(elText.current, { startAt: { opacity: 0, translateY: '15%', rotate: 1 } }, 'start+=0.1 ')
      tl.slidingItem(queryElDescription('p'), { startAt: { opacity: 0, translateY: '15%', rotate: 1 }, stagger: 0.1 }, 'start+=0.2')
      tl.slidingItem(elFigure?.current, { startAt: { opacity: 0, translateY: '15%', rotate: 3, transformOrigin: 'bottom right', ease: 'Power1.in' } }, 'start+=0.25')

      tl.play()
    }

    return (() => {
      tl.kill()
    })
  }, [animationCompleted])

  return <>
    <div css={[StyledContainer, Style.containerGrid]}>
      <div css={Style.containerHeroText} ref={elMainText}>
        <p className='text-xl md:text-2xl lg:text-3xl' ref={elSurname}>Hi! I&apos;m Vasconcelos!</p>
        <p className='text-3xl md:text-5xl xl:text-8xl' ref={elText}>A Front-end Developer <span className="block">from Brazil.</span></p>
        <div className='w-full max-w-xs md:max-w-3xl text-sm md:text-xl' ref={elDescription}>
          <p className='mb-4'>I, as a developer, am passionate about web development, particularly with animations and user experience. I&apos;m an expert in Vue.js and React for Single Page Applications.</p>
          <p >I&apos;m a Front-end Developer at AtarB2B working with Vue.js for ERP development with BaaS in a banking system team.</p>
        </div>
      </div>

      <div css={Style.containerHeroFigure} ref={elFigure}>
        <picture>
          <source srcSet={HeroWebpSm.src} media="(max-width: 1024px)" />
          <source srcSet={HeroWebpLg.src} />
          <img src={Hero.src} alt="Alex Vasconcelos picture's" width="1140" height="671" />
        </picture>
      </div>
    </div>
  </>
}

HeroFeatured.displayName = 'HeroFeatured'

export default HeroFeatured