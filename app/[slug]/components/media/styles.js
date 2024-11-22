'use client'

import { media } from '@/styles'
import styled from 'styled-components'

export const ArticleWrapper = styled.article`
  padding: 0 0 var(--space-4xl) 0;
`
export const ArticleInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
`
export const HalfHalf = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-s);
`
export const HalfTextWrapper = styled.div`
  width: 75%;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90svh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const CustomVideo = styled.video`
  width: 100%;
  height: 100%;

  ${media.phoneL`
    height: unset;
    width: 100%;
  `}
`
