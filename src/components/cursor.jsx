'use client'

import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import FlairComponent from './flair'
import { usePathname } from 'next/navigation'

const CustomCursor = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
  }
`

const DetectionArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const Cursor = () => {
  const detectionAreaRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/' && pathname !== '/about') {
      // Set the initial transform to keep the cursor centered
      gsap.set('.flair', { xPercent: -50, yPercent: -50 })

      // Create GSAP quick setters for better performance
      let xTo = gsap.quickTo('.flair', 'x', { duration: 0.75, ease: 'power3' }),
        yTo = gsap.quickTo('.flair', 'y', { duration: 0.75, ease: 'power3' })

      // Add mousemove event listener to update cursor position and check boundaries
      const handleMouseMove = (e) => {
        // Update cursor position
        xTo(e.clientX)
        yTo(e.clientY)

        // Check if the mouse is within the first viewport by using the detection area's bounding box
        const detectionArea = detectionAreaRef.current
        if (detectionArea) {
          const bounds = detectionArea.getBoundingClientRect()
          const isWithinViewport =
            e.clientX >= bounds.left &&
            e.clientX <= bounds.right &&
            e.clientY >= bounds.top &&
            e.clientY <= bounds.bottom

          if (isWithinViewport) {
            document.getElementById('cursor').style.opacity = 0.25
            document.getElementsByTagName('body')[0].style.cursor = 'pointer'
            // Optionally add any action when the mouse is within the viewport
          } else {
            document.getElementById('cursor').style.opacity = 0
            document.getElementsByTagName('body')[0].style.cursor = 'auto'
            // Optionally add any action when the mouse is outside the viewport
          }
        }
      }

      window.addEventListener('mousemove', handleMouseMove)

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    } else {
      document.getElementById('cursor').style.opacity = 0
    }
  }, [pathname])

  return (
    <>
      <DetectionArea ref={detectionAreaRef} />
      <CustomCursor id='cursor' className='flair'>
        <FlairComponent />
      </CustomCursor>
    </>
  )
}

export default Cursor
