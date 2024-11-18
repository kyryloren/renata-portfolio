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
`
