import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  compact?: boolean
}

export function Logo({ className = '', compact = false }: LogoProps) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src="/images/logo.png"
        alt="Velho Hábito"
        className="w-10 h-10 rounded-full object-cover"
      />
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-heading tracking-wider text-brand-teal-dark">
            VELHO HÁBITO
          </span>
          <span className="text-[0.65rem] tracking-[0.25em] text-brand-orange font-semibold uppercase">
            Game Café
          </span>
        </div>
      )}
    </motion.div>
  )
}
