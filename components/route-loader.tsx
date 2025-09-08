export default function RouteLoader() {
  return (
    <div className="loader-overlay" role="status" aria-live="polite" aria-label="Loading">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="cube" aria-hidden="true">
          <div className="cube__face cube__face--front" />
          <div className="cube__face cube__face--back" />
          <div className="cube__face cube__face--right" />
          <div className="cube__face cube__face--left" />
          <div className="cube__face cube__face--top" />
          <div className="cube__face cube__face--bottom" />
        </div>
        <div className="loader-caption">One True Vision</div>
      </div>
    </div>
  )
}
