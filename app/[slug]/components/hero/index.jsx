'use client'

import { Container, DisplayText, NormalText } from '@/styles'
import { Col, HeroContent, HeroSection, InfoWrapper } from './styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = ({ data }) => {
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
            {data?.title?.split('').map((letter, index) => (
              <span key={index} className='overflow'>
                <span className='anim-title-1'>{letter === ' ' ? '\u00A0' : letter}</span>
              </span>
            ))}
          </DisplayText>
          <InfoWrapper>
            {data?.list?.slice(0, 2).map((item, index) => (
              <Col key={index}>
                <span className='overflow'>
                  <NormalText className='dim anim-text-1'>{item?.label}</NormalText>
                </span>
                <span className='overflow'>
                  <NormalText className='anim-text-1'>{item?.text}</NormalText>
                </span>
              </Col>
            ))}
          </InfoWrapper>
        </HeroContent>
      </Container>
    </HeroSection>
  )
}

export default Hero
