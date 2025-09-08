import EnhancedHero from "@/components/enhanced-hero"
import SocialMedia from "@/components/social-media"
import PageLayout from "@/components/page-layout"
import AnimatedPageWrapper, { AnimatedSection } from "@/components/animated-page-wrapper"
import GlassmorphicCard from "@/components/glassmorphic-card"

export default function HomePage() {
  return (
    <PageLayout>
      <AnimatedPageWrapper>
        <EnhancedHero />
        
        {/* Our Teams */}
        <section className="py-20 bg-black relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <AnimatedSection className="section-heading text-center mb-12">
              <div className="section-eyebrow">Our Teams</div>
              <h2 className="text-white gradient-text">OUR TEAMS</h2>
              <div className="divider-line mx-auto bg-gradient-to-r from-cyan-400 to-purple-500" />
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.2}>
                <GlassmorphicCard className="p-6 flex items-center justify-between">
                  <div>
                    <p className="section-eyebrow">Team</p>
                    <h3 className="text-2xl font-semibold tracking-wide text-white">FORTNITE</h3>
                  </div>
                  <div className="w-40 h-24 rounded-xl overflow-hidden border border-gray-800/60 bg-black/60">
                    <div className="skeleton w-full h-full" />
                  </div>
                </GlassmorphicCard>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <GlassmorphicCard className="p-0 overflow-hidden">
                  <div className="skeleton h-40 w-full" />
                </GlassmorphicCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sponsored Merch Banner */}
        <section className="py-8 bg-black border-y border-gray-900 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="uppercase tracking-[0.25em] text-white/60 text-xs">Sponsored</span>
                <a href="/shop" className="inline-flex items-center text-white hover:text-cyan-400 transition-colors text-sm group">
                  Check out our latest merch 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-20 bg-black relative">
          <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 via-transparent to-cyan-500/5" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <AnimatedSection className="section-heading text-left mb-8">
              <div className="section-eyebrow">Latest News</div>
              <h2 className="text-white gradient-text">LATEST NEWS</h2>
              <div className="divider-line bg-gradient-to-r from-cyan-400 to-purple-500" />
            </AnimatedSection>
            
            <div className="space-y-8">
              <AnimatedSection delay={0.2}>
                <GlassmorphicCard className="p-4 block hover:border-white transition-colors">
                  <a href="/" className="flex gap-4 items-center">
                    <div className="w-32 h-20 rounded-lg overflow-hidden border border-gray-800/60 bg-black/60">
                      <div className="skeleton w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold tracking-wide">1TV official website published</h3>
                      <p className="text-white/60 text-sm group-hover:text-cyan-400 transition-colors">Read more →</p>
                    </div>
                  </a>
                </GlassmorphicCard>
              </AnimatedSection>
            </div>
            
            <AnimatedSection delay={0.4} className="mt-8">
              <a href="/news" className="btn-secondary inline-block">View All News</a>
            </AnimatedSection>
          </div>
        </section>

        <SocialMedia />
      </AnimatedPageWrapper>
    </PageLayout>
  )
}