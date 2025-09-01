"use client"

import type React from "react"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"
import PageLayout from "@/components/page-layout"

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
    country: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Clear cart after successful checkout
      clearCart()
      alert("Order placed successfully! Thank you for your purchase.")
      router.push("/")
    } catch (error) {
      alert("Error processing payment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageLayout>
      <section className="py-10 px-5">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10 text-balance">Checkout</h1>

          {items.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-400 mb-4">Your cart is empty.</p>
              <a href="/shop" className="btn-white-black">
                Continue Shopping
              </a>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="bg-gray-800 p-4 rounded-lg space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>${(Number.parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-600 pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-green-400">${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded border-none bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded border-none bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Shipping Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded border-none bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded border-none bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <input
                  type="text"
                  name="postal"
                  placeholder="Postal Code"
                  value={formData.postal}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded border-none bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded border-none bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white px-8 py-3 border-none rounded cursor-pointer hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg font-bold"
                >
                  {isSubmitting ? "Processing..." : "Confirm & Pay"}
                </button>
              </form>

              <p className="text-center text-gray-400 text-sm mt-4">
                * This is a demo checkout. No actual payment will be processed.
              </p>
            </>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
