'use client'

import { Container, DisplayText } from '@/styles'
import { HeroContent, HeroSection } from './styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
  const TITLE = 'Subway'

  useGSAP(() => {
    gsap.from(gsap.utils.toArray('.anim-title-1'), {
      duration: 0.75,
      stagger: 0.03,
      yPercent: 100,
      ease: 'power3.inOut',
      delay: 0.3,
    })
  })

  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <DisplayText>
            {TITLE.split('').map((letter, index) => (
              <span key={index} className='overflow'>
                <span className='anim-title-1'>{letter}</span>
              </span>
            ))}
          </DisplayText>
        </HeroContent>
      </Container>
    </HeroSection>
  )
}

export default Hero
