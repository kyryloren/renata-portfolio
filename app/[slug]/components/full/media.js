'use client'

import styled from 'styled-components'
import SharedWrapper from './shared'
import Image from 'next/image'
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const FullMedia = ({ data }) => {
  console.log(data)
  return (
    <SharedWrapper>
      <ImageWrapper>
        <Image loader={() => data?.media?.url} src={data?.media?.url} alt={data?.media?.alternativeText} fill />
      </ImageWrapper>
    </SharedWrapper>
  )
}

export default FullMedia
