import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  compact?: boolean
}

export function Logo({ className = '', compact = false }: LogoProps) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="2" y="2" width="36" height="36" rx="8" className="fill-brand-orange" />
          <rect x="2" y="2" width="36" height="36" rx="8" className="stroke-brand-orange-dark" strokeWidth="1.5" />
          <circle cx="13" cy="13" r="3" fill="white" />
          <circle cx="27" cy="13" r="3" fill="white" />
          <circle cx="13" cy="27" r="3" fill="white" />
          <circle cx="27" cy="27" r="3" fill="white" />
          <circle cx="20" cy="20" r="3" fill="white" />
        </svg>
      </div>
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
