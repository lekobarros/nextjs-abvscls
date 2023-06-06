import { useEffect, useRef, useState } from 'react'
import Style from './styled'

import { lerp } from 'src/util'
import gsap from 'gsap'

// Context
import { useAnimationContext } from 'src/context'

// Interface
type PosMouse = {
  clientX: number
  clientY: number
}

type ComponentProps = {
  posTrackMouse: PosMouse
}

export const HeroGradient = ({ posTrackMouse }: ComponentProps): JSX.Element => {
  const { animationCompleted } = useAnimationContext()

  const [isAnimating, setIsAnimating] = useState<boolean>(true)
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const queryEl = gsap.utils.selector(el.current)
    const children: HTMLElement[] = queryEl('div') as HTMLDivElement[]

    gsap.set(children, { opacity: 0 })
    gsap.set(children[0], { left: 256, top: 256 })
    gsap.set(children[1], { opacity: 0 })

    // When AnimationCompleted
    if (animationCompleted) {
      gsap.to(children, {
        startAt: {
          opacity: 0,
          scale: 0.75,
        },
        opacity: 1,
        scale: 1,
        ease: "circ.inOut",
        duration: 0.8,
        onStart: () => setIsAnimating(true),
        onComplete: () => setIsAnimating(false)
      })
    }
  }, [animationCompleted])

  useEffect(() => {
    if (isAnimating) return

    const queryEl = gsap.utils.selector(el.current)
    const children: HTMLElement[] = queryEl('div') as HTMLDivElement[]

    const boundingRectParent = el.current?.getBoundingClientRect()
    const { innerWidth, innerHeight } = window
    const { clientX, clientY }: { clientX: number; clientY: number } = posTrackMouse

    children.forEach(child => {
      let x = clientX
      let y = clientY

      if (boundingRectParent) {
        const perX = (100 * clientX) / innerWidth || 0
        const perY = (100 * clientY) / innerHeight || 0

        x = lerp(boundingRectParent?.left, perX, 1.25)
        y = lerp(boundingRectParent?.top, perY, 1.25)
      }

      // Kill Animation
      gsap.killTweensOf(child)

      // Animate Again
      gsap.to(child, { x, y, ease: "power3", duration: 0.6 })
    })
  }, [posTrackMouse, isAnimating])

  return (
    <div css={Style.wrapper} ref={el}>
      <div css={Style.radialCircle} />
      <div css={Style.radialCircle} />
    </div>
  )
}

HeroGradient.displayName = 'HeroGradient'

export default HeroGradient