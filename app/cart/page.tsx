"use client"

import PageLayout from "@/components/page-layout"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    if (items.length === 0) {
      alert("Your cart is empty.")
      return
    }
    router.push("/checkout")
  }

  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider glitch-effect">CART</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-12"></div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400 mb-8">YOUR CART IS EMPTY</p>
              <button onClick={() => router.push("/shop")} className="btn-primary">
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-12">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-900 border border-gray-800 p-6 rounded">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-2">{item.name}</h2>
                        <p className="text-gray-400">{item.price}</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 bg-black border border-gray-700 rounded px-4 py-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-white hover:text-gray-300 font-bold text-lg w-6 h-6 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-white font-bold min-w-[2rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-white hover:text-gray-300 font-bold text-lg w-6 h-6 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 font-bold text-sm uppercase tracking-wide px-4 py-2 border border-red-400 hover:border-red-300 rounded transition-colors"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-800 pt-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">TOTAL</p>
                    <p className="text-4xl font-bold text-white">${getTotalPrice().toFixed(2)}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => router.push("/shop")} className="btn-secondary">
                      CONTINUE SHOPPING
                    </button>
                    <button onClick={handleCheckout} className="btn-primary">
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
