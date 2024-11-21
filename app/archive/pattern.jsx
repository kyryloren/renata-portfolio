'use client'

import Masonry from 'react-masonry-css'

const Pattern = () => {
  return (
    <Masonry
      className='masonary-grid'
      columnClassName='masonary-grid-column'
      breakpointCols={{ 440: 1, 820: 2, default: 3 }}
    ></Masonry>
  )
}

export default Pattern
