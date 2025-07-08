'use client'

import {usePathname} from 'next/navigation'
import React, {FC, useCallback, useEffect, useState} from 'react'

// interface Props {
//   data: string
// }

const CTA: FC = () => {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = useCallback(() => {
    const viewportHeight = window.innerHeight
    setIsVisible(window.scrollY > viewportHeight)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const xsmBottom = pathname.includes('products')
    ? 'xsm:bottom-[7.94rem]!'
    : 'xsm:bottom-[4.94rem]!'

  return (
    <div
      style={{
        transition: '0.6s cubic-bezier(0.46, 0, 0, 1)',
      }}
      className={`fixed bottom-[2rem] right-[2rem] z-50 flex flex-col space-y-[1.1rem] items-center justify-center 
        xsm:right-[0.78rem] ${xsmBottom}
        ${isVisible ? 'translate-y-0' : 'translate-y-[200%]'}
      `}
    >
      <ScrollToTop />
    </div>
  )
}

const ScrollToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight
    const currentProgress = Math.min((window.scrollY / totalScroll) * 100, 100)
    setScrollProgress(currentProgress)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <button
      onClick={scrollToTop}
      className='size-[3.71613rem] cursor-pointer'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='60'
        height='60'
        viewBox='0 0 60 60'
        fill='none'
        className='size-full object-contain'
      >
        <g clipPath='url(#clip0_15998_13084)'>
          <path
            d='M30.5 41.1923L30.5 23.0001'
            stroke='#1D52C4'
            strokeWidth='4'
          />
          <path
            d='M22.2629 31.2373L30.4963 23.0039L38.7297 31.2373'
            stroke='#1D52C4'
            strokeWidth='4'
          />
        </g>
        <rect
          x='1.44'
          y='1.44'
          width='57.12'
          height='57.12'
          rx='28.56'
          stroke='#1D52C4'
          strokeWidth='1.12'
          strokeDasharray='179.2'
          strokeDashoffset={String(
            179.2 - (179.2 * Math.min(scrollProgress || 0, 100)) / 100,
          )}
        />
        <defs>
          <clipPath id='clip0_15998_13084'>
            <rect
              x='2'
              y='2'
              width='56'
              height='56'
              rx='28'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}

export default CTA
