export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">ONE TRUE VISION</h1>
        <div className="loading-spinner mx-auto"></div>
        <p className="text-gray-400 text-sm uppercase tracking-wide">Loading...</p>
      </div>
    </div>
  )
}
