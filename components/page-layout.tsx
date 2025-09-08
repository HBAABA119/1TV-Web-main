import type { ReactNode } from "react"
import EnhancedHeader from "./enhanced-header"
import Footer from "./footer"

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedHeader />
      <main className={`flex-1 pt-20 ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}
