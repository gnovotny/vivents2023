import React, { useCallback, useEffect, useRef } from 'react'

import { AppProps } from 'next/app'

type HeaderProps = {
  pageProps: AppProps['pageProps']
}

const Footer = ({ pageProps }: HeaderProps) => {

  return (
    <footer className='w-full'>
      FOOTER
    </footer>
  )
}

export default Footer
