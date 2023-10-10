export const INFO = {
  name: 'Vivents',
  googlePlaceUrl: 'https://maps.app.goo.gl/HxV6ENuAr4GkrsfX9',
  company: 'ArtDeal AG',
  streetAddress: 'Kanzleistrasse 122',
  streetAddress2: '8004 Zürich',
  // tel: '044 760 30 10',
  email: 'mail@artdeal.ch',
  instagramUrl: 'https://www.instagram.com/vivents_app/',
  discordUrl: 'https://discord.gg/qhdEwvHvX3',
  linkedinUrl: 'https://linkedin.com/company/artdeal',
}

export const CANONICAL_URL = 'https://www.vivents.com'
export const OG_IMAGE_URL = '/og_vivents_logo_square.png'
export const OG_IMAGE = {
  url: OG_IMAGE_URL,
  width: 595,
  height: 595,
  alt: INFO.name,
  type: 'image/png',
}

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''

export const GOOGLE_MAPS_API_KEY = 'AIzaSyCfYrlcQ1mfcbVP_sONxy448EWAu0eY_4k'
