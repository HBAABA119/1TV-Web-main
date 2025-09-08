import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartProvider } from "@/contexts/cart-context"
import "./globals.css"
import EnhancedLoadingScreen from "@/components/enhanced-loading-screen"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"

export const metadata: Metadata = {
  title: "One True Vision | Elite E-Sports Organization",
  description:
    "The official home for One True Vision e-sports team merchandise, roster, and news. Founded in July 2025.",
  generator: "Next.js",
  keywords: ["esports", "gaming", "merchandise", "One True Vision", "1TV"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-gray-900 text-white`}>
        <CartProvider>
          <SmoothScrollProvider>
            <Suspense fallback={<EnhancedLoadingScreen />}>
              {children}
            </Suspense>
          </SmoothScrollProvider>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
