import Image from "next/image"
import PageLayout from "@/components/page-layout"
import PlayerCard from "@/components/player-card"

const fortniteTeam = {
  name: "Fortnite",
  image: "/teams/fortnite.png",
  description: "Our elite Fortnite squad competing at the highest level.",
  achievements: ["2x FNCS Grand Finals", "200K+ PR", "5k+ Earnings"],
  players: [
    {
      name: "Coming Soon",
      role: "Player",
      image: "",
      game: "Fortnite",
      achievements: ["Coming Soon", "Coming Soon", "Coming Soon"],
      socialLinks: {
        twitter: "#",
        twitch: "#",
      },
    },
    {
      name: "Coming Soon",
      role: "Player",
      image: "",
      game: "Fortnite",
      achievements: ["Coming Soon", "Coming Soon", "Coming Soon"],
      socialLinks: {
        twitter: "#",
      },
    },
    {
      name: "Coming Soon",
      role: "Player",
      image: "",
      game: "Fortnite",
      achievements: ["Coming Soon", "Coming Soon", "Coming Soon"],
      socialLinks: {
        twitter: "#",
      },
    },
    {
      name: "Coming Soon",
      role: "Player",
      image: "",
      game: "Fortnite",
      achievements: ["Coming Soon", "Coming Soon", "Coming Soon"],
      socialLinks: {
        twitter: "#",
      },
    },
  ],
}

export default function TeamsPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-heading text-left mb-8">
            <div className="section-eyebrow">Teams</div>
            <h2 className="text-white">TEAMS</h2>
            <div className="divider-line" />
          </div>

          <div className="card-soft p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden group border border-white/10 bg-black/40">
                <Image src={fortniteTeam.image} alt={fortniteTeam.name} fill className="object-cover object-[50%_15%] w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold gradient-text">{fortniteTeam.name}</h2>
                <p className="text-white/80 text-lg">{fortniteTeam.description}</p>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Team Achievements</h3>
                  <ul className="space-y-2">
                    {fortniteTeam.achievements.map((achievement) => (
                      <li key={achievement} className="text-white/70 flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Meet the Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fortniteTeam.players.map((player) => (
                  <PlayerCard
                    key={player.name}
                    name={player.name}
                    role={player.role}
                    image={player.image}
                    game={player.game}
                    achievements={player.achievements}
                    socialLinks={player.socialLinks}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
