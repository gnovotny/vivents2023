import { AppProps } from 'next/app'

import ContactButton from '@/components/common/contact-button'
import Press from '@/components/views/press'

const PressPage = ({ pageProps }: AppProps) => {
  return (
    <div className='flex flex-col items-end justify-between w-full h-full'>
      <Press />
      <ContactButton className='hidden lg:inline-flex' />
    </div>
  )
}

export default PressPage
