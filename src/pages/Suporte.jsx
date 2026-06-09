import { useState } from 'react'
import { Headphones, Mail, MessageCircle } from 'lucide-react'
import AccessibilityBar from '../components/AccessibilityBar.jsx'

export default function Suporte() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Mensagem enviada com sucesso. A equipe Lara Games responderá em breve.')
    event.currentTarget.reset()
  }

  return (
    <div className="page">
      <AccessibilityBar />
      <section className="hero compact-hero">
        <span className="eyebrow">Central de ajuda</span>
        <h1>Suporte Lara Games</h1>
        <p>Abra chamados, tire dúvidas e acompanhe melhorias da plataforma.</p>
      </section>

      <section className="support-grid">
        <article className="quest-card"><Headphones /><h3>Atendimento</h3><p>Suporte para conta, jogos e cadastro.</p></article>
        <article className="quest-card"><Mail /><h3>Contato</h3><p>Resposta simulada para fins acadêmicos.</p></article>
        <article className="quest-card"><MessageCircle /><h3>Comunidade</h3><p>Dúvidas frequentes e sugestões de jogadores.</p></article>
      </section>

      <form className="form-card" onSubmit={handleSubmit} aria-label="Formulário de suporte">
        <label>Nome<input type="text" required /></label>
        <label>E-mail<input type="email" required /></label>
        <label>Mensagem<textarea rows="5" required></textarea></label>
        <button className="btn" type="submit">Enviar mensagem</button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
    </div>
  )
}
