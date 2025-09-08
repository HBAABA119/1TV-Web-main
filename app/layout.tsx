import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartProvider } from "@/contexts/cart-context"
import "./globals.css"
import RouteLoader from "@/components/route-loader"
import ParallaxProvider from "@/components/parallax-provider"
import AnimateOnScroll from "@/components/animate-on-scroll"
import { ThemeProvider } from "@/components/theme-provider"
import FuturisticBackground from "@/components/futuristic-background"
import ScrollProgress from "@/components/scroll-progress"
import CommandPalette from "@/components/command-palette"

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-gray-900 text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <FuturisticBackground />
          <ScrollProgress />
          <CartProvider>
            <Suspense fallback={null}>
              <ParallaxProvider />
            </Suspense>
            <AnimateOnScroll />
            <Suspense fallback={<RouteLoader />}>{children}</Suspense>
          </CartProvider>
          <CommandPalette />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
