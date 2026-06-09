import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import BrandLogo from './BrandLogo.jsx'

const links = [
  { to: '/', label: 'Loja' },
  { to: '/meus-jogos', label: 'Meus Jogos' },
  { to: '/usuario', label: 'Usuário' },
  { to: '/suporte', label: 'Suporte' },
  { to: '/endereco-do-jogador', label: 'Endereço do Jogador' },
  { to: '/cadastro', label: 'Criar Conta' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="topbar">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <nav className="navbar" aria-label="Menu principal">
        <Link to="/" className="brand-link" onClick={() => setOpen(false)}>
          <BrandLogo />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul id="main-menu" className={open ? 'nav-list nav-list-open' : 'nav-list'}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
