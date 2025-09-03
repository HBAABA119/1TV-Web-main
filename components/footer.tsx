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
          </div>

          {/* Quick Links */}
          <div>
            <div className="section-eyebrow mb-3">Quick Links</div>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/teams" className="hover:text-white transition-colors">Teams</Link></li>
              <li><Link href="/live-stream" className="hover:text-white transition-colors">Live Stream</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/placements" className="hover:text-white transition-colors">Placements</Link></li>
              <li><Link href="/schedule" className="hover:text-white transition-colors">Schedule</Link></li>
            </ul>
          </div>

          {/* Shop & Info */}
          <div>
            <div className="section-eyebrow mb-3">Explore</div>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div className="section-eyebrow mb-3">Social</div>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X (Twitter)</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">&copy; 2025 One True Vision. All rights reserved.</p>
          <div className="text-white/60 text-xs">Built with passion for esports.</div>
        </div>
      </div>
    </footer>
  )
}
