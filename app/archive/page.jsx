import { fetchAPI } from '@/lib/api'
import Pattern from './pattern'
import { CustomSection } from './styles'
import { Container } from '@/styles'
import LenisWrapper from '@/components/lenis'

export const metadata = {
  title: 'Archive',
}

export default async function Page() {
  const archiveData = await fetchAPI('/archive', {
    populate: {
      images: {
        populate: '*',
      },
    },
  })
  const archiveDoc = archiveData?.data

  return (
    <LenisWrapper>
      <CustomSection>
        <Container>
          <Pattern data={archiveDoc} />
        </Container>
      </CustomSection>
    </LenisWrapper>
  )
}
