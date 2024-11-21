'use client'

import styled, { css } from 'styled-components'
import media, { pxCutOff } from './media'

export const Normal = css`
  // 16 > 16
  font-size: ${pxCutOff(16)};
  font-weight: 500;
  line-height: 1.15;

  ${media.desktopL`font-size: 16px;`}
`
export const NormalText = styled.p`
  ${Normal}
  margin: 0;
`
export const Medium = css`
  // 24 > 20
  font-size: ${pxCutOff(32)};
  font-weight: 500;
  line-height: 1;

  ${media.desktopL`font-size: clamp(20px, 18.5915px + 0.3756vw, 32px);`}
`
export const MediumText = styled.p`
  ${Medium}
  margin: 0;
`
export const MediumLarge = css`
  // 36 > 48
  font-size: ${pxCutOff(48)};
  font-weight: 500;
  line-height: 1;

  ${media.desktopL`font-size: clamp(2.25rem, 1.9859rem + 1.1268vw, 3rem);`}
`
export const MediumLargeText = styled.h3`
  ${MediumLarge}
  margin: 0;
`
export const Large = css`
  // 56 > 64
  font-size: ${pxCutOff(64)};
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.2vw;

  ${media.desktopL`font-size: clamp(3.5rem, 3.3239rem + 0.7512vw, 4rem);`}
`
export const LargeText = styled.h2`
  ${Large}
  margin: 0;
`
export const Huge = css`
  // 56 > 64
  font-size: ${pxCutOff(128)};
  font-weight: 500;
  line-height: 1;

  ${media.desktopL`font-size: clamp(4rem, 1.7993rem + 9.3897vw, 8rem);`}
`
export const HugeText = styled.h2`
  ${Huge}
  margin: 0;
`
export const Display = css`
  // 64 > 164
  font-size: ${pxCutOff(164)};
  font-weight: 500;
  line-height: 1.1;

  ${media.desktopL`font-size: clamp(64px, 28.7887px + 9.3897vw, 164px);`}
`
export const DisplayText = styled.h1`
  ${Display}
  margin: 0;
`
