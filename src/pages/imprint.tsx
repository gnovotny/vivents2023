import React, { useCallback } from 'react'

import { AppProps } from 'next/app'
import Text from '@/components/ui/text'
const ImprintPage = ({ pageProps }: AppProps) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Text>Vivents by ArtDeal AG, Kanzleistrasse 122, 8004 Zürich</Text>
    </div>
  )
}

export default ImprintPage
