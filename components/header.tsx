"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link href="/" className="block">
              <Image
                src="/images/1TV_LOGO.png"
                alt="One True Vision"
                width={100}
                height={50}
                className="w-auto h-auto max-w-[100px] hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 list-none p-0 m-0">
              <li><Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>HOME</Link></li>
              <li><Link href="/teams" className={`nav-link ${isActive("/teams") ? "active" : ""}`}>TEAMS</Link></li>
              <li><Link href="/live-stream" className={`nav-link ${isActive("/live-stream") ? "active" : ""}`}>LIVE STREAM</Link></li>
              <li><Link href="/news" className={`nav-link ${isActive("/news") ? "active" : ""}`}>NEWS</Link></li>
              <li><Link href="/placements" className={`nav-link ${isActive("/placements") ? "active" : ""}`}>PLACEMENTS</Link></li>
              <li><Link href="/schedule" className={`nav-link ${isActive("/schedule") ? "active" : ""}`}>SCHEDULE</Link></li>
              <li><Link href="/shop" className={`nav-link ${isActive("/shop") ? "active" : ""}`}>SHOP</Link></li>
              <li><Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>ABOUT</Link></li>
              <li><Link href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>CONTACT US</Link></li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open command palette"
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true })
                window.dispatchEvent(event)
              }}
              className="hidden md:inline-flex items-center justify-center w-10 h-10 border border-gray-800 rounded hover:border-white transition-colors"
              title="Command Palette (Ctrl+K)"
            >
              <span className="text-white">⌘</span>
            </button>
            <ThemeToggle />
            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-gray-800 rounded hover:border-white transition-colors"
            >
              <span className="sr-only">Toggle navigation</span>
              <span
                className={`block w-5 h-0.5 bg-white transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white my-1 transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-900">
            <ul className="flex flex-col items-center gap-4 list-none p-0 m-0">
              <li><Link href="/" onClick={() => setMenuOpen(false)} className={`nav-link text-sm ${isActive("/") ? "active" : ""}`}>HOME</Link></li>
              <li><Link href="/teams" onClick={() => setMenuOpen(false)} className={`nav-link text-sm ${isActive("/teams") ? "active" : ""}`}>TEAMS</Link></li>
              <li><Link href="/live-stream" onClick={() => setMenuOpen(false)} className={`nav-link text-sm ${isActive("/live-stream") ? "active" : ""}`}>LIVE STREAM</Link></li>
              <li><Link href="/news" onClick={() => setMenuOpen(false)} className={`nav-link text-sm ${isActive("/news") ? "active" : ""}`}>NEWS</Link></li>
              <li><Link href="/placements" onClick={() => setMenuOpen(false)} className={`nav-link text-sm ${isActive("/placements") ? "active" : ""}`}>PLACEMENTS</Link></li>
              <li><Link href="/schedule" onClick={() => setMenuOpen(false)} className={`nav-link text-sm ${isActive("/schedule") ? "active" : ""}`}>SCHEDULE</Link></li>
              <li><Link href="/shop" onClick={() => setMenuOpen(false)} className={`nav-link text-sm ${isActive("/shop") ? "active" : ""}`}>SHOP</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)} className={`nav-link text-sm ${isActive("/about") ? "active" : ""}`}>ABOUT</Link></li>
              <li><Link href="/contact" onClick={() => setMenuOpen(false)} className={`nav-link text-sm ${isActive("/contact") ? "active" : ""}`}>CONTACT US</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
