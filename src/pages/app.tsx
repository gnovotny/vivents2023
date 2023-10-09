import { AppProps } from 'next/app'
import Text from '@/components/ui/text'
import { Prose } from '@/components/ui'

const AppPage = ({ pageProps }: AppProps) => {
  return (
    <div className='flex flex-col w-full'>
      <Prose html={`The VIVENTS Marketplace is a gamechanger in social e-commerce, specializing in Trading art, luxury, fashion, and digital collectibles. We connect today's and tomorrow's most sought-after sellers and buyers.

VIVENTS empowers social interactions and offers a suite of tools that increase operational transparency and efficiency while scaling your community. We're not just another platform; we're redefining value exchange and access.`} />
      <div className='flex flex-row items-center gap-2 pt-common'>
        <a
          href='https://apps.apple.com/us/app/vivents/id1598350812'
          target='_blank'
          rel='noopener noreferrer'
          className='cursor-pointer'
        >
          <img
            src='/images/app/apple-store.svg'
            alt='apple-store'
            className='lg:w-[150px]'
          />
        </a>
        <a
          href='https://play.google.com/store/apps/details?id=ai.artdeal'
          className='cursor-pointer'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='/images/app/google-store.svg'
            alt='google-store'
            className='lg:w-[150px]'
          />
        </a>
      </div>
    </div>
  )
}

export default AppPage
