import Hero from "@/components/hero"
import SocialMedia from "@/components/social-media"
import PageLayout from "@/components/page-layout"

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">COMPETE</h3>
              <p className="text-gray-400">Professional esports competition at the highest level</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">DOMINATE</h3>
              <p className="text-gray-400">Strategic gameplay and tactical excellence</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">VICTORY</h3>
              <p className="text-gray-400">Achieving greatness through dedication and skill</p>
            </div>
          </div>
        </div>
      </section>
      <SocialMedia />
    </PageLayout>
  )
}
