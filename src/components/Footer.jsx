import BrandLogo from './BrandLogo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <BrandLogo compact />
        <p>Plataforma gamificada de valorização dos jogos brasileiros.</p>
      </div>
      <p className="footer-copy">© 2026 Lara Games — Projeto acadêmico FIAP</p>
    </footer>
  )
}
