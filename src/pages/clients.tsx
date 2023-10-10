import { AppProps } from 'next/app'

import Clients from '@/components/common/clients'
import ContactButton from '@/components/common/contact-button'

const ClientsPage = ({ pageProps }: AppProps) => {
  return (
    <div className='flex flex-col items-end justify-between w-full h-full'>
      <Clients />
      <ContactButton className='hidden lg:inline-flex' />
    </div>
  )
}

export default ClientsPage
