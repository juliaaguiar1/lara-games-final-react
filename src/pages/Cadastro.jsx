import { useState } from 'react'
import AccessibilityBar from '../components/AccessibilityBar.jsx'

export default function Cadastro() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const nome = form.get('nome')?.trim()
    const email = form.get('email')?.trim()
    const senha = form.get('senha')?.trim()

    if (!nome || !email || !senha) {
      setMessage('Preencha todos os campos obrigatórios.')
      return
    }

    if (!email.includes('@')) {
      setMessage('Digite um e-mail válido.')
      return
    }

    if (senha.length < 6) {
      setMessage('A senha precisa ter no mínimo 6 caracteres.')
      return
    }

    setMessage('Cadastro simulado realizado com sucesso. Bem-vinda à Lara Games!')
    event.currentTarget.reset()
  }

  return (
    <div className="page">
      <AccessibilityBar />
      <section className="hero compact-hero">
        <span className="eyebrow">Novo jogador</span>
        <h1>Criar Conta</h1>
        <p>Entre para a comunidade Lara Games e acompanhe sua evolução gamer.</p>
      </section>

      <form className="form-card" onSubmit={handleSubmit} aria-label="Formulário de cadastro">
        <label>Nome completo<input name="nome" type="text" autoComplete="name" required /></label>
        <label>E-mail<input name="email" type="email" autoComplete="email" required /></label>
        <label>Senha<input name="senha" type="password" minLength="6" required aria-describedby="senha-help" /></label>
        <small id="senha-help">A senha deve possuir pelo menos 6 caracteres.</small>
        <button className="btn" type="submit">Cadastrar</button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
    </div>
  )
}
