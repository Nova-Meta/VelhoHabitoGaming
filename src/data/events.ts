export interface GameEvent {
  id: string
  title: string
  day: string
  time: string
  description: string
  category: 'tcg' | 'board-game' | 'special'
  recurring: boolean
  date?: string
  icon: 'cards' | 'dice' | 'chess' | 'meeple'
}

export const weeklyEvents: GameEvent[] = [
  {
    id: 'quarta-tcg',
    title: 'Quartas de TCG',
    day: 'Quarta-feira',
    time: '18:00 - 23:00',
    description: 'Noite dedicada a Magic: The Gathering, Pokémon TCG e Yu-Gi-Oh! Traz o teu deck ou experimenta um dos nossos.',
    category: 'tcg',
    recurring: true,
    icon: 'cards',
  },
  {
    id: 'quinta-estrategia',
    title: 'Quintas de Estratégia',
    day: 'Quinta-feira',
    time: '18:00 - 23:00',
    description: 'Noite de jogos de estratégia: Catan, Ticket to Ride, Terraforming Mars e mais. Todos os níveis são bem-vindos.',
    category: 'board-game',
    recurring: true,
    icon: 'dice',
  },
  {
    id: 'sabado-familia',
    title: 'Sábados em Família',
    day: 'Sábado',
    time: '15:00 - 19:00',
    description: 'Tarde perfeita para famílias. Jogos para todas as idades com acompanhamento dos nossos game masters.',
    category: 'board-game',
    recurring: true,
    icon: 'meeple',
  },
  {
    id: 'domingo-torneio',
    title: 'Domingos de Torneio',
    day: 'Domingo',
    time: '14:00 - 20:00',
    description: 'Torneios competitivos rotativos. Consulta o calendário para ver o jogo da semana e os prémios.',
    category: 'special',
    recurring: true,
    icon: 'chess',
  },
]

export const upcomingEvents: GameEvent[] = [
  {
    id: 'pre-release-magic',
    title: 'Pré-Release Magic: Tarkir Reborn',
    day: 'Sábado',
    time: '11:00 - 22:00',
    date: '2026-04-05',
    description: 'Sê dos primeiros a jogar com as novas cartas! Inscrição limitada a 32 jogadores. Inclui kit de pré-release.',
    category: 'tcg',
    recurring: false,
    icon: 'cards',
  },
  {
    id: 'noite-catan',
    title: 'Grande Noite de Catan',
    day: 'Sexta-feira',
    time: '19:00 - 00:00',
    date: '2026-03-28',
    description: 'Torneio especial de Catan com prémios. Formato suíço, 4 rondas. Inscrição: 5€ (inclui bebida).',
    category: 'board-game',
    recurring: false,
    icon: 'dice',
  },
  {
    id: 'pokemon-league',
    title: 'Liga Pokémon TCG',
    day: 'Sábado',
    time: '14:00 - 18:00',
    date: '2026-04-12',
    description: 'Liga mensal de Pokémon TCG. Formato Standard. Prémios para os 3 primeiros classificados.',
    category: 'tcg',
    recurring: false,
    icon: 'cards',
  },
]
