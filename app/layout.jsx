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
    template: '%s | ',
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

  return (
    <html lang='en' className='antialiased'>
      <head />
      <body className={`bg-black text-white ${manrope.className}`}>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <StyledComponentsRegistry>
          <Layout>
            <CustomTheme>
              <Nav />
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
