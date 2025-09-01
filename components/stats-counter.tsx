"use client"

import { useEffect, useState } from "react"

interface StatsCounterProps {
  end: number
  duration?: number
  label: string
  suffix?: string
}

export default function StatsCounter({ end, duration = 2000, label, suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-wide">{label}</div>
    </div>
  )
}
