'use client'

import { useRef } from 'react'
import {
  AboutPage,
  CloseWrapper,
  Col,
  ContentContainer,
  CustomLink,
  DescriptionWrapper,
  DualCol,
  ImageCover,
  ImageWrapper,
  InnerCol,
  InvisWrapper,
  SideWrapper,
  TitleWrapper,
} from './styles'
import { LargeText, NormalText } from '@/styles'
import FlairComponent from '../flair'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { useLenis } from 'lenis/react'

const About = ({ data, open, setOpen }) => {
  const lenis = useLenis()

  const container = useRef(null)
  const invisRef = useRef(null)

  useGSAP(() => {
    if (open) {
      if (lenis) {
        lenis.stop()
      }
      const tl = gsap.timeline()

      tl.set(container.current, { autoAlpha: 1 })
        .to('.side-wrapper', { xPercent: 0, ease: 'power3.inOut', duration: 0.5 }, 0)
        .to(invisRef.current, { opacity: 0.5, ease: 'power3.inOut', duration: 0.5 }, 0)
        .to('.close-button', { scale: 1, ease: 'back.in', duration: 0.3 }, 0.4)
        .to(
          gsap.utils.toArray('.title-text'),
          { yPercent: 0, ease: 'power3.inOut', duration: 0.75, stagger: 0.02 },
          0.4,
        )
        .to('.image-wrapper', { height: '0%', ease: 'power3.inOut', duration: 0.75 }, 0.4)
        .to(
          gsap.utils.toArray('.description-text'),
          { yPercent: 0, ease: 'power3.inOut', duration: 0.75, stagger: 0.003 },
          0.4,
        )
    } else {
      if (lenis) {
        lenis.start()
      }
      const tl = gsap.timeline()

      tl.to('.close-button', { scale: 0, ease: 'back.in', duration: 0.3 }, 0)
        .to(
          gsap.utils.toArray('.title-text'),
          { yPercent: 100, ease: 'power3.inOut', duration: 0.75, stagger: 0.02 },
          0,
        )
        .to('.image-wrapper', { height: '100%', ease: 'power3.inOut', duration: 0.75 }, 0)
        .to(
          gsap.utils.toArray('.description-text'),
          { yPercent: 100, ease: 'power3.inOut', duration: 0.75, stagger: 0.003 },
          0,
        )
        .to('.side-wrapper', { xPercent: 110, ease: 'power3.inOut', duration: 0.5 }, 0.4)
        .to(invisRef.current, { opacity: 0, ease: 'power3.inOut', duration: 0.5 }, 0.4)
        .set(container.current, { autoAlpha: 0 })
    }
  }, [open, lenis])

  return (
    <AboutPage ref={container} id='modal' data-lenis-prevent>
      <InvisWrapper ref={invisRef} onClick={() => setOpen(false)} />
      <SideWrapper className='side-wrapper'>
        <TitleWrapper>
          <LargeText>
            {'About'.split('').map((letter, index) => (
              <span className='overflow' key={index}>
                <span className='letter title-text'>{letter}</span>
              </span>
            ))}
          </LargeText>
          <CloseWrapper
            className='close-button'
            href={'/'}
            onClick={(e) => {
              e.preventDefault()
              setOpen(false)
            }}
          >
            <FlairComponent />
          </CloseWrapper>
        </TitleWrapper>

        <ContentContainer>
          <ImageWrapper>
            <ImageCover className='image-wrapper' />
            <Image src={data.image.url} alt={data.image.alternativeText} fill />
          </ImageWrapper>
          <DescriptionWrapper>
            {data?.text?.split('\n').map(
              (paragraph, index) =>
                paragraph.trim() && (
                  <NormalText key={index}>
                    {paragraph.split(' ').map((word, index) => (
                      <span className='overflow' key={index}>
                        <span className='letter description-text'>{word}&nbsp;</span>
                      </span>
                    ))}
                  </NormalText>
                ),
            )}
          </DescriptionWrapper>
          <DualCol>
            {data?.Col?.map((col, index) => (
              <Col key={index}>
                <NormalText>{col.title}</NormalText>
                <InnerCol>
                  {col?.item.map((item, index) => (
                    <CustomLink key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
                      {item.text}
                    </CustomLink>
                  ))}
                </InnerCol>
              </Col>
            ))}
          </DualCol>
        </ContentContainer>
      </SideWrapper>
    </AboutPage>
  )
}

export default About
