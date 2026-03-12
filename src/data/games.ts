export interface Game {
  id: string
  name: string
  description: string
  players: string
  duration: string
  category: 'board-game' | 'tcg' | 'strategy' | 'party'
  complexity: 'Fácil' | 'Médio' | 'Difícil'
  image: string
  featured?: boolean
}

export const games: Game[] = [
  {
    id: 'catan',
    name: 'Catan',
    description: 'Coloniza a ilha, negoceia recursos e constrói a civilização mais próspera.',
    players: '3-4',
    duration: '60-120 min',
    category: 'strategy',
    complexity: 'Médio',
    image: '/images/games/catan.jpg',
    featured: true,
  },
  {
    id: 'carcassonne',
    name: 'Carcassonne',
    description: 'Coloca peças de terreno e posiciona os teus seguidores para dominar a paisagem medieval.',
    players: '2-5',
    duration: '30-45 min',
    category: 'strategy',
    complexity: 'Fácil',
    image: '/images/games/carcassonne.jpg',
    featured: true,
  },
  {
    id: 'ticket-to-ride',
    name: 'Ticket to Ride',
    description: 'Constrói rotas ferroviárias pela Europa e completa os teus destinos secretos.',
    players: '2-5',
    duration: '30-60 min',
    category: 'board-game',
    complexity: 'Fácil',
    image: '/images/games/ticket-to-ride.jpg',
    featured: true,
  },
  {
    id: 'magic',
    name: 'Magic: The Gathering',
    description: 'O TCG original. Constrói o teu deck e desafia outros planeswalkers.',
    players: '2',
    duration: '20-60 min',
    category: 'tcg',
    complexity: 'Difícil',
    image: '/images/games/magic.jpg',
    featured: true,
  },
  {
    id: 'pokemon-tcg',
    name: 'Pokémon TCG',
    description: 'Treina, evolui e combate com as tuas cartas Pokémon favoritas.',
    players: '2',
    duration: '15-30 min',
    category: 'tcg',
    complexity: 'Médio',
    image: '/images/games/pokemon.jpg',
  },
  {
    id: 'yugioh',
    name: 'Yu-Gi-Oh!',
    description: 'É hora do duelo! Invoca monstros e ativa armadilhas neste clássico TCG.',
    players: '2',
    duration: '20-40 min',
    category: 'tcg',
    complexity: 'Difícil',
    image: '/images/games/yugioh.jpg',
  },
  {
    id: 'wingspan',
    name: 'Wingspan',
    description: 'Um motor de cartas elegante sobre aves. Atrai espécies para o teu santuário.',
    players: '1-5',
    duration: '40-70 min',
    category: 'strategy',
    complexity: 'Médio',
    image: '/images/games/wingspan.jpg',
  },
  {
    id: 'azul',
    name: 'Azul',
    description: 'Decora o Palácio Real de Évora com mosaicos coloridos neste jogo de padrões.',
    players: '2-4',
    duration: '30-45 min',
    category: 'strategy',
    complexity: 'Fácil',
    image: '/images/games/azul.jpg',
  },
  {
    id: 'codenames',
    name: 'Codenames',
    description: 'Dá pistas criativas para a tua equipa encontrar os agentes secretos.',
    players: '4-8',
    duration: '15-30 min',
    category: 'party',
    complexity: 'Fácil',
    image: '/images/games/codenames.jpg',
  },
  {
    id: 'terraforming-mars',
    name: 'Terraforming Mars',
    description: 'Lidera uma corporação na missão de tornar Marte habitável.',
    players: '1-5',
    duration: '120-180 min',
    category: 'strategy',
    complexity: 'Difícil',
    image: '/images/games/terraforming-mars.jpg',
  },
  {
    id: 'dixit',
    name: 'Dixit',
    description: 'Jogo de imaginação onde uma imagem vale mil palavras — mas só uma é a certa.',
    players: '3-6',
    duration: '30 min',
    category: 'party',
    complexity: 'Fácil',
    image: '/images/games/dixit.jpg',
  },
  {
    id: 'pandemic',
    name: 'Pandemic',
    description: 'Coopera com a tua equipa para salvar o mundo de doenças letais.',
    players: '2-4',
    duration: '45-60 min',
    category: 'strategy',
    complexity: 'Médio',
    image: '/images/games/pandemic.jpg',
  },
]

export const getFeaturedGames = () => games.filter(g => g.featured)

export const getGamesByCategory = (category: Game['category']) =>
  games.filter(g => g.category === category)
