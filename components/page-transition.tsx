"use client"

import { PropsWithChildren, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    // Skip if reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }
    // Trigger enter animation
    container.classList.remove("page-exit")
    void container.offsetWidth // reflow
    container.classList.add("page-enter")
    const onEnd = () => container.classList.remove("page-enter")
    container.addEventListener("animationend", onEnd, { once: true })
    return () => container.removeEventListener("animationend", onEnd)
  }, [pathname])

  return (
    <div ref={containerRef} className="page-transition-container">
      {children}
    </div>
  )
}

