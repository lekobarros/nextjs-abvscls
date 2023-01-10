import { forwardRef } from 'react';
import style from './../styled';

export const HeroGradient = forwardRef<HTMLDivElement>((props, ref) => (
  <div css={style.gradints} ref={ref}>
    <div></div>
    <div></div>
  </div>
));

HeroGradient.displayName = 'HeroGradient';

export default HeroGradient;