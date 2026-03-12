import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { weeklyEvents, upcomingEvents } from '../data/events'
import { CardIcon, D6Icon, ChessKnightIcon, MeepleIcon } from '../components/icons/GameIcons'

const iconMap = {
  cards: CardIcon,
  dice: D6Icon,
  chess: ChessKnightIcon,
  meeple: MeepleIcon,
}

const categoryColors = {
  tcg: 'border-brand-purple/30 bg-brand-purple/5',
  'board-game': 'border-brand-orange/30 bg-brand-orange/5',
  special: 'border-brand-teal/30 bg-brand-teal/5',
}

const categoryTextColors = {
  tcg: 'text-brand-purple',
  'board-game': 'text-brand-orange',
  special: 'text-brand-teal',
}

export function Eventos() {
  const weeklyRef = useRef(null)
  const upcomingRef = useRef(null)
  const weeklyInView = useInView(weeklyRef, { once: true, margin: '-100px' })
  const upcomingInView = useInView(upcomingRef, { once: true, margin: '-100px' })

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-purple font-semibold text-sm tracking-[0.2em] uppercase">
            Calendário
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-brand-dark mt-2 tracking-tight">
            EVENTOS & TORNEIOS
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            De noites temáticas a torneios competitivos, há sempre uma razão para vir jogar.
          </p>
        </motion.div>

        <div ref={upcomingRef} className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={upcomingInView ? { opacity: 1, x: 0 } : {}}
            className="font-heading text-3xl md:text-4xl text-brand-dark mb-8 tracking-tight"
          >
            PRÓXIMOS EVENTOS
          </motion.h2>

          <div className="space-y-6">
            {upcomingEvents.map((event, i) => {
              const Icon = iconMap[event.icon]
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={upcomingInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.15, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className={`rounded-2xl border ${categoryColors[event.category]} p-6 md:p-8 relative overflow-hidden group`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl border ${categoryColors[event.category]} flex items-center justify-center`}>
                        <Icon size={32} className={categoryTextColors[event.category]} />
                      </div>
                      {event.date && (
                        <div className="text-center">
                          <p className="font-heading text-3xl text-brand-dark">
                            {new Date(event.date).getDate()}
                          </p>
                          <p className="text-xs text-stone-500 uppercase">
                            {new Date(event.date).toLocaleDateString('pt-PT', { month: 'short' })}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-heading text-2xl md:text-3xl text-brand-dark tracking-wide">
                          {event.title}
                        </h3>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          event.category === 'tcg'
                            ? 'bg-brand-purple/20 text-brand-purple'
                            : event.category === 'board-game'
                              ? 'bg-brand-orange/20 text-brand-orange'
                              : 'bg-brand-teal/20 text-brand-teal'
                        }`}>
                          {event.category === 'tcg' ? 'TCG' : event.category === 'board-game' ? 'Board Game' : 'Especial'}
                        </span>
                      </div>
                      <p className="text-sm text-stone-500 mb-2">
                        {event.day} &bull; {event.time}
                      </p>
                      <p className="text-stone-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className={`px-6 py-3 rounded-xl font-semibold text-white text-sm ${
                          event.category === 'tcg'
                            ? 'bg-brand-purple hover:bg-brand-purple-dark'
                            : event.category === 'board-game'
                              ? 'bg-brand-orange hover:bg-brand-orange-dark'
                              : 'bg-brand-teal hover:bg-brand-teal-dark'
                        } transition-colors`}
                      >
                        Inscrever
                      </motion.button>
                    </div>
                  </div>

                  <div className="absolute -bottom-10 -right-10 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                    <Icon size={120} className="text-brand-dark" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div ref={weeklyRef}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={weeklyInView ? { opacity: 1, x: 0 } : {}}
            className="font-heading text-3xl md:text-4xl text-brand-dark mb-8 tracking-tight"
          >
            PROGRAMA SEMANAL
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklyEvents.map((event, i) => {
              const Icon = iconMap[event.icon]
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={weeklyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`rounded-2xl border ${categoryColors[event.category]} p-6 relative overflow-hidden group`}
                >
                  <div className={`w-12 h-12 rounded-xl border ${categoryColors[event.category]} flex items-center justify-center mb-4`}>
                    <Icon size={24} className={categoryTextColors[event.category]} />
                  </div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">{event.day}</p>
                  <h3 className="font-heading text-xl text-brand-dark tracking-wide mb-1">{event.title}</h3>
                  <p className={`text-sm font-medium ${categoryTextColors[event.category]} mb-3`}>{event.time}</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{event.description}</p>

                  <div className="absolute -bottom-6 -right-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                    <Icon size={80} className="text-brand-dark" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
