"use client"

import type React from "react"

import PageLayout from "@/components/page-layout"
import { useState } from "react"

export default function ContactPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      // Simulate API call - replace with actual email service
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setMessage("MESSAGE SENT SUCCESSFULLY")
      setEmail("")
    } catch (error) {
      setMessage("ERROR SENDING MESSAGE. PLEASE TRY AGAIN.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider glitch-effect">CONTACT</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-12"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">GET IN TOUCH WITH ONE TRUE VISION</p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gray-900 border border-gray-800 rounded p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white uppercase tracking-wide mb-3">EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  placeholder="ENTER YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 bg-black border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors uppercase tracking-wide"
                />
              </div>

              <button type="submit" disabled={isSubmitting || !email} className="w-full btn-primary">
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>

            {message && (
              <div className="mt-6 p-4 bg-black border border-gray-700 rounded text-center">
                <p
                  className={`font-bold text-sm uppercase tracking-wide ${
                    message.includes("ERROR") ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {message}
                </p>
              </div>
            )}
          </div>

          <div className="text-center mt-12 p-6 bg-gray-900 border border-gray-800 rounded">
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">BUSINESS INQUIRIES</p>
            <p className="text-white font-bold">BUSINESS.ONETRUEVISION@GMAIL.COM</p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
