import React, { useEffect } from 'react'

import { domAnimation, LazyMotion } from 'framer-motion'
import { AppProps } from 'next/app'
import { Cousine } from 'next/font/google'

import Head from '@/components/common/head'
import Layout from '@/components/layout'
import '@/style/main.css'

const cousine = Cousine({ subsets: ['latin'], weight: '400', variable: '--font-cousine' })

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
      <LazyMotion features={domAnimation}>
        <Layout pageProps={pageProps}>
          <Component pageProps={pageProps} />
        </Layout>
      </LazyMotion>
    </>
  )
}

export default App
