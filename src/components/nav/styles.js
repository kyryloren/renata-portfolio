'use client'

import { Z_INDEX } from '@/styles'
import Link from 'next/link'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: ${Z_INDEX.nav};
  padding: var(--space-s) 0;
`
export const InnerNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoWrapper = styled(Link)`
  width: var(--space-3xl);

  svg {
    width: 100%;
    height: auto;
  }
`
export const LinksWrapper = styled.div`
  display: flex;
  gap: var(--space-s);
  align-items: center;
`
export const CustomLink = styled(Link)`
  color: ${({ theme }) => `rgb(${theme.white})`};
  text-decoration: none;

  &:hover {
    opacity: 0.75;
  }
`
