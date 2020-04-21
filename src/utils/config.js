import React from 'react'

export const seoText = {
  generic_keywords: [`kuworking themes`],
  grid: {
    title: 'kuworking themes',
    description: 'kuworking themes',
  },
}

export const config = {
  site_lang: `en`,
  url: 'https://www.kuworking.com',
  user: 'kuworking',
  social: {
    twitter: '@kuworking',
    facebook: 'https://www.facebook.com/kuworkingJS/',
  },
}

export const text = {
  header: {
    site: 'kuworking',
    logo: 'KW',
  },
  footer: {
    me: 'Quién soy',
    credits: 'by kuworking.com',
    credits_url: 'https://www.kuworking.com',
    // prettier-ignore
    date: () => <>[ {new Date().getFullYear()} >> kuworking ]</>,
    cookies: () => <>Te informo que utilizo cookies para mejorar la usabilidad del website</>,
    cookies_agree: 'Ok',
  },
}
