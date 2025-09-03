import PageLayout from "@/components/page-layout"

export default function TeamsPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-heading text-left mb-8">
            <div className="section-eyebrow">Teams</div>
            <h2 className="text-white">TEAMS</h2>
            <div className="divider-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="card-soft p-4">
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-800/60 bg-black/60 mb-4">
                  <div className="skeleton w-full h-full" />
                </div>
                {i === 1 ? (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="section-eyebrow">Team</p>
                      <h3 className="text-white font-semibold tracking-wide text-xl">FORTNITE</h3>
                    </div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-gray-700 text-white/80">
                      Still recruiting
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="h-4 w-2/3 skeleton rounded mb-2" />
                    <div className="h-3 w-1/2 skeleton rounded opacity-60" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
