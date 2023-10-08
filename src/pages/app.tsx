import { AppProps } from 'next/app'
import Text from '@/components/ui/text'

const AppPage = ({ pageProps }: AppProps) => {
  return (
    <div className='flex flex-col w-full'>
      <Text>
        VIVENTS™ is a social marketplace for art and luxury, matching today and tomorrow's most sought-after sellers and
        buyers. <br />
        The VIVENT™ empowers social interactions and offers a suite of tools that increases operational transparency and
        efficiency while selling or buying art and luxury within a community.
        <br />
        <br />
        Download the app!
        <br />
        <br />
      </Text>
      <div className='flex flex-row items-center gap-2'>
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
