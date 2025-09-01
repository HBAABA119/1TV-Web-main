import PageLayout from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | One True Vision",
  description: "Meet the talented players and staff that make up the One True Vision e-sports organization.",
}

export default function TeamPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider glitch-effect">ROSTER</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-12"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">THE ELITE PROFESSIONALS DRIVING OUR SUCCESS</p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="border-l-4 border-white pl-6">
                <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-6">LEADERSHIP</h2>
                <div className="space-y-4">
                  <div className="group">
                    <div className="text-white font-semibold">TEAM OWNER</div>
                    <div className="text-gray-400 text-sm">Strategic Vision</div>
                  </div>
                  <div className="group">
                    <div className="text-white font-semibold">GENERAL MANAGER</div>
                    <div className="text-gray-400 text-sm">Operations</div>
                  </div>
                  <div className="group">
                    <div className="text-white font-semibold">HEAD COACH</div>
                    <div className="text-gray-400 text-sm">Tactical Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-white pl-6">
                <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-6">PLAYERS</h2>
                <div className="space-y-4">
                  <div className="group">
                    <div className="text-white font-semibold">PLAYER ONE</div>
                    <div className="text-gray-400 text-sm">Entry Fragger</div>
                  </div>
                  <div className="group">
                    <div className="text-white font-semibold">PLAYER TWO</div>
                    <div className="text-gray-400 text-sm">Support</div>
                  </div>
                  <div className="group">
                    <div className="text-white font-semibold">PLAYER THREE</div>
                    <div className="text-gray-400 text-sm">IGL</div>
                  </div>
                  <div className="group">
                    <div className="text-white font-semibold">PLAYER FOUR</div>
                    <div className="text-gray-400 text-sm">AWPer</div>
                  </div>
                  <div className="group">
                    <div className="text-white font-semibold">PLAYER FIVE</div>
                    <div className="text-gray-400 text-sm">Rifler</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-white pl-6">
                <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-6">SUPPORT</h2>
                <div className="space-y-4">
                  <div className="group">
                    <div className="text-white font-semibold">ANALYST</div>
                    <div className="text-gray-400 text-sm">Data & Strategy</div>
                  </div>
                  <div className="group">
                    <div className="text-white font-semibold">CONTENT CREATOR</div>
                    <div className="text-gray-400 text-sm">Media Production</div>
                  </div>
                  <div className="group">
                    <div className="text-white font-semibold">SOCIAL MEDIA</div>
                    <div className="text-gray-400 text-sm">Community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
