import { Container, NormalText } from '@/styles'
import { ArticleInner, ArticleWrapper, HalfHalf, HalfTextWrapper, ImageWrapper } from './styles'
import Image from 'next/image'

const MediaContent = ({ data }) => {
  return (
    <ArticleWrapper>
      <Container>
        <ArticleInner>
          {data?.map((item, index) => {
            if (item.__component === 'project.full-media') {
              return (
                <ImageWrapper key={index}>
                  <Image src={item?.media?.url} alt={item?.media?.alternativeText} fill />
                </ImageWrapper>
              )
            }

            if (item.__component === 'project.half-text-left') {
              return (
                <HalfHalf key={index}>
                  <HalfTextWrapper>
                    <NormalText>{item?.text}</NormalText>
                  </HalfTextWrapper>
                  <ImageWrapper>
                    <Image src={item?.right_media?.url} alt={item?.right_media?.alternativeText} fill />
                  </ImageWrapper>
                </HalfHalf>
              )
            }

            if (item.__component === 'project.half-media') {
              return (
                <HalfHalf key={index}>
                  <ImageWrapper>
                    <Image src={item?.left_media?.url} alt={item?.left_media?.alternativeText} fill />
                  </ImageWrapper>
                  <ImageWrapper>
                    <Image src={item?.right_media?.url} alt={item?.right_media?.alternativeText} fill />
                  </ImageWrapper>
                </HalfHalf>
              )
            }
          })}
        </ArticleInner>
      </Container>
    </ArticleWrapper>
  )
}

export default MediaContent
