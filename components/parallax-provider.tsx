"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import RouteLoader from "@/components/route-loader"

export default function ParallaxProvider() {
  // Smooth scroll -> CSS variables for parallax
  const ticking = useRef(false)

  useEffect(() => {
    const root = document.documentElement

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset
          // Clamp and dampen for performance
          const damp = Math.min(1, Math.max(0, y / 800))
          root.style.setProperty("--scrollY", String(y))
          root.style.setProperty("--parallax", String(damp))
          ticking.current = false
        })
        ticking.current = true
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Show loader briefly on route change to ensure visibility
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [showLoader, setShowLoader] = useState(false)
  const timeoutRef = useRef<number | null>(null)
  const isFirstRoute = useRef(true)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Skip initial load to only show on transitions
    if (isFirstRoute.current) {
      isFirstRoute.current = false
      return
    }

    setShowLoader(true)
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => setShowLoader(false), 1100)
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams?.toString()])

  return <>{showLoader && <RouteLoader />}</>
}
