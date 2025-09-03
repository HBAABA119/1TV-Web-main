import PageLayout from "@/components/page-layout"

export default function LiveStreamPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-heading text-left mb-8">
            <div className="section-eyebrow">Live</div>
            <h2 className="text-white">LIVE STREAM</h2>
            <div className="divider-line" />
          </div>
          <div className="card-soft p-4">
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-800/60 bg-black/60">
              <div className="skeleton w-full h-full" />
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="h-4 w-40 skeleton rounded" />
              <div className="h-4 w-24 skeleton rounded opacity-70" />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
