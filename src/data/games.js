export const games = [
  {
    id: 1,
    title: 'Horizon Chase Turbo',
    category: 'Corrida',
    price: 62.90,
    rating: 4.8,
    studio: 'Aquiris',
    xp: 850,
    image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/389140/header.jpg',
    description: 'Corrida arcade brasileira com estética retrô, trilha sonora marcante e ritmo competitivo.',
    link: 'https://store.steampowered.com/app/389140/Horizon_Chase_Turbo/?l=brazilian',
    tag: 'Clássico nacional'
  },
  {
    id: 2,
    title: 'Chroma Squad',
    category: 'Estratégia',
    price: 49.90,
    rating: 4.6,
    studio: 'Behold Studios',
    xp: 710,
    image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/251130/header.jpg',
    description: 'RPG tático em que o jogador administra um estúdio de heróis inspirado em super sentai.',
    link: 'https://store.steampowered.com/app/251130/Chroma_Squad/?l=brazilian',
    tag: 'Tático'
  },
  {
    id: 3,
    title: 'Dandara',
    category: 'Aventura',
    price: 85.00,
    rating: 4.9,
    studio: 'Long Hat House',
    xp: 940,
    image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/612390/header.jpg',
    description: 'Metroidvania inspirado em Dandara dos Palmares, com movimentação única e ambientação poética.',
    link: 'https://store.steampowered.com/app/612390/Dandara/?l=brazilian',
    tag: 'Premiado'
  },
  {
    id: 4,
    title: 'Blazing Chrome',
    category: 'Ação',
    price: 46.99,
    rating: 4.7,
    studio: 'JoyMasher',
    xp: 760,
    image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/609110/header.jpg',
    description: 'Ação frenética em pixel art, inspirada em clássicos run and gun dos anos 90.',
    link: 'https://store.steampowered.com/app/609110/Blazing_Chrome/?l=brazilian',
    tag: 'Retro shooter'
  },
  {
    id: 5,
    title: 'Toren',
    category: 'Aventura',
    price: 27.99,
    rating: 4.1,
    studio: 'Swordtales',
    xp: 520,
    image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/320820/header.jpg',
    description: 'Uma jornada contemplativa e simbólica sobre crescimento, coragem e descoberta.',
    link: 'https://store.steampowered.com/app/320820/Toren/?l=brazilian',
    tag: 'Narrativo'
  },
  {
    id: 6,
    title: 'No Place for Bravery',
    category: 'RPG',
    price: 59.99,
    rating: 4.5,
    studio: 'Glitch Factory',
    xp: 690,
    image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1039100/header.jpg',
    description: 'RPG de ação com combate intenso, pixel art detalhada e narrativa madura.',
    link: 'https://store.steampowered.com/app/1039100/No_Place_for_Bravery/?l=brazilian',
    tag: 'RPG de ação'
  }
]

export const libraryGames = games.filter((game) => [4, 5, 6].includes(game.id))
