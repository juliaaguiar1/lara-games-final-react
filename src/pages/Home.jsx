import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Gamepad2, Search, Sparkles, Trophy } from 'lucide-react'
import AccessibilityBar from '../components/AccessibilityBar.jsx'
import GameCard from '../components/GameCard.jsx'
import StatCard from '../components/StatCard.jsx'
import { games } from '../data/games.js'

export default function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [sort, setSort] = useState('rating')
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('lara-favorites')
    return stored ? JSON.parse(stored) : []
  })

  const categories = ['Todos', ...new Set(games.map((game) => game.category))]

  function toggleFavorite(id) {
    const updated = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id]
    setFavorites(updated)
    localStorage.setItem('lara-favorites', JSON.stringify(updated))
  }

  const filteredGames = useMemo(() => {
    return games
      .filter((game) => category === 'Todos' || game.category === category)
      .filter((game) => game.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sort === 'price') return a.price - b.price
        if (sort === 'xp') return b.xp - a.xp
        return b.rating - a.rating
      })
  }, [search, category, sort])

  return (
    <div className="page">
      <AccessibilityBar />

      <section className="hero hero-grid">
        <div className="hero-text">
          <span className="eyebrow"><Sparkles size={18} /> </span>
          <h1>Explore o universo gamer brasileiro em uma experiência gamificada.</h1>
          <p>
            A Lara Games conecta jogadores a títulos nacionais e desafios!
          </p>
          <div className="hero-actions">
            <a href="#loja" className="btn">Ver jogos</a>
            <Link to="/endereco-do-jogador" className="btn btn-outline">Endereço do Jogador</Link>
          </div>
        </div>

        <aside className="mission-panel" aria-label="Painel de missões da plataforma">
          <Gamepad2 size={46} />
          <h2>Missão da semana</h2>
          <p>Favorite 3 jogos brasileiros e desbloqueie 1.500 XP na sua jornada.</p>
          <div className="progress" aria-label="Progresso da missão">
            <span style={{ width: `${Math.min(favorites.length * 33, 100)}%` }}></span>
          </div>
          <strong>{favorites.length}/3 favoritos</strong>
        </aside>
      </section>

      <section className="stats-grid" aria-label="Indicadores da Lara Games">
        <StatCard value="6+" label="Jogos nacionais" />
        <StatCard value="4.6" label="Nota média" />
        <StatCard value="React" label="Projeto final" />
        <StatCard value="ViaCEP" label="API integrada" />
      </section>

      <section id="loja" className="section-header">
        <div>
          <span className="eyebrow"><Trophy size={18} /> Loja gamificada</span>
          <h2>Destaques da Lara Games</h2>
          <p>Busque, filtre, favorite e acompanhe sua jornada de XP.</p>
        </div>
      </section>

      <section className="filters" aria-label="Filtros da loja">
        <label className="search-box">
          <Search size={18} />
          <span className="sr-only">Buscar jogo</span>
          <input
            type="search"
            placeholder="Buscar jogo brasileiro..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <label>
          <span>Categoria</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>

        <label>
          <span>Ordenar</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="rating">Melhor avaliação</option>
            <option value="xp">Mais XP</option>
            <option value="price">Menor preço</option>
          </select>
        </label>
      </section>

      <section className="games-grid" aria-label="Lista de jogos">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            favorite={favorites.includes(game.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </section>
    </div>
  )
}
