import { useState } from 'react'
import { Loader2, MapPin, ShieldCheck, Truck } from 'lucide-react'
import AccessibilityBar from '../components/AccessibilityBar.jsx'

export default function EnderecoJogador() {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState(null)
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  function formatCep(value) {
    return value.replace(/\D/g, '').slice(0, 8)
  }

  async function buscarEndereco(event) {
    event.preventDefault()
    const cepLimpo = formatCep(cep)
    setEndereco(null)
    setErro('')

    if (cepLimpo.length !== 8) {
      setErro('Digite um CEP válido com 8 números.')
      return
    }

    try {
      setLoading(true)
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      const data = await response.json()

      if (data.erro) {
        setErro('CEP não encontrado. Confira os números e tente novamente.')
        return
      }

      setEndereco(data)
    } catch {
      setErro('Não foi possível consultar a API ViaCEP neste momento.')
    } finally {
      setLoading(false)
    }
  }

  function limparConsulta() {
    setCep('')
    setEndereco(null)
    setErro('')
  }

  return (
    <div className="page">
      <AccessibilityBar />
      <section className="hero address-hero">
        <div>
          <span className="eyebrow"><MapPin size={18} /> Área React + API real</span>
          <h1>Endereço do Jogador</h1>
          <p>
            Consulte automaticamente seu endereço para cadastro, eventos, brindes e futuras
            funcionalidades logísticas da plataforma Lara Games.
          </p>
        </div>
        <div className="api-card" aria-label="Resumo da API utilizada">
          <ShieldCheck size={38} />
          <h2>API ViaCEP</h2>
          <p>Consulta pública de CEP com retorno de logradouro, bairro, cidade e UF.</p>
        </div>
      </section>

      <section className="address-layout">
        <form className="form-card address-form" onSubmit={buscarEndereco} aria-label="Consulta de endereço por CEP">
          <label htmlFor="cep">Digite o CEP</label>
          <input
            id="cep"
            type="text"
            inputMode="numeric"
            placeholder="Ex: 01310100"
            maxLength="8"
            value={cep}
            onChange={(e) => setCep(formatCep(e.target.value))}
            aria-describedby="cep-help"
          />
          <small id="cep-help">Use apenas números. Exemplo para teste: 01310100.</small>
          <button className="btn" type="submit" disabled={loading}>
            {loading ? <><Loader2 className="spin" size={18} /> Buscando...</> : 'Buscar endereço'}
          </button>
          {erro && <p className="error-message" role="alert">{erro}</p>}
        </form>

        <article className="result-card" aria-live="polite">
          {!endereco ? (
            <div className="empty-state">
              <Truck size={48} />
              <h2>Aguardando consulta</h2>
              <p>O endereço do jogador aparecerá aqui após a busca na API.</p>
            </div>
          ) : (
            <>
              <span className="eyebrow">Resultado encontrado</span>
              <h2>Dados do endereço</h2>
              <dl className="address-data">
                <div><dt>CEP</dt><dd>{endereco.cep}</dd></div>
                <div><dt>Rua</dt><dd>{endereco.logradouro || 'Não informado'}</dd></div>
                <div><dt>Bairro</dt><dd>{endereco.bairro || 'Não informado'}</dd></div>
                <div><dt>Cidade</dt><dd>{endereco.localidade}</dd></div>
                <div><dt>Estado</dt><dd>{endereco.uf}</dd></div>
              </dl>
              <button className="btn btn-outline" onClick={limparConsulta}>Nova consulta</button>
            </>
          )}
        </article>
      </section>
    </div>
  )
}
