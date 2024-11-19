'use client'

import { Normal, SectionWrapper } from '@/styles'
import styled from 'styled-components'

export const InfoWrapper = styled(SectionWrapper)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  gap: var(--space-2xs);
  width: 100%;
`
export const Description = styled.div`
  grid-column: 3 / 5;
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
`
export const ImageWrapper = styled.div`
  position: relative;
  grid-column: 1 / 2;
  height: 15vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const ColsWrapper = styled.div`
  grid-column: 6 / -1;
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
`
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  height: fit-content;
`
export const InnerCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3xs);
`
export const CustomLink = styled.a`
  ${Normal}
  color: ${({ theme }) => `rgb(${theme.white})`};
  text-decoration: underline;
`
