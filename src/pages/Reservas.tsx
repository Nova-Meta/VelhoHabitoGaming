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
  sessionType: 'casual' | 'campanha' | 'torneio' | 'tcg'
  experience: 'iniciante' | 'misto' | 'veteranos'
  mood: 'rir' | 'pensar' | 'familia' | 'date' | ''
}

const timeSlots = [
  '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00',
  '20:30', '21:00', '21:30', '22:00', '22:30',
  '23:00', '23:30', '00:00', '00:30', '01:00',
  '01:30', '02:00',
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
    sessionType: 'casual',
    experience: 'misto',
    mood: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const updateField = <K extends keyof ReservationForm>(key: K, value: ReservationForm[K]) => {
    setForm(prev => ({ ...prev, [key]: value }))
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
          <p className="text-stone-400 text-xs mt-3">
            Sessão: <strong>{form.sessionType}</strong> &bull; Nível:{' '}
            <strong>{form.experience}</strong>
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
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-start md:items-center gap-2">
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-brand-teal">
                Passo 1
              </p>
              <p className="text-sm font-medium text-brand-dark">Escolhe a tua party</p>
              <p className="text-xs text-stone-400">Quantos jogadores vêm contigo.</p>
            </div>
            <div className="flex flex-col items-start md:items-center gap-2">
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-brand-teal">
                Passo 2
              </p>
              <p className="text-sm font-medium text-brand-dark">Marca o horário</p>
              <p className="text-xs text-stone-400">Dentro do nosso horário da casa.</p>
            </div>
            <div className="flex flex-col items-start md:items-center gap-2">
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-brand-teal">
                Passo 3
              </p>
              <p className="text-sm font-medium text-brand-dark">Escolhe o mood</p>
              <p className="text-xs text-stone-400">Nós tratamos do resto.</p>
            </div>
          </div>

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
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-dark mb-2">Modo de Jogo</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'casual', label: 'Casual & Chill' },
                  { id: 'campanha', label: 'Campanha / Legacy' },
                  { id: 'torneio', label: 'Torneio / Ranking' },
                  { id: 'tcg', label: 'Só TCGs' },
                ].map(option => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => updateField('sessionType', option.id as ReservationForm['sessionType'])}
                    className={`px-3 py-2 rounded-xl text-xs font-medium border transition-colors ${
                      form.sessionType === option.id
                        ? 'bg-brand-orange text-white border-brand-orange'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-brand-orange/40'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">Nível da Mesa</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'iniciante', label: 'Iniciantes' },
                    { id: 'misto', label: 'Misto' },
                    { id: 'veteranos', label: 'Veteranos' },
                  ].map(option => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => updateField('experience', option.id as ReservationForm['experience'])}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-colors ${
                        form.experience === option.id
                          ? 'bg-brand-teal text-white border-brand-teal'
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-brand-teal/40'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">Mood da Sessão</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'rir', label: 'Rir muito' },
                    { id: 'pensar', label: 'Pensar muito' },
                    { id: 'familia', label: 'Família' },
                    { id: 'date', label: 'Date night' },
                  ].map(option => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => updateField('mood', option.id as ReservationForm['mood'])}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-colors ${
                        form.mood === option.id
                          ? 'bg-brand-purple text-white border-brand-purple'
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-brand-purple/40'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
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
