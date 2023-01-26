import Head from 'next/head'

import Hero from 'components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Vasconcelos — Front-end Developer</title>
        <meta name="description" content="My name is Alex Vasconcelos and I am an expert web developer from Brazil specializing in Vue.js and React.js for creating dynamic and user-friendly Single Page Applications (SPA) with HTML5, emphasizing on smooth animation, efficient navigation, and responsive design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="relative w-full min-h-screen">
        <Hero />
      </main>
    </>
  )
}