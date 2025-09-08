"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <button aria-label="Toggle theme" className="w-10 h-10 grid place-items-center border border-gray-800 rounded hover:border-white transition-colors" />
  )

  const isDark = theme !== "light"
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 grid place-items-center border border-gray-800 rounded hover:border-white transition-colors"
      title="Toggle theme"
    >
      {isDark ? (
        <span className="text-white">☾</span>
      ) : (
        <span className="text-black">☀</span>
      )}
    </button>
  )
}

