'use client'

import Masonry from 'react-masonry-css'
import { ImageWrapper } from './styles'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Pattern = ({ data }) => {
  useGSAP(() => {
    gsap.utils.toArray('.anim-image').forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, yPercent: 20 },
        {
          opacity: 1,
          duration: 1,
          yPercent: 0,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom bottom',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })
  })

  return (
    <Masonry
      className='masonary-grid'
      columnClassName='masonary-grid-column'
      breakpointCols={{ 440: 1, 820: 2, default: 3 }}
    >
      {data?.images.map((image, index) => (
        <ImageWrapper key={index}>
          <Image
            className='anim-image'
            src={image.url}
            alt={image.alternativeText}
            width={image.width}
            height={image.height}
          />
        </ImageWrapper>
      ))}
    </Masonry>
  )
}

export default Pattern
