"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassmorphicCard({ 
  children, 
  className = "",
  hover = true 
}: GlassmorphicCardProps) {
  return (
    <motion.div
      whileHover={hover ? { 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      } : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 backdrop-blur-xl border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-white/10 before:to-transparent
        before:opacity-50 before:pointer-events-none
        hover:bg-white/10 hover:border-white/20
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
      </div>
    </motion.div>
  )
}