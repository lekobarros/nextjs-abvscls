import { useEffect, useState, useRef } from 'react'

import gsap from 'gsap'

// @ts-ignore
gsap.registerEase("moveTextUp", [0.79, 0.17, 0.28, 1.1]);
// @ts-ignore
gsap.registerEase("moveTextUpper", [0.79, 0.17, 0.28, 1.1]);
// @ts-ignore
gsap.registerEase("wipeLoader", [0.9, 0.12, 0.2, 1]);

// Styles
import Style from './style';

// Context
import { useAnimationContext } from 'src/context'

const randPhrases = [
  "Building user-friendly interfaces for web applications",
  "Creating visually appealing and interactive layouts",
  "Designing intuitive navigation and user flow",
  "Implementing features and functionality using React",
  "Optimizing website performance and speed",
  "Creating responsive and mobile-friendly layouts using CSS3 and HTML5",
  "Creating dynamic user interfaces with JavaScript and front-end frameworks.",
  "Designing and coding beautiful and responsive landing pages.",
  "Using front-end development tools and technologies to improve website functionality.",
  "Ensuring cross-browser compatibility and accessibility",
  "Collaborating with designers and developers on projects",
  "Transforming wireframes and mockups into functional code",
  "Troubleshooting and debugging front-end issues",
  "Creating and maintaining documentation for front-end code",
  "Keeping up-to-date with the latest front-end trends and technologies",
  "Providing user feedback and testing during development process",
  "Creating a seamless user experience through responsive design",
  "Designing and implementing UI/UX elements using React",
]

const doGenerateRandomPharses = (): string[] => {
  let randomItems: string[] = []
  let localRandPharses = [...randPhrases]

  // Get 3 random items from the array
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * localRandPharses.length)
    randomItems.push(localRandPharses[randomIndex])
    localRandPharses.splice(randomIndex, 1)
  }

  return randomItems;
}

export const Loader = () => {
  const { setAnimationCompleted } = useAnimationContext()

  const [listOfPharses, setListOfPharses] = useState<string[]>([])
  const backgroundColor = useRef<HTMLDivElement>(null)
  const words = useRef<HTMLDivElement>(null)

  // Get a lot of random phrases
  useEffect(() => {
    if (listOfPharses && !listOfPharses.length) {
      const randPhrases = doGenerateRandomPharses()
      return setListOfPharses(randPhrases)
    }

    // Create TL
    const tl: GSAPTimeline = gsap.timeline({ paused: !0, onComplete: () => setAnimationCompleted(true) })
    tl.addLabel('start', '>')

    // Query
    const queryWords = gsap.utils.selector(words.current)
    const children: HTMLUListElement[] = queryWords('span') as HTMLUListElement[]

    // Reset El
    gsap.set(children, { opacity: 0 })
    gsap.set(backgroundColor.current, { translateY: '0%' })

    // Timeline
    tl.to(children, { startAt: { opacity: 0, translateY: '100%' }, opacity: 1, translateY: '0', duration: 1, stagger: 1.5, ease: 'moveTextUp' }, 'start')
    tl.to(children, { opacity: 0, translateY: '-1rem', duration: 0.5, ease: 'moveTextUpper', stagger: 1.5 }, 'start+=1')
    tl.to(backgroundColor.current, { translateY: '-100%', ease: 'wipeLoader' }, 'start+=4.5')

    // Play on TL
    tl.play()

    // Scale animation in development
    if (process.env.NODE_ENV !== "production") tl.timeScale(10);

    return () => {
      tl.kill();
    }
  }, [listOfPharses])

  return (
    <div css={Style.loader}>
      <div css={Style.backgroundColor} ref={backgroundColor}></div>
      <div ref={words}>
        {listOfPharses?.map((pharse, key) => (<span css={Style.word} key={key}>{pharse}</span>))}
      </div>
    </div>
  )
}

export default Loader