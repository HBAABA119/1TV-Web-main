import Hero from "@/components/hero"
import SocialMedia from "@/components/social-media"
import PageLayout from "@/components/page-layout"

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      {/* Our Teams */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-heading text-center mb-12">
            <div className="section-eyebrow">Our Teams</div>
            <h2 className="text-white">OUR TEAMS</h2>
            <div className="divider-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-soft p-6 flex items-center justify-between">
              <div>
                <p className="section-eyebrow">Team</p>
                <h3 className="text-2xl font-semibold tracking-wide text-white">FORTNITE</h3>
              </div>
              <div className="w-40 h-24 rounded-xl overflow-hidden border border-gray-800/60 bg-black/60">
                <div className="skeleton w-full h-full" />
              </div>
            </div>
            <div className="product-card p-0 overflow-hidden"><div className="skeleton h-40 w-full" /></div>
          </div>
        </div>
      </section>

      {/* Sponsored Merch Banner */}
      <section className="py-8 bg-black border-y border-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="uppercase tracking-[0.25em] text-white/60 text-xs">Sponsored</span>
            <a href="/shop" className="inline-flex items-center text-white hover:opacity-80 transition text-sm">
              Check out our latest merch →
            </a>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-heading text-left mb-8">
            <div className="section-eyebrow">Latest News</div>
            <h2 className="text-white">LATEST NEWS</h2>
            <div className="divider-line" />
          </div>
          <div className="space-y-8">
            <a href="/" className="card-soft p-4 block hover:border-white transition-colors">
              <div className="flex gap-4 items-center">
                <div className="w-32 h-20 rounded-lg overflow-hidden border border-gray-800/60 bg-black/60">
                  <div className="skeleton w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold tracking-wide">1TV official website published</h3>
                  <p className="text-white/60 text-sm">Read more →</p>
                </div>
              </div>
            </a>
          </div>
          <div className="mt-8">
            <a href="/news" className="btn-secondary">View All News</a>
          </div>
        </div>
      </section>

      <SocialMedia />
    </PageLayout>
  )
}
