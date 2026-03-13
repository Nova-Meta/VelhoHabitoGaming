import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-teal text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 space-y-6">
        {/* Título e texto principal fora do cartão escuro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-4 mx-auto text-center"
        >
          <span className="text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase">
            Onde Jogamos
          </span>
          <h3 className="font-heading text-3xl md:text-4xl tracking-tight mb-3">
            UMA JOGADA NO CENTRO DO TABULEIRO
          </h3>
          <p className="text-stone-100 text-sm md:text-base leading-relaxed">
            A ideia é simples: antes ou depois de outros planos na praça, o Velho Hábito
            é o sítio onde a noite continua — com cartas, dados e muito café.
          </p>
        </motion.div>

        {/* Mapa em estilo tabuleiro com mais separação e pontos extra */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-brand-dark/5 rounded-3xl border border-white/10 p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute -top-16 -left-12 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -right-10 w-36 h-36 bg-brand-purple/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-orange-light mb-3">
              Tabuleiro da Praça
            </p>
            <div className="aspect-[16/9] rounded-2xl border border-white/15 bg-gradient-to-br from-brand-dark/40 via-teal-900/40 to-teal-800/40 p-4 grid grid-cols-5 grid-rows-3 gap-3">
              {/* Linha 1 (topo) – bloco único de estacionamento + hotel agrupado */}
              <div className="col-span-2 row-span-2 rounded-xl bg-teal-700/70 flex items-center justify-center text-[0.7rem] font-semibold tracking-[0.12em] text-stone-100 text-center px-3 uppercase">
                Estacionamento
              </div>
              <div className="col-span-2 rounded-xl bg-teal-700/60 flex items-center justify-center text-[0.7rem] font-semibold tracking-[0.12em] text-stone-100 text-center px-3 uppercase">
                Hotel&nbsp;Cidnay
              </div>
              <div className="rounded-xl bg-teal-700/40" />

              {/* Linha 2 (meio) – câmara e VH agrupados em blocos verticais */}
              {/* duas primeiras colunas já são o bloco de estacionamento (row-span-2) */}
              <div className="row-span-2 rounded-xl bg-teal-600/70 flex items-center justify-center text-[0.7rem] font-semibold tracking-[0.12em] text-stone-100 text-center px-3 uppercase">
                Câmara<br />Municipal
              </div>
              <div className="rounded-xl bg-teal-700/40" />
              <div className="row-span-2 rounded-xl bg-brand-orange flex items-center justify-center text-[0.7rem] font-semibold tracking-[0.12em] text-white shadow-lg shadow-brand-orange/50 uppercase">
                Velho<br />Hábito
              </div>

              {/* Linha 3 (baixo) – continua bloco de câmara e VH, com espaço livre à volta */}
              {/* col 1-2: continuação visual do estacionamento à frente (já transmitido pelo bloco de cima) */}
              <div className="rounded-xl bg-teal-700/50" />
              <div className="rounded-xl bg-teal-700/50" />
              {/* col 3: continuação da Câmara (row-span-2) */}
              <div className="rounded-xl bg-teal-700/40" />
              {/* col 5: continuação do VH (row-span-2) */}
              <div className="rounded-xl bg-teal-700/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

