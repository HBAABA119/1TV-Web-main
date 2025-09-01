interface Match {
  team1: string
  team2: string
  score1?: number
  score2?: number
  winner?: string
}

interface TournamentBracketProps {
  matches: Match[]
  title: string
}

export default function TournamentBracket({ matches, title }: TournamentBracketProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded p-6">
      <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-6 text-center">{title}</h3>
      <div className="space-y-4">
        {matches.map((match, index) => (
          <div key={index} className="bg-black border border-gray-700 rounded p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className={`text-sm font-bold ${match.winner === match.team1 ? "text-white" : "text-gray-400"}`}>
                  {match.team1}
                </div>
                <div className={`text-sm font-bold ${match.winner === match.team2 ? "text-white" : "text-gray-400"}`}>
                  {match.team2}
                </div>
              </div>
              {match.score1 !== undefined && match.score2 !== undefined && (
                <div className="text-right">
                  <div className={`text-sm font-bold ${match.winner === match.team1 ? "text-white" : "text-gray-400"}`}>
                    {match.score1}
                  </div>
                  <div className={`text-sm font-bold ${match.winner === match.team2 ? "text-white" : "text-gray-400"}`}>
                    {match.score2}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
