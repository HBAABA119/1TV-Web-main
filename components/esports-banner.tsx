interface EsportsBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function EsportsBanner({ title, subtitle, backgroundImage }: EsportsBannerProps) {
  return (
    <div
      className="relative min-h-[60vh] flex items-center justify-center bg-black"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="text-center space-y-6 px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider glitch-effect">{title}</h1>
        {subtitle && (
          <>
            <div className="w-24 h-0.5 bg-white mx-auto"></div>
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">{subtitle}</p>
          </>
        )}
      </div>
    </div>
  )
}
