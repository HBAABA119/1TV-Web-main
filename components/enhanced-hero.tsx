"use client"

import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef, useEffect, useState, useMemo } from "react"
import Link from "next/link"

export default function EnhancedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Check for user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mediaQuery.matches)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!reduceMotion) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [reduceMotion])

  // Memoize particles to prevent unnecessary re-renders
  const particles = useMemo(() => {
    if (reduceMotion) return [];
    return Array.from({ length: 8 }, (_, i) => i); // Reduced particles for mobile
  }, [reduceMotion])

  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      filter: "blur(5px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }

  const buttonVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4
      }
    }
  }

  if (isLoading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400 mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </section>
    )
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated background */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
        role="img"
        aria-label="Animated background gradient"
      />
      
      {/* Dynamic gradient orbs - hidden on mobile for performance */}
      {!reduceMotion && (
        <>
          <motion.div
            animate={{
              x: mousePosition.x * 30,
              y: mousePosition.y * 30,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl hidden sm:block"
            role="img"
            aria-label="Animated gradient orb"
          />
          
          <motion.div
            animate={{
              x: mousePosition.x * -20,
              y: mousePosition.y * -20,
            }}
            transition={{ type: "spring", stiffness: 30, damping: 20 }}
            className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl hidden sm:block"
            role="img"
            aria-label="Animated gradient orb"
          />
        </>
      )}

      {/* Floating particles - reduced on mobile */}
      {!reduceMotion && particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 1,
            repeat: Infinity,
            delay: Math.random() * 1,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          role="img"
          aria-label="Floating particle"
        />
      ))}

      {/* Main content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          <motion.div variants={textVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
              WELCOME TO
            </h1>
            <motion.h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mt-2 sm:mt-4"
              animate={reduceMotion ? {} : {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              1TV
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={textVariants}
            className="relative"
          >
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              A professional esports organization dedicated to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold">
                excellence
              </span>{" "}
              in competitive gaming
            </p>
          </motion.div>

          <motion.div 
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 sm:pt-12"
          >
            <motion.div
              whileHover={!reduceMotion ? { scale: 1.05, y: -2 } : {}}
              whileTap={!reduceMotion ? { scale: 0.95 } : {}}
              className="relative w-full sm:w-auto"
            >
              <Link 
                href="/teams" 
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base font-bold text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="View our teams"
              >
                <span className="relative z-10 tracking-wider">OUR TEAMS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10" />
            </motion.div>
            
            <motion.div
              whileHover={!reduceMotion ? { scale: 1.05, y: -2 } : {}}
              whileTap={!reduceMotion ? { scale: 0.95 } : {}}
              className="relative w-full sm:w-auto"
            >
              <Link 
                href="/about" 
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base font-bold text-white border-2 border-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Learn more about us"
              >
                <span className="relative z-10 tracking-wider">LEARN MORE</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - hidden on mobile */}
      {!reduceMotion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-white/50 rounded-full mt-1"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}