'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), { ssr: false })
const Carousel = dynamic(() => import('@/components/canvas/carousel'), { ssr: false })

export default function Gallery({ data }) {
  const pathname = usePathname()
  const excludedPaths = ['/contact', '/about', '/archive']

  if (excludedPaths.includes(pathname)) return null

  return (
    <>
      <View id='carousel'>
        <Suspense fallback={null}>
          <Carousel data={data} />
        </Suspense>
      </View>
    </>
  )
}
