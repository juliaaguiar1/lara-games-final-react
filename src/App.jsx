import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import MeusJogos from './pages/MeusJogos.jsx'
import Usuario from './pages/Usuario.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Suporte from './pages/Suporte.jsx'
import EnderecoJogador from './pages/EnderecoJogador.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="conteudo" className="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meus-jogos" element={<MeusJogos />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/endereco-do-jogador" element={<EnderecoJogador />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
