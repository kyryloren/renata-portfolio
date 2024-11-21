'use client'

import { media, Z_INDEX } from '@/styles'
import Link from 'next/link'
import styled from 'styled-components'

export const AboutPage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr auto;
  z-index: ${Z_INDEX.nav + 1};
  opacity: 0;
  visibility: hidden;

  ${media.tablet`grid-template-columns: 1fr;`}

  .letter {
    display: inline-block;
  }
`
export const InvisWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `rgb(${theme.darkGray})`};
  opacity: 0.5;

  ${media.tablet`display: none;`}
`
export const SideWrapper = styled.aside`
  padding-top: var(--space-s);
  padding-right: var(--space-s);
  padding-bottom: 1.25em;
  padding-left: var(--space-s);
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  top: var(--space-s);
  bottom: var(--space-s);
  right: var(--space-s);
  border-radius: 0.5rem;
  flex-flow: column;
  align-items: stretch;
  width: 40vw;
  position: absolute;
  left: auto;
  overflow: scroll;
  background-color: ${({ theme }) => `rgb(${theme.darkGray})`};

  ${media.tablet`
    width: 100%;
    inset: 0;
  `}
`
export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  margin-top: var(--space-m);
`
export const CloseWrapper = styled(Link)`
  width: var(--space-l);

  svg {
    width: 100%;
    height: 100%;
  }
`
export const ImageCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  z-index: 2;
  background-color: ${({ theme }) => `rgb(${theme.darkGray})`};
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 25vw;

  ${media.tablet`height: 20rem;`}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`
export const DualCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-s);
  row-gap: var(--space-l);
`
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`
export const InnerCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3xs);
`
export const CustomLink = styled.a`
  position: relative;
  color: inherit;
  text-decoration: underline;
  width: fit-content;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`
