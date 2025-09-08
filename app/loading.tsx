export default function Loading() {
  return (
    <div className="loader-overlay" role="status" aria-live="polite" aria-label="Loading">
      <div>
        <div className="cube" aria-hidden="true">
          <div className="cube__face cube__face--front" />
          <div className="cube__face cube__face--back" />
          <div className="cube__face cube__face--right" />
          <div className="cube__face cube__face--left" />
          <div className="cube__face cube__face--top" />
          <div className="cube__face cube__face--bottom" />
        </div>
        <div className="loader-caption text-center">One True Vision</div>
      </div>
    </div>
  )
}
