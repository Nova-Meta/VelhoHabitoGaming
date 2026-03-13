import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { D6Icon, MeepleIcon, CardIcon } from '../icons/GameIcons'

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      id: 1,
      title: 'APARECE OU RESERVA',
      description: 'Podes simplesmente aparecer ou reservar mesa — diz-nos quantos vêm jogar.',
      icon: D6Icon,
    },
    {
      id: 2,
      title: 'ESCOLHE O JOGO',
      description: 'Chega com uma ideia em mente ou deixa o nosso Game Master sugerir a jogada perfeita.',
      icon: MeepleIcon,
    },
    {
      id: 3,
      title: 'FAZ A TUA JOGADA',
      description: 'Pede um café, um snack, lança os dados e aproveita a noite na Praça 25 de Abril.',
      icon: CardIcon,
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-teal"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-brand-orange-light font-semibold text-sm tracking-[0.2em] uppercase">
            Como Funciona
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-2 tracking-tight">
            A TUA NOITE, EM 3 PASSOS
          </h2>
          <p className="mt-4 text-stone-200 max-w-2xl mx-auto">
            Vir jogar ao Velho Hábito é simples: pensa na tua party, escolhe o mood da noite
            e nós tratamos do resto — com ou sem reserva.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="relative bg-white rounded-3xl border border-stone-200 shadow-sm p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-orange tracking-[0.2em] uppercase">
                      Passo {step.id}
                    </p>
                    <h3 className="font-heading text-lg text-brand-dark tracking-wide">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

