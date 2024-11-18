'use client'

import { Container, DisplayText, NormalText } from '@/styles'
import { Col, HeroContent, HeroSection, InfoWrapper } from './styles'
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
    gsap.from(gsap.utils.toArray('.anim-text-1'), {
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
          <InfoWrapper>
            <Col>
              <span className='overflow'>
                <NormalText className='dim anim-text-1'>Agency</NormalText>
              </span>
              <span className='overflow'>
                <NormalText className='anim-text-1'>dentsu</NormalText>
              </span>
            </Col>
            <Col>
              <span className='overflow'>
                <NormalText className='dim anim-text-1'>Client</NormalText>
              </span>
              <span className='overflow'>
                <NormalText className='anim-text-1'>Subway</NormalText>
              </span>
            </Col>
          </InfoWrapper>
        </HeroContent>
      </Container>
    </HeroSection>
  )
}

export default Hero
