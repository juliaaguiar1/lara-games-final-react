import AccessibilityBar from '../components/AccessibilityBar.jsx'
import GameCard from '../components/GameCard.jsx'
import StatCard from '../components/StatCard.jsx'
import { libraryGames } from '../data/games.js'

export default function MeusJogos() {
  const totalXp = libraryGames.reduce((acc, game) => acc + game.xp, 0)

  return (
    <div className="page">
      <AccessibilityBar />
      <section className="hero compact-hero">
        <span className="eyebrow">Biblioteca do jogador</span>
        <h1>Meus Jogos</h1>
        <p>Visualize seus títulos adquiridos, acompanhe XP e retorne rapidamente às páginas oficiais dos jogos.</p>
      </section>

      <section className="stats-grid" aria-label="Resumo da biblioteca">
        <StatCard value={libraryGames.length} label="Jogos na biblioteca" />
        <StatCard value={totalXp} label="XP acumulado" />
        <StatCard value="3" label="Badges ativos" />
      </section>

      <section className="games-grid">
        {libraryGames.map((game) => (
          <GameCard key={game.id} game={game} favorite actionLabel="Jogar Agora" />
        ))}
      </section>
    </div>
  )
}
