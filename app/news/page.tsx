import PageLayout from "@/components/page-layout"

export default function NewsPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-heading text-left mb-8">
            <div className="section-eyebrow">News</div>
            <h2 className="text-white">NEWS</h2>
            <div className="divider-line" />
          </div>
          <div className="space-y-4">
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
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="card-soft p-4">
                <div className="flex gap-4 items-center">
                  <div className="w-32 h-20 rounded-lg overflow-hidden border border-gray-800/60 bg-black/60">
                    <div className="skeleton w-full h-full" />
                  </div>
                  <div className="flex-1">
                    <div className="h-4 w-2/3 skeleton rounded mb-2" />
                    <div className="h-3 w-1/2 skeleton rounded opacity-70" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
