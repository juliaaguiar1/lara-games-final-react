import { Heart, Star, Trophy } from 'lucide-react'

export default function GameCard({ game, favorite, onToggleFavorite, actionLabel = 'Comprar' }) {
  return (
    <article className="game-card">
      <div className="game-cover-wrap">
        <img src={game.image} alt={`Capa do jogo ${game.title}`} className="game-cover" />
        <span className="game-tag">{game.tag}</span>
      </div>
      <div className="game-content">
        <div className="game-title-row">
          <h3>{game.title}</h3>
          <button
            className={favorite ? 'favorite active' : 'favorite'}
            onClick={() => onToggleFavorite?.(game.id)}
            aria-label={favorite ? `Remover ${game.title} dos favoritos` : `Adicionar ${game.title} aos favoritos`}
          >
            <Heart size={18} fill="currentColor" />
          </button>
        </div>
        <p>{game.description}</p>
        <div className="game-meta" aria-label="Dados do jogo">
          <span><Star size={16} /> {game.rating}</span>
          <span><Trophy size={16} /> {game.xp} XP</span>
          <span>{game.category}</span>
        </div>
        <div className="game-footer">
          <strong>R$ {game.price.toFixed(2).replace('.', ',')}</strong>
          <a href={game.link} target="_blank" rel="noreferrer" className="btn btn-small">
            {actionLabel}
          </a>
        </div>
      </div>
    </article>
  )
}
