import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MeepleIcon, D20Icon } from '../icons/GameIcons'

const testimonials = [
  {
    name: 'Rui Cardoso',
    class: 'Mago Nível 12',
    quote: 'O melhor sítio em Santo Tirso para jogar Magic. Ambiente incrível e o café é excelente!',
    stat: { label: 'Jogos Jogados', value: '142' },
  },
  {
    name: 'Ana Pereira',
    class: 'Estrategista Real',
    quote: 'Venho todas as quintas para a noite de estratégia. Já venci 3 torneios de Catan!',
    stat: { label: 'Vitórias', value: '47' },
  },
  {
    name: 'Miguel Santos',
    class: 'Colecionador Épico',
    quote: 'Os pré-releases de Magic aqui são os melhores. Comunidade acolhedora e prémios fantásticos.',
    stat: { label: 'Cartas Colecionadas', value: '2.4k' },
  },
]

const polaroidAngles = [-6, 2, -3, 5, -1]

export function CommunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
      <div className="absolute top-20 -left-10 opacity-[0.04]">
        <MeepleIcon size={250} className="text-brand-teal" />
      </div>
      <div className="absolute bottom-10 -right-10 opacity-[0.04]">
        <D20Icon size={200} className="text-brand-purple" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-teal font-semibold text-sm tracking-[0.2em] uppercase">
            Comunidade
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-brand-dark mt-2 tracking-tight">
            O ESPAÇO & QUEM JOGA
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Um espaço feito para jogadores, por jogadores. Vê o que a nossa comunidade tem a dizer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: polaroidAngles[i], scale: 0.8 }}
                  animate={isInView ? { opacity: 1, rotate: polaroidAngles[i], scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ rotate: 0, scale: 1.08, zIndex: 10 }}
                  className={`bg-white p-2 pb-8 rounded-sm shadow-lg cursor-pointer transition-shadow hover:shadow-2xl ${
                    i === 2 ? 'col-span-2' : ''
                  }`}
                >
                  <div className={`${
                    i === 2 ? 'aspect-[16/9]' : 'aspect-square'
                  } bg-gradient-to-br rounded-sm overflow-hidden ${
                    i % 3 === 0
                      ? 'from-brand-orange/20 to-brand-orange/5'
                      : i % 3 === 1
                        ? 'from-brand-teal/20 to-brand-teal/5'
                        : 'from-brand-purple/20 to-brand-purple/5'
                  }`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <MeepleIcon
                        size={i === 2 ? 60 : 40}
                        className={`opacity-30 ${
                          i % 3 === 0
                            ? 'text-brand-orange'
                            : i % 3 === 1
                              ? 'text-brand-teal'
                              : 'text-brand-purple'
                        }`}
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs text-stone-400 font-medium">
                    {['Noite de Catan', 'Torneio Magic', 'O nosso espaço', 'Pré-release', 'Game Masters'][i]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
                whileHover={{ x: -4 }}
                className="relative bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="absolute -left-3 top-6 w-6 h-6 bg-brand-orange/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center text-white flex-shrink-0">
                    <MeepleIcon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-brand-dark">{t.name}</h4>
                        <p className="text-xs text-brand-purple font-medium">{t.class}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-heading text-2xl text-brand-orange">{t.stat.value}</p>
                        <p className="text-[0.6rem] text-stone-400 uppercase tracking-wider">{t.stat.label}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-stone-500 italic leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange via-brand-purple to-brand-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
