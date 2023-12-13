import React, { useEffect } from 'react'

// import { domAnimation, LazyMotion } from 'framer-motion'
import { AppProps } from 'next/app'
// import { Cousine } from 'next/font/google'
import localFont from 'next/font/local'

import Head from '@/components/common/head'
import Layout from '@/components/layout'

import '@/style/main.css'
import 'keen-slider/keen-slider.min.css'

// Font files can be colocated inside of `pages`
const cousine = localFont({
  variable: '--font-cousine',
  display: 'block',
  preload: true,
  declarations: [{ prop: 'ascent-override', value: '100%' }],
  src: [
    {
      path: './fonts/cousine/Cousine-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/cousine/Cousine-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

// const cousine = Cousine({ subsets: ['latin'], weight: '400', variable: '--font-cousine' })

const App = ({ Component, pageProps, ...props }: AppProps) => {
  // see chrome-bug.css
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <style
        jsx
        global
      >{`
        html {
          font-family: ${cousine.style.fontFamily};
        }
      `}</style>
      <Head />
      {/*<LazyMotion features={domAnimation}>*/}
      <Layout pageProps={pageProps}>
        <Component pageProps={pageProps} />
      </Layout>
      {/*</LazyMotion>*/}
    </>
  )
}

export default App
