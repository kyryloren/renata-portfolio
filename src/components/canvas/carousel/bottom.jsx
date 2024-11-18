'use client'

import { Container, NormalText, normalTheme } from '@/styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import styled from 'styled-components'

const BottomWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: var(--space-m) 0;
  z-index: -1;
`
const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${`rgb(${normalTheme.gray})`};
`

const Bottom = ({ pathname }) => {
  useGSAP(() => {
    if (pathname === '/') {
      gsap.to('.anim-bottom', {
        opacity: 1,
        duration: 0.5,
        ease: 'power3.inOut',
      })
    } else {
      gsap.to('.anim-bottom', {
        opacity: 0,
        duration: 0.5,
        ease: 'power3.inOut',
      })
    }
  }, [pathname])

  return (
    <BottomWrapper className='anim-bottom'>
      <Container>
        <InnerContent>
          <NormalText>Design Portfolio</NormalText>
          <NormalText>Scroll</NormalText>
        </InnerContent>
      </Container>
    </BottomWrapper>
  )
}

export default Bottom
