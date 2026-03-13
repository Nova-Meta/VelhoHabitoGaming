import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { weeklyEvents } from '../../data/events'
import { CardIcon, D6Icon, ChessKnightIcon, MeepleIcon } from '../icons/GameIcons'

const iconMap = {
  cards: CardIcon,
  dice: D6Icon,
  chess: ChessKnightIcon,
  meeple: MeepleIcon,
}

const colorMap = {
  tcg: {
    bg: 'bg-brand-purple/25',
    border: 'border-brand-purple/40',
    icon: 'text-brand-purple-light',
    accent: 'bg-brand-purple',
    hoverBorder: 'hover:border-brand-purple/70',
  },
  'board-game': {
    bg: 'bg-brand-orange/25',
    border: 'border-brand-orange/40',
    icon: 'text-brand-orange-light',
    accent: 'bg-brand-orange',
    hoverBorder: 'hover:border-brand-orange/70',
  },
  special: {
    bg: 'bg-brand-dark/60',
    border: 'border-brand-dark/70',
    icon: 'text-brand-teal-light',
    accent: 'bg-brand-teal-light',
    hoverBorder: 'hover:border-brand-teal-light/80',
  },
}

export function Schedule() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-teal relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
        <div className="absolute top-20 right-20 opacity-[0.04]">
          <D6Icon size={200} className="text-white" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-[0.04]">
          <CardIcon size={180} className="text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange-light font-semibold text-sm tracking-[0.2em] uppercase">
            Agenda Semanal
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-white mt-2 tracking-tight">
            PROGRAMAÇÃO
          </h2>
          <p className="mt-4 text-stone-400 max-w-xl mx-auto">
            Todos os dias há uma razão para vir jogar. Escolhe o teu dia favorito.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeklyEvents.map((event, i) => {
            const IconComponent = iconMap[event.icon]
            const colors = colorMap[event.category]
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`rounded-2xl border ${colors.border} ${colors.bg} ${colors.hoverBorder} p-6 backdrop-blur-sm transition-colors relative group overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${colors.accent} rounded-t-2xl`} />

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                    <IconComponent size={28} className={colors.icon} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                      {event.day}
                    </p>
                    <p className={`text-sm font-semibold ${colors.icon}`}>
                      {event.time}
                    </p>
                  </div>
                </div>

                <h3 className="font-heading text-2xl text-white tracking-wide mb-2">
                  {event.title}
                </h3>

                <p className="text-sm text-stone-400 leading-relaxed">
                  {event.description}
                </p>

                <div className="absolute -bottom-8 -right-8 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity">
                  <IconComponent size={100} className="text-white" />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/eventos"
            className="inline-flex items-center gap-2 text-brand-orange-light font-semibold hover:text-white transition-colors group"
          >
            Ver todos os eventos
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
