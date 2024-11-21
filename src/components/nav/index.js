'use client'

import { Container } from '@/styles'
import Logo from '../logo'
import { CustomLink, HeaderWrapper, InnerNav, LinksWrapper, LogoWrapper } from './styles'
import { useRouter, usePathname } from 'next/navigation'
import gsap from 'gsap'
import { useLenis } from 'lenis/react'
import { useEffect, useState } from 'react'
import About from '../about'

const Nav = ({ data }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const lenis = useLenis()

  useEffect(() => {
    gsap.to(document.getElementsByTagName('body')[0], { opacity: 1, duration: 0.5 })
  }, [pathname])

  const navigateTo = (path) => {
    gsap.to(document.getElementsByTagName('body')[0], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => router.push(path),
    })
  }

  return (
    <>
      <About data={data} open={open} setOpen={setOpen} />
      <HeaderWrapper>
        <Container>
          <InnerNav>
            <LogoWrapper
              href={'/'}
              onClick={(e) => {
                e.preventDefault()

                if (pathname !== '/' && pathname !== '/archive') {
                  lenis.scrollTo(0)

                  setTimeout(() => {
                    gsap.to(gsap.utils.toArray('.anim-title-1'), {
                      duration: 0.75,
                      stagger: 0.03,
                      yPercent: 100,
                      ease: 'power3.inOut',
                    })
                    gsap.to(gsap.utils.toArray('.anim-text-1'), {
                      duration: 0.75,
                      stagger: 0.03,
                      yPercent: 100,
                      ease: 'power3.inOut',
                    })
                  }, 150)

                  setTimeout(() => {
                    router.push('/')
                  }, 650)
                } else navigateTo('/')
              }}
            >
              <Logo />
            </LogoWrapper>
            <LinksWrapper>
              <CustomLink
                href={'/about'}
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(true)
                }}
              >
                About
              </CustomLink>
              <CustomLink
                href={'/archive'}
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('/archive')
                }}
              >
                Archive
              </CustomLink>
              <CustomLink href={'/contact'}>Contact</CustomLink>
            </LinksWrapper>
          </InnerNav>
        </Container>
      </HeaderWrapper>
    </>
  )
}

export default Nav
