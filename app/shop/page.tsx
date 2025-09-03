import PageLayout from "@/components/page-layout"
// Cart functionality removed per request
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop | One True Vision",
  description:
    "Browse and purchase official One True Vision merchandise including apparel, accessories, and gaming gear.",
}

const products = [
  {
    id: "jersey-1",
    name: "1TV JERSEY",
    price: "$49.99",
    description: "Official team competition jersey",
  },
  {
    id: "hoodie-1",
    name: "1TV HOODIE",
    price: "$69.99",
    description: "Premium team hoodie",
  },
  {
    id: "cap-1",
    name: "1TV CAP",
    price: "$24.99",
    description: "Signature team cap",
  },
  {
    id: "mousepad-1",
    name: "1TV MOUSEPAD",
    price: "$19.99",
    description: "Professional gaming mousepad",
  },
  {
    id: "tshirt-1",
    name: "1TV T-SHIRT",
    price: "$29.99",
    description: "Classic team t-shirt",
  },
  {
    id: "keychain-1",
    name: "1TV KEYCHAIN",
    price: "$9.99",
    description: "Team logo keychain",
  },
]

const tweaks = [
  { id: "shotgun-pack", name: "SHOTGUN PACK", href: "https://payhip.com/b/4sYeR" },
  { id: "bloom-reducer", name: "BLOOM REDUCER", href: "https://payhip.com/b/bjBa1" },
  { id: "controller-zero-delay", name: "CONTROLLER ZERO DELAY", href: "https://payhip.com/b/GHjaE" },
  { id: "keyboard-zero-delay", name: "KEYBOARD ZERO DELAY", href: "https://payhip.com/b/tfTgw" },
  { id: "zero-delay", name: "ZERO DELAY", href: "https://payhip.com/b/zQR1c" },
  { id: "ping-optimizer", name: "PING OPTIMIZER", href: "https://payhip.com/b/iOfS7" },
  { id: "full-optimization", name: "FULL OPTIMIZATION", href: "https://payhip.com/b/aUYTL" },
  { id: "premium-full-optimization", name: "PREMIUM FULL OPTIMIZATION", href: "https://payhip.com/b/3F9lg" },
  { id: "zinq-optimization", name: "ZINQ'S OPTIMIZATION", href: "https://payhip.com/b/ZRmiI" },
  { id: "fps-boost", name: "FPS BOOST", href: "https://payhip.com/b/fkRpu" },
  { id: "zero-delay-plus", name: "ZERO DELAY PLUS", href: "https://payhip.com/b/601hB" },
]

export default function ShopPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-heading text-left mb-8">
            <div className="section-eyebrow">Shop</div>
            <h2 className="text-white">SHOP</h2>
            <div className="divider-line" />
          </div>
        </div>
      </section>

      <section className="py-6 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card-soft p-4 group">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-800/60 bg-black/60 flex items-center justify-center mb-4">
                  <div className="skeleton w-full h-full" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold tracking-wide">{product.name}</h3>
                    <p className="text-white/60 text-sm">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tweaks section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-heading text-left mb-8">
            <div className="section-eyebrow">Tweaks</div>
            <h2 className="text-white">TWEAKS</h2>
            <div className="divider-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tweaks.map((item) => (
              <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="card-soft p-4 group hover:border-white transition-colors">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-800/60 bg-black/60 flex items-center justify-center mb-4">
                  <div className="skeleton w-full h-full" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold tracking-wide">{item.name}</h3>
                  <span className="text-xs text-white/60">Payhip →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
