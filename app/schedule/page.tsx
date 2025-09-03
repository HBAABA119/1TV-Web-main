import PageLayout from "@/components/page-layout"

export default function SchedulePage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-heading text-left mb-8">
            <div className="section-eyebrow">Events</div>
            <h2 className="text-white">SCHEDULE</h2>
            <div className="divider-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="card-soft p-4">
                <div className="h-4 w-1/2 skeleton rounded mb-2" />
                <div className="h-3 w-1/3 skeleton rounded opacity-70 mb-4" />
                <div className="w-full h-28 rounded-xl overflow-hidden border border-gray-800/60 bg-black/60">
                  <div className="skeleton w-full h-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
