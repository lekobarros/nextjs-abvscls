import StyledContainer from 'src/styled/container'
import Style from './../styled';

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
        <p className='w-full max-w-xs md:max-w-3xl text-sm md:text-xl'>I help build things for the Web — impassioned in developing Single Page Applications with Vue or React.
          I&apos;m a Front-end Developer at AtarB2B on the project ERP BaaS.</p>
      </div>

      <div css={Style.containerHeroFigure}>
        <picture>
          <source srcSet={HeroWebpSm.src} media="(max-width: 768px)" />
          <source srcSet={HeroWebpLg.src} />
          <img src={Hero.src} alt="Alex Vasconcelos picture's" width="1140" height="671" />
        </picture>
      </div>

      {/* <HeroSpinner /> */}
    </div>
  </>
}

export default HeroFeatured;