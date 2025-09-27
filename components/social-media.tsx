"use client"

import { motion, Variants } from "framer-motion"
import { useState, useEffect } from "react"

export default function SocialMedia() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Simulate error for demo purposes (remove in production)
      // setIsError(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    { 
      name: "Discord", 
      url: "https://discord.gg/INVULLEN", 
      icon: "fab fa-discord",
      color: "hover:text-indigo-400",
      ariaLabel: "Join us on Discord"
    },
    { 
      name: "TikTok", 
      url: "https://tiktok.com/@INVULLEN", 
      icon: "fab fa-tiktok",
      color: "hover:text-pink-500",
      ariaLabel: "Follow us on TikTok"
    },
    { 
      name: "YouTube", 
      url: "https://youtube.com/@INVULLEN", 
      icon: "fab fa-youtube",
      color: "hover:text-red-500",
      ariaLabel: "Subscribe to our YouTube channel"
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/INVULLEN", 
      icon: "fab fa-twitter",
      color: "hover:text-cyan-400",
      ariaLabel: "Follow us on Twitter"
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  if (isLoading) {
    return (
      <section className="text-center py-16 px-5 bg-gradient-to-b from-black to-gray-900/50" aria-label="Social media loading">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-white/10 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-white/10 rounded w-1/2 mx-auto"></div>
            <div className="flex justify-center gap-8 mt-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 w-12 bg-white/10 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="text-center py-16 px-5 bg-gradient-to-b from-black to-gray-900/50" aria-label="Social media error">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-900/30 border border-red-500/50 rounded-2xl p-8">
            <div className="text-red-400 mb-4">
              <i className="fas fa-exclamation-triangle text-3xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Unable to load social media</h2>
            <p className="text-gray-300 mb-6">We're having trouble connecting to our social media feeds.</p>
            <button 
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="text-center py-16 px-5 bg-gradient-to-b from-black to-gray-900/50" aria-labelledby="social-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            id="social-heading"
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Connect With Us
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Join our community and stay updated with the latest news, streams, and events
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className={`social-icon text-4xl md:text-5xl text-white transition-all duration-300 ${link.color} hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-full`}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={link.icon} aria-hidden="true"></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}