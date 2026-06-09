# Lara Games React — Versão Final

Projeto desenvolvido para a Fase 07 da jornada da Plataforma Iara/Lara Games.

A aplicação consolida funcionalidades já trabalhadas nas fases anteriores e adiciona a nova área **Endereço do Jogador**, desenvolvida em React e integrada à API pública ViaCEP.

## Funcionalidades

- Home/Loja gamificada com busca, filtros, ordenação e favoritos.
- Página Meus Jogos com biblioteca do usuário.
- Área do Usuário com nível, XP e conquistas.
- Cadastro simulado com validação.
- Suporte com formulário.
- Endereço do Jogador com API ViaCEP funcionando.
- Acessibilidade: alto contraste, fonte ampliada, skip link, textos alternativos e HTML semântico.
- Responsividade para desktop, tablet e celular.

## API utilizada

**ViaCEP**  
Endpoint usado:

```txt
https://viacep.com.br/ws/{cep}/json/
```

A área Endereço do Jogador consulta o CEP informado e retorna rua, bairro, cidade, estado e CEP.

## Tecnologias

- React
- Vite
- React Router DOM
- JavaScript
- CSS3
- LocalStorage
- ViaCEP API
- Vercel

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse:

```txt
http://localhost:5173
```

## Build para deploy

```bash
npm run build
```

## Deploy

Recomendado: Vercel.

## Autora

Júlia Aguiar  
FIAP — Projeto acadêmico
