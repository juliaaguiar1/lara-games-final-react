import { Award, BadgeCheck, Gamepad2, MapPin } from 'lucide-react'
import AccessibilityBar from '../components/AccessibilityBar.jsx'
import StatCard from '../components/StatCard.jsx'

export default function Usuario() {
  return (
    <div className="page">
      <AccessibilityBar />
      <section className="hero compact-hero">
        <span className="eyebrow">Perfil gamificado</span>
        <h1>Área do Usuário</h1>
        <p>Controle sua jornada, acompanhe conquistas e veja seus dados de jogador.</p>
      </section>

      <section className="profile-layout">
        <article className="profile-card">
          <div className="avatar" aria-hidden="true">JG</div>
          <div>
            <h2>Julia Gamer</h2>
            <p>Jogadora nível 12 • Exploradora de jogos brasileiros</p>
            <span className="badge"><BadgeCheck size={16} /> Conta verificada</span>
          </div>
        </article>

        <div className="stats-grid profile-stats">
          <StatCard value="12" label="Nível atual" />
          <StatCard value="4.280" label="XP total" />
          <StatCard value="8" label="Conquistas" />
        </div>
      </section>

      <section className="quests-grid">
        <article className="quest-card"><Award /><h3>Caçadora de Indies</h3><p>Favoritou 3 jogos nacionais.</p></article>
        <article className="quest-card"><Gamepad2 /><h3>Primeira Jornada</h3><p>Adicionou jogos à biblioteca.</p></article>
        <article className="quest-card"><MapPin /><h3>Jogador Localizado</h3><p>Use a área Endereço do Jogador para completar o cadastro.</p></article>
      </section>
    </div>
  )
}
