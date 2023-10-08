export const INFO = {
  name: 'Lalique',
  googlePlaceUrl: 'https://goo.gl/maps/Mc9hdG6H4iRC3FrcA',
  streetAddress: 'Zürichstrasse 96',
  streetAddress2: '8910 Affoltern am Albis',
  tel: '044 760 30 10',
  email: 'info@federle-geschenke.ch',
  instagramUrl: 'https://www.instagram.com/federle-geschenke',
}

export const CANONICAL_URL = 'https://lesmuses.lalique.com'
export const OG_IMAGE_URL = '/assets/og-square.jpg?v=2'
export const OG_IMAGE = {
  url: OG_IMAGE_URL,
  width: 512,
  height: 512,
  alt: INFO.name,
  type: 'image/png',
}

export const PRELOAD_FONTS = [
  {
    id: 'EurostileExtReg',
    href: '/fonts/eurostile/EurostileExtReg.woff2',
    type: 'font/woff2',
  },
  {
    id: 'EurostileExtMed',
    href: '/fonts/eurostile/EurostileExtMed.woff2',
    type: 'font/woff2',
  },
  {
    id: 'EurostileExtBla',
    href: '/fonts/eurostile/EurostileExtBla.woff2',
    type: 'font/woff2',
  },
]
export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''
