'use client'

import { Container, SectionWrapper } from '@/styles'
import Image from 'next/image'
import styled from 'styled-components'

const GallerySection = styled(SectionWrapper)`
  padding: var(--space-s) 0;
`
const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90svh;
`

export default function MobileGallery({ data }) {
  console.log(data)
  return (
    <GallerySection>
      <Container>
        <GalleryWrapper>
          {data.map((item, index) => (
            <ImageWrapper key={index}>
              <Image src={item.url} alt={item.alternativeText} />
            </ImageWrapper>
          ))}
        </GalleryWrapper>
      </Container>
    </GallerySection>
  )
}
