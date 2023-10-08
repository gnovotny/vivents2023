import NextHead from 'next/head'

const Meta = () => (
  <NextHead>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no'
    />
    <link
      rel='manifest'
      href='/site.webmanifest'
      key='site-manifest'
    />
    <meta
      name='msapplication-config'
      content='/browserconfig.xml'
    />
    <link
      rel='shortcut icon'
      href='/favicon.ico'
    />
    <meta
      name='msapplication-TileColor'
      content='#ffffff'
    />
    <meta
      name='theme-color'
      content='#ffffff'
    />
  </NextHead>
)

export default Meta
