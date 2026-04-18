'use client'

import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  distance = '28px',
  once = true,
  style,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const rafRef = useRef([])

  const runAfterPaint = (callback) => {
    const first = window.requestAnimationFrame(() => {
      const second = window.requestAnimationFrame(callback)
      rafRef.current.push(second)
    })

    rafRef.current.push(first)
  }

  useEffect(() => {
    const node = ref.current

    if (!node || typeof window === 'undefined') {
      return
    }

    const parent = node.parentElement

    if (!parent) {
      return
    }

    const parentClass = String(parent.className || '')
    const isGridLikeParent = /grid|Grid|row|Row/.test(parentClass)

    if (!isGridLikeParent) {
      return
    }

    const revealSiblings = Array.from(parent.children).filter((child) => child.classList.contains('reveal'))
    const revealIndex = revealSiblings.indexOf(node)

    if (revealIndex === -1) {
      return
    }

    node.style.setProperty('--reveal-distance', '0px')
    node.style.setProperty('--reveal-x', revealIndex % 2 === 0 ? '-120px' : '120px')
  }, [className])

  useEffect(() => {
    const node = ref.current

    if (!node || typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAfterPaint(() => setVisible(true))

          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          runAfterPaint(() => setVisible(false))
        }
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      rafRef.current.forEach((id) => window.cancelAnimationFrame(id))
      rafRef.current = []
    }
  }, [once])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' reveal-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-distance': distance,
        '--reveal-x': '0px',
        transition:
          'opacity 0.95s var(--ease-premium) var(--reveal-delay, 0ms), transform 0.95s var(--ease-premium) var(--reveal-delay, 0ms)',
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
