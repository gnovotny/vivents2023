import { AppProps } from 'next/app'
import Image from 'next/image'

const clients = [

]

const Client = ({name, href, image}) => (
  <a href={href} target='_blank'>
    <Image src={image} alt={name} />
  </a>
)

const ClientsPage = ({ pageProps }: AppProps) => {
  return (
    <div className='flex flex-col'>
      {/*<Client name='Lalique' href='https://lesmuses.lalique.com' image={} />*/}
    </div>
  )
}

export default ClientsPage
