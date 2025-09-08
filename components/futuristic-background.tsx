"use client"

import { useEffect, useRef } from "react"

export default function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", onResize, { passive: true })

    // Minimal, performant starfield/particle background
    const particleCount = Math.min(140, Math.floor((width * height) / 24000))
    const particles: { x: number; y: number; z: number; r: number; s: number }[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2,
        r: Math.random() * 1.2 + 0.3,
        s: Math.random() * 0.6 + 0.2,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // subtle radial vignette
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        Math.min(width, height) * 0.15,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.9
      )
      grad.addColorStop(0, "rgba(255,255,255,0.06)")
      grad.addColorStop(1, "rgba(0,0,0,0.0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = "rgba(255,255,255,0.9)"
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const speed = p.s * (p.z * 1.8)
        p.x += speed
        if (p.x > width + 10) p.x = -10

        const size = p.r * p.z
        ctx.globalAlpha = Math.min(0.55, 0.18 + p.z * 0.5)
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(draw)
    }
    animationRef.current = requestAnimationFrame(draw)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-20"
    />
  )
}

