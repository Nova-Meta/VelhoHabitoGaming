import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedGames } from '../../data/games'
import { PlayersIcon, ClockIcon, D6Icon } from '../icons/GameIcons'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
}

export function FeaturedGames() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const featuredGames = getFeaturedGames()

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

      <div className="absolute -top-20 right-10 opacity-[0.03]">
        <D6Icon size={300} className="text-brand-orange" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase">
            Coleção
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-brand-dark mt-2 tracking-tight">
            OS FAVORITOS DA MESA
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Descobre os jogos mais jogados no nosso espaço. De estratégia profunda a duelos épicos de cartas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredGames.map((game) => (
            <motion.div
              key={game.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateY: 3,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-brand-orange/10 transition-shadow duration-300"
              style={{ perspective: '1000px' }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                    game.category === 'tcg'
                      ? 'bg-brand-purple/10 text-brand-purple'
                      : 'bg-brand-orange/10 text-brand-orange'
                  }`}>
                    <D6Icon size={40} />
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
                <h3 className="font-heading text-2xl text-brand-dark tracking-wide">
                  {game.name}
                </h3>
                <p className="mt-1 text-sm text-stone-500 line-clamp-2">
                  {game.description}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-stone-400">
                  <span className="flex items-center gap-1">
                    <PlayersIcon size={14} />
                    {game.players}
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon size={14} />
                    {game.duration}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
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

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <Link
                  to="/jogos"
                  className="w-full py-2.5 bg-white text-brand-dark text-center font-semibold rounded-xl text-sm hover:bg-brand-orange hover:text-white transition-colors"
                >
                  Ver Mais
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/jogos"
            className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:text-brand-orange transition-colors group"
          >
            Ver todos os jogos
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
