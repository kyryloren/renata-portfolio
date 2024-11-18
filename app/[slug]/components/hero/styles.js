'use client'

import { SectionWrapper, Z_INDEX } from '@/styles'
import styled from 'styled-components'

export const HeroSection = styled(SectionWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.hero};
  pointer-events: none;

  .anim-title-1 {
    display: inline-block;
  }
`
export const HeroContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-s);
`
export const InfoWrapper = styled.div`
  display: flex;
  gap: var(--space-3xl);
`
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3xs);

  .dim {
    opacity: 0.75;
  }
`
