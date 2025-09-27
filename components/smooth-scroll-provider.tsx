"use client"

import { useEffect, useRef, useState } from "react"
import Lenis from "lenis"

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const prefersReducedMotion = mediaQuery.matches
    
    // Only initialize Lenis if user doesn't prefer reduced motion
    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      })

      lenisRef.current = lenis

      function raf(time: number) {
        if (lenisRef.current) {
          lenisRef.current.raf(time)
        }
        requestAnimationFrame(raf)
      }

      const animationId = requestAnimationFrame(raf)

      return () => {
        cancelAnimationFrame(animationId)
        if (lenisRef.current) {
          lenisRef.current.destroy()
        }
      }
    }
  }, [])

  // Don't render anything on server to prevent hydration issues
  if (!isClient) {
    return <>{children}</>
  }

  return <>{children}</>
}