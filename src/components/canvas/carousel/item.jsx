'use client'

import { useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import Plane from './plane'
import { usePathname, useRouter } from 'next/navigation'
import { Text } from '@react-three/drei'

const CarouselItem = ({ index, width, height, setActivePlane, activePlane, item }) => {
  const $root = useRef()
  const $text = useRef()
  const [hover, setHover] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isCloseActive, setCloseActive] = useState(false)
  const { viewport } = useThree()
  const timeoutID = useRef()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (hover) {
      document.getElementsByTagName('body')[0].style.cursor = 'pointer'
    } else {
      document.getElementsByTagName('body')[0].style.cursor = 'auto'
    }
  }, [hover, isActive])

  useEffect(() => {
    if (pathname === `/${item.slug}`) {
      setActivePlane(index)
      setIsActive(true)
      setCloseActive(true)
    } else {
      if (!isActive) return
      setIsActive(null)
      setActivePlane(null)
      clearTimeout(timeoutID.current)
      timeoutID.current = setTimeout(() => {
        setCloseActive(false)
      }, 1000)
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
    gsap.to(gsap.utils.toArray('.anim-text-1'), {
      duration: 0.75,
      stagger: 0.03,
      yPercent: 100,
      ease: 'power3.inOut',
    })

    setTimeout(() => {
      if (!isActive) return
      setHover(false)
      router.push('/')
    }, 500)
  }

  return (
    <group
      ref={$root}
      onClick={() => {
        router.push(`/${item.slug}`, { scroll: false })
        // setActivePlane(index)
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Plane width={width} height={height} texture={item.image.url} active={isActive} />

      <Text
        color='white'
        anchorX='center'
        anchorY='center'
        font='/fonts/Manrope-Regular.woff'
        fontSize={viewport.width * 100 <= 767 ? viewport.width / 30 : viewport.width / 100}
        position={[0, -height / 2 - 0.1, -0.05]}
        maxWidth={viewport.width / 3}
        ref={$text}
      >
        {item.title}
      </Text>

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
