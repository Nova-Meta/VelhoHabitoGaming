import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FloatingScene } from '../three/FloatingScene'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-cream via-white to-orange-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/3 rounded-full blur-3xl" />
      </div>

      <Suspense fallback={null}>
        <FloatingScene />
      </Suspense>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-brand-teal font-semibold text-sm md:text-base tracking-[0.2em] uppercase mb-4"
          >
            Board Games &bull; TCGs &bull; Café
          </motion.p>

          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-brand-dark leading-[0.9] tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="block"
              style={{
                textShadow: '4px 4px 0 rgba(234, 88, 12, 0.15), 8px 8px 0 rgba(234, 88, 12, 0.05)',
              }}
            >
              O TEU LADO
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="block text-brand-orange"
              style={{
                textShadow: '4px 4px 0 rgba(234, 88, 12, 0.2), 8px 8px 0 rgba(234, 88, 12, 0.08)',
              }}
            >
              DA MESA.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
          >
            Café, comunidade e os melhores board games & TCGs em Santo Tirso.
            O refúgio para as tuas jogadas mais épicas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/jogos">
              <motion.button
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border-2 border-brand-teal text-brand-teal font-bold text-lg rounded-2xl hover:bg-brand-teal hover:text-white transition-colors"
              >
                Explorar Jogos
              </motion.button>
            </Link>
            <Link to="/reservas">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-brand-orange text-white font-bold text-lg rounded-2xl shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/40 transition-shadow"
              >
                Reserva a Tua Mesa
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
