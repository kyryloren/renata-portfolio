import { Layout } from '@/components/dom/Layout'
import Gallery from '@/components/gallery'
import StyledComponentsRegistry from '@/lib/registry'
import CustomTheme from '@/lib/theme'
import Nav from '@/components/nav'
import manrope from '@/styles/fonts'
import Cursor from '@/components/cursor'

export const metadata = {
  title: 'Next.js + Three.js',
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`bg-black text-white ${manrope.className}`}>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <StyledComponentsRegistry>
          <Layout>
            <CustomTheme>
              <Nav />
              <Gallery />
              <Cursor />
              {children}
            </CustomTheme>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
