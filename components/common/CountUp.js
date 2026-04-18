'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

function parseValue(value) {
  const text = String(value)
  const match = text.match(/^([^0-9]*)([\d,.]+)(.*)$/)

  if (!match) {
    return null
  }

  const [, prefix, numericText, suffix] = match
  const decimals = (numericText.split('.')[1] || '').length
  const numericValue = Number(numericText.replace(/,/g, ''))

  if (Number.isNaN(numericValue)) {
    return null
  }

  return {
    prefix,
    suffix,
    decimals,
    numericValue,
  }
}

export default function CountUp({ value, duration = 1400, className = '', style }) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(value)
  const [started, setStarted] = useState(false)
  const parsed = useMemo(() => parseValue(value), [value])

  useEffect(() => {
    if (!parsed || typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      setDisplayValue(value)
      return undefined
    }

    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.35,
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [parsed, value])

  useEffect(() => {
    if (!parsed || !started || typeof window === 'undefined') {
      return undefined
    }

    let frameId = null
    let startTime = null

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const currentValue = parsed.numericValue * eased

      const formattedNumber = currentValue.toLocaleString('en-US', {
        minimumFractionDigits: progress === 1 ? parsed.decimals : 0,
        maximumFractionDigits: parsed.decimals,
      })

      setDisplayValue(`${parsed.prefix}${formattedNumber}${parsed.suffix}`)

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    frameId = window.requestAnimationFrame(animate)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [duration, parsed, started, value])

  return (
    <span ref={ref} className={className} style={style}>
      {displayValue}
    </span>
  )
}
