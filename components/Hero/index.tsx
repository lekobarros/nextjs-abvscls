import React, { useEffect, useRef, useState } from 'react'

import style from './styled';

// Components
import HeroFeatured from './HeroFeatured'
import HeroMediaSocial from './HeroMediaSocial'
import HeroGradient from './HeroGradient'

interface PosTrackMouse {
  clientX: number;
  clientY: number;
}

const Page = (): JSX.Element => {
  const el = useRef<HTMLElement>(null);
  const [posTrackMouse, setPosTrackMouse] = useState<PosTrackMouse>({ clientX: 0, clientY: 0 })

  // Track the mouse Pos
  useEffect(() => {
    el.current?.addEventListener('mousemove', ({ clientX, clientY }) => setPosTrackMouse({ clientX, clientY }));

    return () => {
      el.current?.removeEventListener('mousemove', ({ clientX, clientY }) => setPosTrackMouse({ clientX, clientY }));
    };
  }, []);

  return (
    <section css={style.container} ref={el}>
      <HeroFeatured />
      <HeroGradient posTrackMouse={posTrackMouse} />
      <HeroMediaSocial />
    </section>
  )
}

export default Page;