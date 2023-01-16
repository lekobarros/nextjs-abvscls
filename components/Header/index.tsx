import { useRef, useEffect, useState } from 'react';
import CSS from 'csstype';

import Styles from './styled';
import StyledContainer from 'src/styled/container';

// Interface
interface PosArea extends CSS.Properties<string | number> {
  '--x': string | number;
  '--y': string | number;
}

const HeroSpinner = (): JSX.Element => {
  const [trackMousPos, setTrackMousPos] = useState<PosArea>({ '--x': 0, '--y': 0 });
  const magnetBrand = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const elMagnetBrand = magnetBrand.current;

  //   const magnetMouseMouse = (ev: MouseEvent, target: HTMLDivElement, movement: number = 1) => {
  //     const boundingRect = target.getBoundingClientRect();
  //     const relX = ev.pageX - boundingRect.left;
  //     const relY = ev.pageY - boundingRect.top;
  //     const scrollTop = window.scrollY || document.documentElement.scrollTop;

  //     const targetPos = {
  //       '--x': `${(relX - boundingRect.width / 2) * movement}px`,
  //       '--y': `${(relY - boundingRect.height / 2 - scrollTop) * movement}px`,
  //     }

  //     setTrackMousPos(targetPos)
  //   }

  //   const onMouseLeave = () => {
  //     console.log('out')
  //     const targetPos = {
  //       '--x': 0,
  //       '--y': 0,
  //     }

  //     setTrackMousPos(targetPos)
  //   }

  //   if (elMagnetBrand) {
  //     elMagnetBrand.addEventListener('mousemove', (e) => magnetMouseMouse(e, elMagnetBrand));
  //     elMagnetBrand.addEventListener('mouseleave', () => onMouseLeave);
  //   }

  //   return () => {
  //     if (elMagnetBrand) {
  //       elMagnetBrand.removeEventListener('mousemove', (e) => magnetMouseMouse(e, elMagnetBrand));
  //       elMagnetBrand.removeEventListener('mouseleave', () => onMouseLeave);
  //     }
  //     // trackMousPos
  //   }
  // }, []);


  return <>
    <nav css={[StyledContainer, Styles.header]}>
      <div className="nav--wrapper" css={Styles.wrapper}>
        <div className="nav--logo">
          <div css={Styles.magnetArea}  ref={magnetBrand}>
            <p css={Styles.magnetChild} style={trackMousPos} className="text-4xl">abvscls</p>
          </div>
        </div>
        {/* <ul className="nav--link hover-effect" css={Styles.list}>
          <li css={Styles.listChild}><a href="#">About</a></li>
          <li css={Styles.listChild}><a href="#">Work</a></li>
          <li css={Styles.listChild}><a href="#">Contact</a></li>
        </ul> */}
      </div>
    </nav>
  </>
}

export default HeroSpinner;

