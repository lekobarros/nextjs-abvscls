import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Script from 'next/script';

import localFont from '@next/font/local'

const myFont = localFont({ src: './../src/fonts/PPNeueMontreal-Medium.otf' })

import { AnimationProvider } from 'src/context/AnimationContext'

import Header from 'components/Header'
import Loader from 'components/Loader'

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${myFont.style.fontFamily};
        }
      `}</style>

      {/* <Header /> */}

      <AnimationProvider>
        <Loader />
        <Component {...pageProps} />
      </AnimationProvider>


      {/* Google GTAG */}
      <Script id="script-gtag" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_KEY}`} />
      <Script id="script-gtag-config" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GTAG_KEY}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
    </>
  )
}

export default App
