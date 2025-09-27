"use client"

import { motion } from "framer-motion"
import { ReactNode, useMemo } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  reduceMotion?: boolean
  ariaLabel?: string
  isLoading?: boolean
  isError?: boolean
  errorMessage?: string
}

export default function GlassmorphicCard({ 
  children, 
  className = "",
  hover = true,
  reduceMotion = false,
  ariaLabel,
  isLoading = false,
  isError = false,
  errorMessage = "An error occurred"
}: GlassmorphicCardProps) {
  // Memoize the gradient styles to prevent unnecessary re-renders
  const gradientStyles = useMemo(() => ({
    background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
  }), [])

  if (isLoading) {
    return (
      <div className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 backdrop-blur-xl border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        ${className}
      `} style={gradientStyles}>
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-white/10 rounded w-3/4"></div>
            <div className="h-4 bg-white/10 rounded"></div>
            <div className="h-4 bg-white/10 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 backdrop-blur-xl border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        ${className}
      `} style={gradientStyles}>
        <div className="p-6 text-center">
          <div className="text-red-400 mb-2">
            <i className="fas fa-exclamation-triangle text-2xl"></i>
          </div>
          <p className="text-white">{errorMessage}</p>
          <button 
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      whileHover={!reduceMotion && hover ? { 
        scale: 1.02,
        y: -3,
        transition: { duration: 0.3, ease: "easeOut" }
      } : undefined}
      whileTap={!reduceMotion && hover ? { scale: 0.98 } : undefined}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 backdrop-blur-xl border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-white/10 before:to-transparent
        before:opacity-50 before:pointer-events-none
        hover:bg-white/10 hover:border-white/20
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent
        ${className}
      `}
      style={gradientStyles}
      aria-label={ariaLabel}
      role="region"
      tabIndex={0}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated border gradient - only show if not reducing motion */}
      {!reduceMotion && (
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
        </div>
      )}
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
    </motion.div>
  )
}