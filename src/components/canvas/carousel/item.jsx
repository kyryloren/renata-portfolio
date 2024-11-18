'use client'

import { useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import Plane from './plane'
import { usePathname, useRouter } from 'next/navigation'

const CarouselItem = ({ index, width, height, setActivePlane, activePlane, item }) => {
  const $root = useRef()
  const [hover, setHover] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isCloseActive, setCloseActive] = useState(false)
  const { viewport } = useThree()
  const timeoutID = useRef()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === item.slug) {
      setActivePlane(index)
      setIsActive(true)
      setCloseActive(true)
    } else {
      setIsActive(null)
    }
  }, [isActive, pathname])

  useEffect(() => {
    gsap.killTweensOf($root.current.position)
    gsap.to($root.current.position, {
      z: isActive ? 0 : -0.01,
      duration: 0.2,
      ease: 'power3.out',
      delay: isActive ? 0 : 2,
    })
  }, [isActive])

  /*------------------------------
  Hover effect
  ------------------------------*/
  useEffect(() => {
    const hoverScale = hover && !isActive ? 1.1 : 1
    gsap.to($root.current.scale, {
      x: hoverScale,
      y: hoverScale,
      duration: 0.5,
      ease: 'power3.out',
    })
  }, [hover, isActive])

  const handleClose = (e) => {
    e.stopPropagation()

    gsap.to(gsap.utils.toArray('.anim-title-1'), {
      duration: 0.75,
      stagger: 0.03,
      yPercent: 100,
      ease: 'power3.inOut',
    })

    setTimeout(() => {
      if (!isActive) return
      setActivePlane(null)
      setHover(false)
      router.push('/')
      clearTimeout(timeoutID.current)
      timeoutID.current = setTimeout(() => {
        setCloseActive(false)
      }, 1000)
    }, 500)
  }

  return (
    <group
      ref={$root}
      onClick={() => {
        router.push(item.slug, { scroll: false })
        // setActivePlane(index)
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Plane width={width} height={height} texture={item.image} active={isActive} />

      {isCloseActive ? (
        <mesh position={[0, 0, 0.01]} onClick={handleClose}>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial transparent={true} opacity={0} color={'red'} />
        </mesh>
      ) : null}
    </group>
  )
}

export default CarouselItem
