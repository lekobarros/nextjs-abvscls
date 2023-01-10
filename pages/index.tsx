import Head from 'next/head'

import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Vasconcelos — Front-end Developer</title>
        <meta name="description" content="Alex Vasconcelos personal portfolio's. A Front-end Developer Vue.js based in Belo Horizonte." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="relative w-full min-h-screen">
        <Hero />
      </main>
    </>
  )
}