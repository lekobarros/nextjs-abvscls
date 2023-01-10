import Image from 'next/image'

import style from './../styled';
import HeroSpinnerImg from 'src/imgs/hero_spinner.png';

const HeroSpinner = (): JSX.Element => {
  return <>
    <div css={style.spinner}>
      <Image src={HeroSpinnerImg.src} width={150} height={150} alt="Kill Of The Avarage" />
    </div>
  </>
}

export default HeroSpinner;