'use client'

import { Container, SectionWrapper } from '@/styles'
import styled from 'styled-components'

const ArticleItem = styled.div`
  position: relative;
`
const InnerArticle = styled.div`
  display: flex;
  gap: var(--space-xs);
`

export const ArticleSection = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`

const SharedWrapper = ({ children }) => {
  return (
    <ArticleItem>
      <Container>
        <InnerArticle>{children}</InnerArticle>
      </Container>
    </ArticleItem>
  )
}

export default SharedWrapper
