'use client'

import { type ReactNode, useState, useEffect } from 'react'
import { useIntersectionObserver, useCountUp, useScrollProgress } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 800
}: FadeInProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  })

  const getTransform = () => {
    if (!isIntersecting) {
      switch (direction) {
        case 'up': return 'translateY(60px)'
        case 'down': return 'translateY(-60px)'
        case 'left': return 'translateX(60px)'
        case 'right': return 'translateX(-60px)'
        case 'none': return 'translateY(0px)'
        default: return 'translateY(60px)'
      }
    }
    return 'translateY(0px)'
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface CountUpAnimationProps {
  end: number
  duration?: number
  start?: number
  className?: string
  suffix?: string
  prefix?: string
}

export function CountUpAnimation({
  end,
  duration = 2000,
  start = 0,
  className = '',
  suffix = '',
  prefix = ''
}: CountUpAnimationProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: true
  })
  const { count, startAnimation } = useCountUp(end, duration, start)

  // アニメーションを開始
  if (isIntersecting) {
    startAnimation()
  }

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0,
    triggerOnce: false,
    rootMargin: '200px'
  })

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={{
        transform: isIntersecting
          ? `translateY(${scrollY * speed}px)`
          : 'translateY(0px)',
        transition: 'transform 0.1s linear'
      }}
    >
      {children}
    </div>
  )
}

export function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-100">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}

interface StaggeredFadeInProps {
  children: ReactNode[]
  stagger?: number
  className?: string
}

export function StaggeredFadeIn({ children, stagger = 100, className = '' }: StaggeredFadeInProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={`staggered-${index}-${stagger}`}
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0px)' : 'translateY(30px)',
            transition: `all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * stagger}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

interface ScaleInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScaleIn({ children, className = '', delay = 0 }: ScaleInProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3
  })

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'scale(1)' : 'scale(0.8)',
        transition: `all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
  delay?: number
}

export function Typewriter({ text, speed = 50, className = '', delay = 0 }: TypewriterProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: true
  })

  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!isIntersecting) return

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [isIntersecting, currentIndex, text, speed])

  return (
    <span ref={ref} className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}
