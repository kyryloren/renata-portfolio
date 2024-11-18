import { Container } from '@/styles'
import Logo from '../logo'
import { CustomLink, HeaderWrapper, InnerNav, LinksWrapper, LogoWrapper } from './styles'

const Nav = () => {
  return (
    <HeaderWrapper>
      <Container>
        <InnerNav>
          <LogoWrapper href={'/'}>
            <Logo />
          </LogoWrapper>
          <LinksWrapper>
            <CustomLink href={'/about'}>About</CustomLink>
            <CustomLink href={'/archive'}>Archive</CustomLink>
            <CustomLink href={'/contact'}>Contact</CustomLink>
          </LinksWrapper>
        </InnerNav>
      </Container>
    </HeaderWrapper>
  )
}

export default Nav
