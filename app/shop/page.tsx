import PageLayout from "@/components/page-layout"
import AddToCartButton from "@/components/add-to-cart-button"
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

export default function ShopPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider glitch-effect">SHOP</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-12"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">OFFICIAL ONE TRUE VISION MERCHANDISE</p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="w-full h-64 bg-gray-900 border border-gray-800 rounded mb-6 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                  <span className="text-gray-500 text-sm uppercase tracking-wide">PRODUCT IMAGE</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white uppercase tracking-wide">{product.name}</h2>
                  <p className="text-gray-400 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                  </div>
                  <AddToCartButton product={product} className="w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
