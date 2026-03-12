import { useState } from 'react'
import { motion } from 'framer-motion'
import { D6Icon, MeepleIcon } from '../components/icons/GameIcons'

interface ReservationForm {
  name: string
  email: string
  phone: string
  date: string
  time: string
  players: string
  gamePreference: string
  notes: string
}

const timeSlots = [
  '14:00', '15:00', '16:00', '17:00', '18:00',
  '19:00', '20:00', '21:00', '22:00',
]

export function Reservas() {
  const [form, setForm] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    players: '2',
    gamePreference: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-brand-cream flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-center max-w-md mx-auto px-4"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 5, -5, 0] }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-3xl flex items-center justify-center"
          >
            <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h2 className="font-heading text-4xl text-brand-dark tracking-tight mb-4">
            RESERVA CONFIRMADA!
          </h2>
          <p className="text-stone-500 mb-2">
            Obrigado, <strong>{form.name}</strong>! A tua mesa está reservada.
          </p>
          <p className="text-stone-400 text-sm">
            Enviámos um email de confirmação para <strong>{form.email}</strong>.
            Até breve no Velho Hábito!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSubmitted(false)}
            className="mt-8 px-6 py-3 bg-brand-orange text-white font-semibold rounded-xl"
          >
            Nova Reserva
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-cream relative overflow-hidden">
      <div className="absolute top-40 -right-20 opacity-[0.03]">
        <D6Icon size={400} className="text-brand-orange" />
      </div>
      <div className="absolute bottom-20 -left-20 opacity-[0.03]">
        <MeepleIcon size={300} className="text-brand-teal" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase">
            Reservas
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-brand-dark mt-2 tracking-tight">
            RESERVA A TUA MESA
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Garante o teu lugar na mesa. Reserva é gratuita e inclui acesso a toda a nossa biblioteca de jogos.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-stone-200 shadow-lg p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">Nome *</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="O teu nome"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="email@exemplo.com"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">Telefone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+351 912 345 678"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">Nº de Jogadores *</label>
              <select
                name="players"
                required
                value={form.players}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
              >
                {[2, 3, 4, 5, 6, 7, 8].map(n => (
                  <option key={n} value={n}>{n} jogadores</option>
                ))}
                <option value="8+">8+ jogadores</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">Data *</label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">Hora *</label>
              <select
                name="time"
                required
                value={form.time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
              >
                <option value="">Selecionar hora</option>
                {timeSlots.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-brand-dark mb-2">Preferência de Jogo</label>
            <input
              type="text"
              name="gamePreference"
              value={form.gamePreference}
              onChange={handleChange}
              placeholder="Ex: Catan, Magic, Surpreende-nos!"
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-brand-dark mb-2">Notas Adicionais</label>
            <textarea
              name="notes"
              rows={3}
              value={form.notes}
              onChange={handleChange}
              placeholder="Alguma coisa que devemos saber? (aniversários, pedidos especiais, etc.)"
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all resize-none"
            />
          </div>

          <div className="mt-8">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-brand-orange text-white font-bold text-lg rounded-2xl shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:bg-brand-orange-dark transition-all"
            >
              Confirmar Reserva
            </motion.button>
          </div>

          <p className="text-center text-xs text-stone-400 mt-4">
            A reserva inclui acesso a toda a biblioteca de jogos. Sem custos adicionais.
          </p>
        </motion.form>
      </div>
    </div>
  )
}
