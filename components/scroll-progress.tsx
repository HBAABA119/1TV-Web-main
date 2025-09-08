"use client"

import { useEffect, useRef, useState } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const ticking = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const p = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0
        setProgress(p)
        ticking.current = false
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[60]">
      <div
        className="h-full bg-white transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}

