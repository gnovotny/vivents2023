import { AppProps } from 'next/app'
import Team from 'src/components/views/team'
import { ContactButtonVariant } from '@/components/common/contact-button'

const CompanyPage = ({ pageProps }: AppProps) => {
  return (
    <div className='flex flex-col justify-between w-full h-full'>
      <Team />
      <ContactButtonVariant className='hidden lg:block' />
    </div>
  )
}

export default CompanyPage
