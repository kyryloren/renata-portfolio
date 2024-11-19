import { Container, Normal, NormalText } from '@/styles'
import { Col, ColsWrapper, CustomLink, Description, GridWrapper, ImageWrapper, InfoWrapper, InnerCol } from './styles'
import Image from 'next/image'

const Info = () => {
  return (
    <InfoWrapper>
      <Container _height={'unset'}>
        <GridWrapper>
          <ImageWrapper>
            <Image src={'/img/renata.webp'} alt='Renata' fill />
          </ImageWrapper>
          <Description>
            <NormalText>
              Renata Dominguez is a multidisciplinary designer based in New York, NY pursuing a BFA in Communications
              Design at Pratt Institute.
            </NormalText>
            <NormalText>
              With a family background full of artists and designers, art and design have been a central part of her
              life since childhood. She strives to create innovative and unique designs in a modern and expressive
              manner focusing on branding, packaging, and editorial design.
            </NormalText>
            <NormalText>
              Dominguez has been recognized by prestigious organizations, including Communication Arts and Graphic
              Design USA.
            </NormalText>
            <NormalText>
              She previously worked at dentsu, creating advertisements, packaging, logos, and visuals for clients such
              as Disney, Oreo, Subway, and Lowes. She is the Founder of ComD Gallery—a gallery focused on promoting
              works of communication design and Co-Founder of The Media Club, which focuses on conecting emerging
              creatives in New York City.
            </NormalText>
          </Description>
          <ColsWrapper>
            <Col>
              <NormalText>Awards</NormalText>
              <InnerCol>
                <CustomLink>GDUSA 2024</CustomLink>
                <CustomLink>Communication Arts</CustomLink>
                <CustomLink>GDUSA 2023</CustomLink>
                <CustomLink>Pratt Munson</CustomLink>
                <CustomLink>Packaging of the World</CustomLink>
              </InnerCol>
            </Col>
            <Col>
              <NormalText>Conducted Interviews</NormalText>
              <InnerCol>
                <CustomLink>Rich Tu</CustomLink>
                <CustomLink>Luis Valencia</CustomLink>
                <CustomLink>Jonathan Kirk</CustomLink>
                <CustomLink>Daniel Buckingham</CustomLink>
                <CustomLink>Dr. Robert Edgell</CustomLink>
              </InnerCol>
            </Col>
          </ColsWrapper>
        </GridWrapper>
      </Container>
    </InfoWrapper>
  )
}

export default Info
