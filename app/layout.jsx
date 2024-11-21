import { Layout } from '@/components/dom/Layout'
import Gallery from '@/components/gallery'
import StyledComponentsRegistry from '@/lib/registry'
import CustomTheme from '@/lib/theme'
import Nav from '@/components/nav'
import manrope from '@/styles/fonts'
import Cursor from '@/components/cursor'
import { fetchAPI } from '@/lib/api'

const title = 'Renata Dominguez'
const description = ``

export const metadata = {
  title: {
    template: '%s | Renata Dominguez',
    default: title,
  },
  description: description,
  keywords: [],
  openGraph: {
    title: title,
    description: description,
    url: 'https://renatadominguez.com/',
    locale: 'en_US',
    type: 'website',
    images: {
      url: `${
        process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.outerlabs.studio'
      }/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@kyryloren',
    images: [
      `${
        process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://renatadominguez.com'
      }/images/og-image.jpg`,
    ],
  },
}

export default async function RootLayout({ children }) {
  const projectsData = await fetchAPI('/projects', {
    populate: {
      fields: ['slug', 'title'],
      image: {
        populate: '*',
      },
    },
  })
  const aboutData = await fetchAPI('/about', {
    populate: {
      fields: ['text'],
      image: {
        populate: '*',
      },
      Col: {
        populate: '*',
      },
    },
  })

  const aboutDoc = aboutData?.data

  return (
    <html lang='en' className='antialiased'>
      <head>
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='referrer' content='no-referrer' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='geo.region' content='US' />

        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' href='/favicon/favicon-96x96.png' sizes='96x96' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <link rel='icon' type='image/svg+xml' href='/favicon/favicon.svg' />
      </head>
      <body className={`bg-black text-white ${manrope.className}`}>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <StyledComponentsRegistry>
          <Layout>
            <CustomTheme>
              <Nav data={aboutDoc} />
              <Gallery data={projectsData?.data} />
              <Cursor />
              {children}
            </CustomTheme>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
