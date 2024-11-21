'use client'

import { SectionWrapper } from '@/styles'
import styled from 'styled-components'

export const CustomSection = styled(SectionWrapper)`
  padding: var(--space-4xl) 0;

  .masonary-grid {
    display: flex;
    width: auto;
    gap: 1vmax;
  }
  .masonary-grid-column {
    display: flex;
    flex-direction: column;
    gap: 1vmax;
  }
`
export const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`
