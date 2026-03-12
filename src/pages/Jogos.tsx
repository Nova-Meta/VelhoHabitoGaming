import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { games } from '../data/games'
import type { Game } from '../data/games'
import { PlayersIcon, ClockIcon, D6Icon, CardIcon, ChessKnightIcon, MeepleIcon } from '../components/icons/GameIcons'

type CategoryFilter = 'all' | Game['category']

const filters: { id: CategoryFilter; label: string; icon: typeof D6Icon }[] = [
  { id: 'all', label: 'Todos', icon: D6Icon },
  { id: 'strategy', label: 'Estratégia', icon: ChessKnightIcon },
  { id: 'board-game', label: 'Board Games', icon: MeepleIcon },
  { id: 'tcg', label: 'TCGs', icon: CardIcon },
  { id: 'party', label: 'Party Games', icon: D6Icon },
]

export function Jogos() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all')
  const [search, setSearch] = useState('')

  const filteredGames = games.filter((game) => {
    const matchesCategory = activeFilter === 'all' || game.category === activeFilter
    const matchesSearch = game.name.toLowerCase().includes(search.toLowerCase()) ||
      game.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase">
            Biblioteca
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-brand-dark mt-2 tracking-tight">
            OS NOSSOS JOGOS
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Mais de {games.length} jogos disponíveis. De party games rápidos a estratégias épicas de 3 horas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => {
                const Icon = filter.icon
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeFilter === filter.id
                        ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20'
                        : 'bg-white text-stone-600 border border-stone-200 hover:border-brand-orange/30 hover:text-brand-orange'
                    }`}
                  >
                    <Icon size={16} />
                    {filter.label}
                  </button>
                )
              })}
            </div>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Procurar jogo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredGames.map((game, i) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      game.category === 'tcg'
                        ? 'bg-brand-purple/10 text-brand-purple'
                        : game.category === 'strategy'
                          ? 'bg-brand-teal/10 text-brand-teal'
                          : 'bg-brand-orange/10 text-brand-orange'
                    }`}>
                      {game.category === 'tcg' ? <CardIcon size={32} /> :
                       game.category === 'strategy' ? <ChessKnightIcon size={32} /> :
                       <D6Icon size={32} />}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      game.category === 'tcg'
                        ? 'bg-brand-purple/90 text-white'
                        : game.category === 'strategy'
                          ? 'bg-brand-teal/90 text-white'
                          : game.category === 'party'
                            ? 'bg-brand-orange/90 text-white'
                            : 'bg-stone-700/90 text-white'
                    }`}>
                      {game.category === 'tcg' ? 'TCG' :
                       game.category === 'strategy' ? 'Estratégia' :
                       game.category === 'party' ? 'Party' : 'Board Game'}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-2xl text-brand-dark tracking-wide">{game.name}</h3>
                  <p className="mt-1 text-sm text-stone-500 line-clamp-2">{game.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-stone-400">
                    <span className="flex items-center gap-1"><PlayersIcon size={14} />{game.players}</span>
                    <span className="flex items-center gap-1"><ClockIcon size={14} />{game.duration}</span>
                  </div>
                  <div className="mt-3">
                    <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                      game.complexity === 'Fácil'
                        ? 'bg-green-100 text-green-700'
                        : game.complexity === 'Médio'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                    }`}>
                      {game.complexity}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredGames.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <D6Icon size={64} className="text-stone-300 mx-auto mb-4" />
            <p className="text-stone-400 text-lg">Nenhum jogo encontrado.</p>
            <button
              onClick={() => { setActiveFilter('all'); setSearch('') }}
              className="mt-4 text-brand-orange font-medium hover:underline"
            >
              Limpar filtros
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
