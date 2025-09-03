import PageLayout from "@/components/page-layout"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | One True Vision",
  description:
    "Learn about One True Vision (1TV), an elite e-sports organization founded in July 2025. Our mission is to dominate competitive gaming and inspire the next generation.",
}

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider glitch-effect">ABOUT</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-12"></div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wide">ONE TRUE VISION</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Founded in July 2025, <span className="text-white font-semibold">One True Vision (1TV)</span>{" "}
                  represents the pinnacle of competitive esports excellence.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We are more than a team—we are a movement. United by strategy, driven by excellence, and committed to
                  dominating the competitive gaming landscape.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  From championship tournaments to community engagement, we continuously push the boundaries of what's
                  possible in esports.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2025</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">FOUNDED</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">∞</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">POTENTIAL</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">VISION</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/1TV_LOGO.png"
                  alt="One True Vision (1TV) Logo"
                  width={400}
                  height={300}
                  className="w-full max-w-[400px] h-auto rounded border border-gray-800 object-contain bg-black"
                />
                <div className="absolute inset-0 bg-black/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
