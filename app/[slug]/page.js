import LenisWrapper from '@/components/lenis'
import { Description, FullMedia, Hero } from './components'
import { fetchAPI } from '@/lib/api'
import { ArticleSection } from './components/full/shared'

export async function generateMetadata({ params: { slug } }) {
  const projectsData = await fetchAPI('/projects', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      fields: ['title', 'description'],
      image: {
        populate: '*',
      },
    },
  })
  const projectsDoc = projectsData?.data[0]

  return {
    title: projectsDoc?.title,
    description: projectsDoc?.description,
    openGraph: {
      title: projectsDoc?.title,
      description: projectsDoc?.content?.large_description,
      url: `https://renatadominguez.com/${projectsDoc?.slug}`,
      type: 'website',
    },
  }
}

export default async function Page({ params: { slug } }) {
  const projectsData = await fetchAPI('/projects', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      fields: ['title', 'description'],
      image: {
        populate: '*',
      },
      list: {
        populate: '*',
      },
      article: {
        populate: '*',
      },
    },
  })
  const projectsDoc = projectsData?.data[0]

  return (
    <LenisWrapper>
      <Hero data={projectsDoc} />
      <Description data={projectsDoc} />
      <ArticleSection>
        {projectsDoc.article.map((article) => {
          if (article?.__component === 'project.full-media') {
            return <FullMedia data={article} />
          }
        })}
      </ArticleSection>
    </LenisWrapper>
  )
}
