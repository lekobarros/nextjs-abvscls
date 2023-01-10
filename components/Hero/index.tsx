import React, { useRef, useState, useEffect } from 'react'
import { lerp } from 'src/util'
import gsap from 'gsap';

import style from './styled';

// Components
import HeroFeatured from './HeroFeatured'
import HeroMediaSocial from './HeroMediaSocial'
import HeroGradient from './HeroGradient'

// Interface
interface mousePosIf {
  x: number;
  y: number;
}

const Page : React.FC = () => {
  const radialGradient = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<mousePosIf>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const childs: NodeListOf<HTMLElement> = radialGradient.current?.querySelectorAll('div') as NodeListOf<HTMLElement>
      const { clientX, clientY }: { clientX: number; clientY: number } = event

      const x1: number = lerp(mousePos.x, Math.round(clientX / 10), 0.15)
      const y1: number = lerp(mousePos.y, Math.round(clientY / 10), 0.15)
      const x2: number = lerp(mousePos.x, Math.round(clientX / 10), 1)
      const y2: number = lerp(mousePos.y, Math.round(clientY / 10), 1)

      // Kill Animation and call again
      gsap.killTweensOf(childs)
      gsap.to(childs[0], { x: x1, y: y1, ease: "power1" })
      gsap.to(childs[1], { x: x2, y: y2, ease: "power1" })

      setMousePos({ x: x1, y: x2 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section css={style.container}>
      <HeroFeatured />
      <HeroGradient ref={radialGradient} />
      <HeroMediaSocial />
    </section>
  )
}

export default Page;