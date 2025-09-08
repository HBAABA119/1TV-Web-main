"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EnhancedHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05
      }
    }
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="block">
              <Image
                src="/images/1TV_LOGO.png"
                alt="One True Vision"
                width={100}
                height={50}
                className="w-auto h-auto max-w-[100px] hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </motion.div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 list-none p-0 m-0">
              {[
                { href: "/", label: "HOME" },
                { href: "/teams", label: "TEAMS" },
                { href: "/live-stream", label: "LIVE STREAM" },
                { href: "/news", label: "NEWS" },
                { href: "/placements", label: "PLACEMENTS" },
                { href: "/schedule", label: "SCHEDULE" },
                { href: "/shop", label: "SHOP" },
                { href: "/about", label: "ABOUT" },
                { href: "/contact", label: "CONTACT US" }
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className={`
                      relative text-white font-medium uppercase tracking-wider text-sm 
                      transition-all duration-300 hover:text-cyan-400 group
                      ${isActive(item.href) ? "text-cyan-400" : ""}
                    `}
                  >
                    {item.label}
                    <span className={`
                      absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 
                      transition-all duration-300 group-hover:w-full
                      ${isActive(item.href) ? "w-full" : "w-0"}
                    `} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-white/20 rounded-lg hover:border-white/40 transition-colors duration-300"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-white transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white transition-all duration-300"
            />
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden mt-4 pt-4 border-t border-white/10 overflow-hidden"
            >
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {[
                  { href: "/", label: "HOME" },
                  { href: "/teams", label: "TEAMS" },
                  { href: "/live-stream", label: "LIVE STREAM" },
                  { href: "/news", label: "NEWS" },
                  { href: "/placements", label: "PLACEMENTS" },
                  { href: "/schedule", label: "SCHEDULE" },
                  { href: "/shop", label: "SHOP" },
                  { href: "/about", label: "ABOUT" },
                  { href: "/contact", label: "CONTACT US" }
                ].map((item) => (
                  <motion.li key={item.href} variants={mobileItemVariants}>
                    <Link 
                      href={item.href} 
                      onClick={() => setMenuOpen(false)}
                      className={`
                        block text-white font-medium uppercase tracking-wider text-sm py-2
                        transition-all duration-300 hover:text-cyan-400 hover:translate-x-2
                        ${isActive(item.href) ? "text-cyan-400" : ""}
                      `}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}