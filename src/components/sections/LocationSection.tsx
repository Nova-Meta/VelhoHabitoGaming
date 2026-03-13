import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-teal-dark text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-orange-light font-semibold text-sm tracking-[0.2em] uppercase mb-2">
            Onde Jogamos
          </p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight mb-4">
            PRAÇA 25 DE ABRIL, SANTO TIRSO
          </h2>
          <p className="text-stone-200 text-sm md:text-base leading-relaxed mb-4">
            O Velho Hábito vive no coração da Praça 25 de Abril — a mesma praça que
            sempre fez parte da rotina de quem cresce em Santo Tirso.
          </p>
          <p className="text-stone-300 text-sm leading-relaxed">
            Entre uma ida ao rio, um passeio ao Mosteiro ou um café rápido depois do
            trabalho, estamos ali para transformar um “vamos só ali” numa noite de jogo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-brand-dark/30 backdrop-blur-md rounded-3xl border border-white/10 p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-orange-light mb-3">
              Mapa da Mesa
            </p>
            <div className="bg-brand-teal rounded-2xl p-4 mb-4 shadow-lg shadow-black/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-stone-200">
                  PRAÇA 25 DE ABRIL
                </span>
                <span className="text-[0.65rem] text-stone-300">
                  Centro &bull; Santo Tirso
                </span>
              </div>
              <div className="aspect-[4/3] rounded-xl border border-teal-700 bg-gradient-to-br from-teal-900 via-teal-800 to-brand-dark relative overflow-hidden">
                <div className="absolute inset-3 grid grid-cols-3 grid-rows-3 gap-2">
                  <div className="rounded-lg bg-teal-700/60" />
                  <div className="rounded-lg bg-teal-700/40" />
                  <div className="rounded-lg bg-teal-700/60" />
                  <div className="rounded-lg bg-teal-700/40" />
                  <div className="rounded-lg bg-brand-orange flex items-center justify-center text-[0.6rem] font-bold text-white shadow-lg shadow-brand-orange/40">
                    VELHO<br />HÁBITO
                  </div>
                  <div className="rounded-lg bg-teal-700/50" />
                  <div className="rounded-lg bg-teal-700/70" />
                  <div className="rounded-lg bg-teal-700/40" />
                  <div className="rounded-lg bg-teal-700/60" />
                </div>
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-xl" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-200">
              <div>
                <p className="font-semibold mb-1">Estacionamento</p>
                <p className="text-stone-300">
                  Várias opções na envolvente da praça e ruas adjacentes.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">Transportes</p>
                <p className="text-stone-300">
                  A poucos minutos a pé das principais paragens de autocarro.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">Melhor hora</p>
                <p className="text-stone-300">
                  Fim de tarde para cafés longos, noite para campanhas épicas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

