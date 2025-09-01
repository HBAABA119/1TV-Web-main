import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-white glitch-effect">ONE TRUE VISION</h1>

          <div className="w-24 h-0.5 bg-white mx-auto"></div>

          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
            ESPORTS EXCELLENCE
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/shop" className="btn-primary">
              SHOP NOW
            </Link>
            <Link href="/team" className="btn-secondary">
              VIEW TEAM
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
