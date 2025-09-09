import type { ReactNode } from "react"
import EnhancedHeader from "./enhanced-header"
import Footer from "./footer"
import AnimatedPageWrapper from "./animated-page-wrapper"
import AnimateOnScroll from "./animate-on-scroll"

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedHeader />
      <AnimateOnScroll />
      <main className={`flex-1 pt-20 ${className}`}>
        <AnimatedPageWrapper>
          {children}
        </AnimatedPageWrapper>
      </main>
      <Footer />
    </div>
  )
}
