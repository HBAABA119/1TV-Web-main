import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black mt-16 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/1TV_LOGO.png" alt="1TV logo" width={40} height={40} className="rounded" />
              <span className="text-white font-semibold tracking-wide">ONE TRUE VISION</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Elite esports organization. Precision, discipline, and a single vision to win.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                <i className="fab fa-discord text-xl"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                <i className="fab fa-tiktok text-xl"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="section-eyebrow mb-3 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-cyan-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="/teams" className="text-white/80 hover:text-cyan-400 transition-colors duration-300">Teams</Link></li>
              <li><Link href="/live-stream" className="text-white/80 hover:text-cyan-400 transition-colors duration-300">Live Stream</Link></li>
              <li><Link href="/news" className="text-white/80 hover:text-cyan-400 transition-colors duration-300">News</Link></li>
              <li><Link href="/placements" className="text-white/80 hover:text-cyan-400 transition-colors duration-300">Placements</Link></li>
              <li><Link href="/schedule" className="text-white/80 hover:text-cyan-400 transition-colors duration-300">Schedule</Link></li>
            </ul>
          </div>

          {/* Shop & Info */}
          <div>
            <h3 className="section-eyebrow mb-3 text-cyan-400">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-white/80 hover:text-cyan-400 transition-colors duration-300">Shop</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-cyan-400 transition-colors duration-300">About</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-cyan-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="section-eyebrow mb-3 text-cyan-400">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <i className="fas fa-envelope mt-1 text-cyan-400"></i>
                <span>contact@1tv.gg</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-1 text-cyan-400"></i>
                <span>Esports Arena, Digital World</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">&copy; 2025 One True Vision. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-white/60 text-sm hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 text-sm hover:text-cyan-400 transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}