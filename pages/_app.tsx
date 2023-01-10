import '../styles/globals.css'

import type { AppProps } from 'next/app'

import localFont from '@next/font/local'

const myFont = localFont({ src: './../src/fonts/PPNeueMontreal-Medium.otf' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${myFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
