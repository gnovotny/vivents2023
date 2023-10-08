import React from 'react'

import { AppProps } from 'next/app'

type HeaderProps = {
  pageProps: AppProps['pageProps']
}

const Header = ({ pageProps }: HeaderProps) => {
  return <header className='w-full'>HEADER</header>
}

export default Header
