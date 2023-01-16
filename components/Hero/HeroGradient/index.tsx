import { useEffect, useRef } from 'react';
import Style from './styled';

import { lerp } from 'src/util'
import gsap from 'gsap';

// Interface
type PosMouse = {
  clientX: number;
  clientY: number;
};

type ComponentProps = {
  posTrackMouse: PosMouse;
};

export const HeroGradient = ({ posTrackMouse }: ComponentProps): JSX.Element => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const children: NodeListOf<HTMLElement> = el.current?.querySelectorAll('div') as NodeListOf<HTMLElement>
    const boundingRectParent = el.current?.getBoundingClientRect() 
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY }: { clientX: number; clientY: number } = posTrackMouse

    children.forEach(child => {
      let x = clientX
      let y = clientY

      if (boundingRectParent) {
        const perX = (100 * clientX) / innerWidth || 0;
        const perY = (100 * clientY) / innerHeight || 0;

        x = lerp(boundingRectParent?.left, perX, 1.25)
        y = lerp(boundingRectParent?.top, perY, 1.25)
      }

      // Kill Animation
      gsap.killTweensOf(child)

      // Animate Again
      gsap.to(child, { x, y, ease: "power3", duration: 0.6 })
    })
  }, [posTrackMouse]);

  return (
    <div css={Style.wrapper} ref={el}>
      <div css={[Style.radialCircle, Style.radialCircleFirst]} />
      <div css={[Style.radialCircle, Style.radialCircleSecond]} />
    </div>
  )
};

HeroGradient.displayName = 'HeroGradient';

export default HeroGradient;