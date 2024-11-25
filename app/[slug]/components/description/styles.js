'use client'

import { CONTAINER_VALUES, media, SectionWrapper, Z_INDEX } from '@/styles'
import styled from 'styled-components'

export const DescriptionSection = styled(SectionWrapper)`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: var(--space-3xl) var(--space-4xl);
  z-index: ${Z_INDEX.hero};

  ${media.tabletS`padding: var(--space-xl) var(--space-2xl);`}
  ${media.phoneL`
    flex-direction: column;
    gap: var(--space-xl);
    padding: var(--space-xl);
    padding-left: ${CONTAINER_VALUES.mobile.left};
    padding-right: ${CONTAINER_VALUES.mobile.right};
  `}
`
export const QuickContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
`
export const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3xs);

  .label {
    color: ${({ theme }) => `rgb(${theme.gray})`};
  }
`
export const DescriptionWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: var(--space-m);

  ${media.phoneL`width: 100%;`}
`
