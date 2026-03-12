import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuItems, menuCategories } from '../data/menu'
import type { MenuItem } from '../data/menu'

type CategoryId = MenuItem['category']

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('bebidas-quentes')

  const filteredItems = menuItems.filter(item => item.category === activeCategory)
  const activeCat = menuCategories.find(c => c.id === activeCategory)

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-teal font-semibold text-sm tracking-[0.2em] uppercase">
            Gastronomia
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-brand-dark mt-2 tracking-tight">
            MENU & PREÇOS
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Recarrega energias entre jogadas. Tudo feito com carinho para alimentar a tua próxima vitória.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-teal text-white shadow-lg shadow-brand-teal/20'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-brand-teal/30'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-lg relative">
              <div className="bg-gradient-to-r from-brand-teal-dark to-brand-teal p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 left-4 text-6xl">{activeCat?.icon}</div>
                  <div className="absolute bottom-2 right-8 text-4xl rotate-12">{activeCat?.icon}</div>
                </div>
                <span className="text-6xl block mb-2">{activeCat?.icon}</span>
                <h2 className="font-heading text-4xl text-white tracking-wider">
                  {activeCat?.label.toUpperCase()}
                </h2>
              </div>

              <div className="p-8">
                <div className="space-y-1">
                  {filteredItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="flex items-center justify-between py-4 border-b border-stone-100 last:border-0 group hover:bg-stone-50 -mx-4 px-4 rounded-lg transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-brand-dark group-hover:text-brand-teal transition-colors">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-xs text-stone-400 mt-0.5">{item.description}</p>
                        )}
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <span className="font-heading text-2xl text-brand-orange tracking-wider">
                          {item.price}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 px-8 py-4 text-center">
                <p className="text-xs text-stone-400">
                  Preços sujeitos a alterações. IVA incluído.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
