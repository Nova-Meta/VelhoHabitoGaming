import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { menuItems } from '../../data/menu'

const previewCategories = [
  {
    id: 'cafes' as const,
    label: 'Cafés',
    icon: '☕',
    color: 'from-orange-100 to-orange-50',
    accent: 'text-brand-orange',
  },
  {
    id: 'snacks' as const,
    label: 'Snacks',
    icon: '🥪',
    color: 'from-teal-100 to-teal-50',
    accent: 'text-brand-teal',
  },
  {
    id: 'doces' as const,
    label: 'Doces',
    icon: '🍰',
    color: 'from-purple-100 to-purple-50',
    accent: 'text-brand-purple',
  },
]

export function MenuPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-teal font-semibold text-sm tracking-[0.2em] uppercase">
            Gastronomia
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-brand-dark mt-2 tracking-tight">
            MENU & PREÇOS
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Recarrega energias entre jogadas. Café artesanal, snacks irresistíveis e doces que são um critical hit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {previewCategories.map((cat, i) => {
            const items = menuItems.filter(item => item.category === cat.id).slice(0, 4)
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40, rotate: i === 0 ? -2 : i === 2 ? 2 : 0 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: i === 0 ? -1 : i === 2 ? 1 : 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                whileHover={{ rotate: 0, scale: 1.03, y: -4 }}
                className={`bg-gradient-to-b ${cat.color} rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-shadow relative group`}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white rounded-full border border-stone-200 flex items-center justify-center shadow-sm">
                  <span className="text-lg">{cat.icon}</span>
                </div>

                <h3 className={`font-heading text-2xl ${cat.accent} tracking-wider text-center mt-4 mb-6`}>
                  {cat.label.toUpperCase()}
                </h3>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-2">
                      <div className="flex-1">
                        <span className="text-sm font-medium text-brand-dark">{item.name}</span>
                        {item.description && (
                          <p className="text-xs text-stone-400">{item.description}</p>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-sm font-heading text-lg tracking-wider text-brand-dark">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-stone-200/50 text-center">
                  <span className="text-xs text-stone-400">e mais...</span>
                </div>

                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-orange/20 transition-colors pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-teal-dark transition-colors"
            >
              Ver Menu Completo
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
