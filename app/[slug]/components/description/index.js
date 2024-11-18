'use client'

import { useRef } from 'react'
import { NormalText } from '@/styles'
import { ContentRow, DescriptionSection, DescriptionWrapper, QuickContentWrapper } from './styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useWindowSize } from 'react-use'

gsap.registerPlugin(ScrollTrigger)

const Description = ({ data }) => {
  const sectionTarget = useRef()
  const { height } = useWindowSize()

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        start: `${height}px bottom-=20%`,
        toggleActions: 'play none none reset',
      },
    })

    tl.from(
      gsap.utils.toArray('.text-anim-1'),
      {
        yPercent: 100,
        duration: 1,
        stagger: 0.02,
        ease: 'power3.inOut',
      },
      0,
    ).from(
      gsap.utils.toArray('.text-anim-2'),
      {
        yPercent: 100,
        duration: 1,
        stagger: 0.001,
        ease: 'power3.inOut',
      },
      '-=1',
    )
  }, [height])

  return (
    <DescriptionSection ref={sectionTarget}>
      <QuickContentWrapper>
        {data?.list?.map((item, index) => (
          <ContentRow key={index}>
            <span className='overflow'>
              <NormalText className='label text-anim-1'>{item.label}</NormalText>
            </span>
            <span className='overflow'>
              <NormalText className='text-anim-1'>{item.text}</NormalText>
            </span>
          </ContentRow>
        ))}
      </QuickContentWrapper>
      <DescriptionWrapper>
        {data?.description?.split('\n').map((paragraph, index) => (
          <div key={index}>
            {paragraph.split(' ').map((word, index) => (
              <span className='overflow' key={index}>
                <NormalText className='text-anim-2'>{word}&nbsp;</NormalText>
              </span>
            ))}
          </div>
        ))}
      </DescriptionWrapper>
    </DescriptionSection>
  )
}

export default Description
