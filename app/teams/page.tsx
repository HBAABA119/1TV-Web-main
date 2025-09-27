import Image from "next/image"
import PageLayout from "@/components/page-layout"
import PlayerCard from "@/components/player-card"
import GlassmorphicCard from "@/components/glassmorphic-card"

const teams = [
  {
    name: "Fortnite",
    image: "/images/fortnite-team.jpg",
    description: "Our elite Fortnite squad competing at the highest level in FNCS and Championship events.",
    achievements: ["2x FNCS Grand Finals", "200K+ PR", "$50,000+ Earnings"],
    players: [
      {
        name: "ProPlayer1",
        role: "In-Game Leader",
        image: "/images/player1.jpg",
        game: "Fortnite",
        achievements: ["Top 1% Global", "5x Tournament Wins", "10K+ Hours"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        name: "ProPlayer2",
        role: "Support",
        image: "/images/player2.jpg",
        game: "Fortnite",
        achievements: ["Top 5% Global", "3x Tournament Wins", "8K+ Hours"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        name: "ProPlayer3",
        role: "Entry Fragger",
        image: "/images/player3.jpg",
        game: "Fortnite",
        achievements: ["Top 3% Global", "4x Tournament Wins", "12K+ Hours"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        name: "Coach1",
        role: "Strategist",
        image: "/images/coach1.jpg",
        game: "Fortnite",
        achievements: ["5 Years Coaching", "10x Tournament Wins", "Former Pro"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
    ],
  },
  {
    name: "Valorant",
    image: "/images/valorant-team.jpg",
    description: "Professional Valorant team competing in VCT and other premier tournaments.",
    achievements: ["VCT Challengers", "Regional Champions", "$75,000+ Earnings"],
    players: [
      {
        name: "ValorantPro1",
        role: "Duelist",
        image: "/images/player4.jpg",
        game: "Valorant",
        achievements: ["Top 2% Global", "VCT Participant", "15K+ Hours"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        name: "ValorantPro2",
        role: "Controller",
        image: "/images/player5.jpg",
        game: "Valorant",
        achievements: ["Top 4% Global", "VCT Participant", "11K+ Hours"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        name: "ValorantPro3",
        role: "Initiator",
        image: "/images/player6.jpg",
        game: "Valorant",
        achievements: ["Top 3% Global", "VCT Participant", "13K+ Hours"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        name: "ValorantPro4",
        role: "Sentinel",
        image: "/images/player7.jpg",
        game: "Valorant",
        achievements: ["Top 5% Global", "VCT Participant", "9K+ Hours"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        name: "Coach2",
        role: "Tactician",
        image: "/images/coach2.jpg",
        game: "Valorant",
        achievements: ["3 Years Coaching", "Former Pro", "Strategic Genius"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
    ],
  },
  {
    name: "Apex Legends",
    image: "/images/apex-team.jpg",
    description: "Competitive Apex Legends squad dominating the arena circuit.",
    achievements: ["ALGS Participant", "Regional Finals", "$30,000+ Earnings"],
    players: [
      {
        name: "ApexPro1",
        role: "Assault",
        image: "/images/player8.jpg",
        game: "Apex Legends",
        achievements: ["Top 10% Global", "ALGS Participant", "7K+ Hours"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        name: "ApexPro2",
        role: "Support",
        image: "/images/player9.jpg",
        game: "Apex Legends",
        achievements: ["Top 8% Global", "ALGS Participant", "6K+ Hours"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        name: "ApexPro3",
        role: "Recon",
        image: "/images/player10.jpg",
        game: "Apex Legends",
        achievements: ["Top 6% Global", "ALGS Participant", "9K+ Hours"],
        socialLinks: {
          twitter: "#",
          twitch: "#",
        },
      },
    ],
  },
]

export default function TeamsPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="section-heading text-left mb-12">
            <div className="section-eyebrow">Teams</div>
            <h2 className="text-white gradient-text">OUR TEAMS</h2>
            <div className="divider-line bg-gradient-to-r from-cyan-400 to-purple-500" />
          </div>

          <div className="space-y-20">
            {teams.map((team, index) => (
              <GlassmorphicCard key={team.name} className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden group border border-white/10 bg-black/40">
                    <div className="bg-gray-800 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                      <span className="text-white/30 text-4xl">{team.name}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold gradient-text">{team.name}</h2>
                    <p className="text-white/80 text-lg">{team.description}</p>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">Team Achievements</h3>
                      <ul className="space-y-2">
                        {team.achievements.map((achievement, i) => (
                          <li key={i} className="text-white/70 flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <a href={`/teams/${team.name.toLowerCase()}`} className="btn-secondary">
                        View Full Roster
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Meet the Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {team.players.map((player) => (
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
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}