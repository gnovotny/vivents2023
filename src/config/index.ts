export const INFO = {
  name: 'Vivents',
  googlePlaceUrl: 'https://maps.app.goo.gl/HxV6ENuAr4GkrsfX9',
  streetAddress: 'Kanzleistrasse 122',
  streetAddress2: '8004 Zürich',
  tel: '044 760 30 10',
  email: 'info@vivents.com',
  instagramUrl: 'https://www.instagram.com/vivents',
  discordUrl: 'https://www.discord.com/vivents',
  linkedinUrl: 'https://www.linkedin.com/vivents',
}

export const CANONICAL_URL = 'https://vivents.com'
export const OG_IMAGE_URL = '/images/og-square.jpg'
export const OG_IMAGE = {
  url: OG_IMAGE_URL,
  width: 512,
  height: 512,
  alt: INFO.name,
  type: 'image/png',
}

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''

export const GOOGLE_MAPS_API_KEY = 'AIzaSyCfYrlcQ1mfcbVP_sONxy448EWAu0eY_4k'
