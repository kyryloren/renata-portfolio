import { Container, NormalText } from '@/styles'
import { ArticleInner, ArticleWrapper, CustomVideo, HalfHalf, HalfTextWrapper, ImageWrapper } from './styles'
import Image from 'next/image'

const MediaContent = ({ data }) => {
  return (
    <ArticleWrapper>
      <Container>
        <ArticleInner>
          {data?.map((item, index) => {
            if (item.__component === 'project.full-media') {
              if (
                item?.media?.mime === 'video/mp4' ||
                item?.media?.mime === 'video/mpeg' ||
                item?.media?.mime === 'video/webm'
              ) {
                return (
                  <CustomVideo playsInline autoPlay muted loop width={item?.media?.width} height={item?.media?.height}>
                    <source src={item?.media?.url} />
                  </CustomVideo>
                )
              } else {
                return (
                  <ImageWrapper key={index}>
                    <Image src={item?.media?.url} alt={item?.media?.alternativeText} fill />
                  </ImageWrapper>
                )
              }
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

            if (item.__component === 'project.half-text-right') {
              return (
                <HalfHalf key={index}>
                  <ImageWrapper>
                    <Image src={item?.left_media?.url} alt={item?.left_media?.alternativeText} fill />
                  </ImageWrapper>
                  <HalfTextWrapper>
                    <NormalText>{item?.text}</NormalText>
                  </HalfTextWrapper>
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
