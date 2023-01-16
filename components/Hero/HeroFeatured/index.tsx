import StyledContainer from 'src/styled/container'
import Style from './style';

// Images
import HeroWebpSm from 'src/imgs/hero_sm.webp';
import HeroWebpLg from 'src/imgs/hero_abvscls.webp';
import Hero from 'src/imgs/hero_abvscls.jpg';

// Components
// import HeroSpinner from './../HeroSpinner';

const HeroFeatured = (): JSX.Element => {
  return <>
    <div css={[StyledContainer, Style.containerGrid]}>
      <div css={Style.containerHeroText}>
        <p className='text-xl md:text-2xl lg:text-3xl'>Hi! I&apos;m Vasconcelos!</p>
        <p className='text-3xl md:text-5xl xl:text-8xl'>A Front-end Developer <span className="block">from Brazil.</span></p>
        <p className='w-full max-w-xs md:max-w-3xl text-sm md:text-xl'>I, as a developer, am passionate about web development, particularly with animations and user experience. I&apos;m an expert in Vue.js and React.js for Single Page Applications.</p>
        <p className='w-full max-w-xs md:max-w-3xl text-sm md:text-xl'>I&apos;m a Front-end Developer at AtarB2B working with Vue.js for ERP development with BaaS in a banking system team.</p>
      </div>

      <div css={Style.containerHeroFigure}>
        <picture>
          <source srcSet={HeroWebpSm.src} media="(max-width: 1024px)" />
          <source srcSet={HeroWebpLg.src} />
          <img src={Hero.src} alt="Alex Vasconcelos picture's" width="1140" height="671" />
        </picture>
      </div>

      {/* <HeroSpinner /> */}
    </div>
  </>
}

export default HeroFeatured;