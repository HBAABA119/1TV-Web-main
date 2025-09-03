import PageLayout from "@/components/page-layout"

export default function PlacementsPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-heading text-left mb-8">
            <div className="section-eyebrow">Results</div>
            <h2 className="text-white">PLACEMENTS</h2>
            <div className="divider-line" />
          </div>
          <div className="space-y-3">
            {[1,2,3,4,5,6,7].map((i) => (
              <div key={i} className="card-soft p-4">
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="h-4 w-10 skeleton rounded" />
                  <div className="h-4 w-3/4 skeleton rounded" />
                  <div className="h-4 w-1/2 skeleton rounded" />
                  <div className="h-4 w-20 skeleton rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
