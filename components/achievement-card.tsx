interface AchievementCardProps {
  title: string
  description: string
  date: string
  type: "tournament" | "milestone" | "award"
}

export default function AchievementCard({ title, description, date, type }: AchievementCardProps) {
  const getTypeColor = () => {
    switch (type) {
      case "tournament":
        return "border-yellow-500 text-yellow-500"
      case "milestone":
        return "border-blue-500 text-blue-500"
      case "award":
        return "border-green-500 text-green-500"
      default:
        return "border-white text-white"
    }
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded p-6 hover:border-white transition-colors duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`text-xs uppercase tracking-wide font-bold px-2 py-1 border rounded ${getTypeColor()}`}>
          {type}
        </div>
        <div className="text-gray-400 text-sm">{date}</div>
      </div>
      <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}
