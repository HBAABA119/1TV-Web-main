"use client"

import { useEffect } from "react"

export default function AnimateOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const candidates = new Set<Element>()

    // Broad, but safe selector set to cover most content blocks and UI
    const selector = [
      // Layout/group containers
      "main > *",
      "section > *",
      "article",
      "aside",
      "nav",
      "header",
      "footer",
      ".grid > *",
      ".flex > *",
      "ul > li",
      "ol > li",
      // Common content elements
      "h1",
      "h2",
      "h3",
      "h4",
      "p",
      "figure",
      "blockquote",
      "img",
      "a",
      "button",
      "input",
      "textarea",
      "label",
      "table",
      "tr",
      "td",
      "th",
      // Common UI components/classes
      ".card-soft",
      ".product-card",
      ".btn-primary",
      ".btn-secondary",
      ".input-soft",
      ".section-heading",
      ".divider-line",
      // Explicit opt-in
      "[data-animate]",
    ].join(",")

    const addCandidate = (el: Element) => {
      // Skip if inside the loader to avoid interfering with the 3D loading screen
      if ((el as HTMLElement).closest(".loader-overlay")) return
      const htmlEl = el as HTMLElement
      if (!htmlEl.classList.contains("aos-item")) {
        htmlEl.classList.add("aos-item")

        // Stagger based on index within parent group
        const parent = htmlEl.parentElement
        if (parent) {
          const siblings = Array.from(parent.children)
          const index = Math.max(0, siblings.indexOf(htmlEl))
          const parentStagger = Number((parent as HTMLElement).dataset.stagger || 40)
          const delayMs = Math.min(index * parentStagger, 600) // cap to keep snappy
          htmlEl.style.transitionDelay = `${delayMs}ms`
        }

        candidates.add(htmlEl)
      }
    }

    document.querySelectorAll(selector).forEach(addCandidate)

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

    // Observe dynamically added nodes
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches(selector)) addCandidate(node)
          node.querySelectorAll?.(selector).forEach(addCandidate)
        })
      })
      // Re-observe any newly added candidates
      candidates.forEach((el) => io.observe(el))
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
