import { DefaultSeo } from 'next-seo'

import { CANONICAL_URL, INFO, OG_IMAGE } from '@/config'

const SEO = () => (
  <DefaultSeo
    {...{
      defaultTitle: INFO.name ?? undefined,
      titleTemplate: `| ${INFO.name}` ?? undefined,
      description: ' ' ?? undefined,
      openGraph: {
        title: INFO.name ?? undefined,
        description: ' ' ?? undefined,
        type: 'website',
        locale: 'en_US',
        url: CANONICAL_URL,
        site_name: INFO.name,
        images: [OG_IMAGE],
      },
    }}
  />
)

export default SEO
