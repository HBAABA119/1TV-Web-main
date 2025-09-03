import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-white fade-up">
            WELCOME TO 1TV
          </h1>

          <div className="w-24 h-0.5 bg-white mx-auto divider-animate" />

          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto fade-up" style={{ animationDelay: "120ms" }}>
            A professional esports organization dedicated to excellence in competitive gaming
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 fade-up" style={{ animationDelay: "220ms" }}>
            <Link href="/teams" className="btn-primary">Our Teams</Link>
            <Link href="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
