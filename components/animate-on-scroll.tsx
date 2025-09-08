"use client"

import { useEffect } from "react"

export default function AnimateOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const candidates = new Set<Element>()
    const selector = [
      // Common layout blocks
      "main > *",
      "section > *",
      "header",
      "footer",
      // Common UI components
      ".card-soft",
      ".product-card",
      ".btn-primary",
      ".btn-secondary",
      ".input-soft",
      // Explicit opt-in
      "[data-animate]",
    ].join(",")

    document.querySelectorAll(selector).forEach((el) => {
      // Avoid double-adding
      if (!(el as HTMLElement).classList.contains("aos-item")) {
        ;(el as HTMLElement).classList.add("aos-item")
        candidates.add(el)
      }
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-in")
            io.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        threshold: 0.15,
      }
    )

    candidates.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])

  return null
}
