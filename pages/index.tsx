import Head from 'next/head'

import Hero from 'components/Hero'
import Projects from 'components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Vasconcelos — Front-end Developer</title>
        <meta name="description" content="I'm Alex Vasconcelos, an expert web developer from Brazil specializing in Vue.js and React for creating dynamic and user-friendly SPAs with smooth animations and responsive design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* OG | Social */}
        <meta property="og:title" content="Alex Vasconcelos" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abvscls.com/" />
        <meta property="og:image" content="/api/og" />
        <meta property="og:description" content="I'm Alex Vasconcelos, a Brazilian web developer with expertise in Vue.js and React.js. I specialize in building dynamic and user-friendly Single Page Applications (SPAs) with HTML5, prioritizing smooth animations, efficient navigation, and responsive design." />
      </Head>

      <main className="relative w-full min-h-screen">
        <Hero />
        <Projects />
      </main>
    </>
  )
}