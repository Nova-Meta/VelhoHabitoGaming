import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

export function D6Icon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="4" width="56" height="56" rx="10" fill="currentColor" opacity="0.15" />
      <rect x="4" y="4" width="56" height="56" rx="10" stroke="currentColor" strokeWidth="3" />
      <circle cx="20" cy="20" r="5" fill="currentColor" />
      <circle cx="44" cy="20" r="5" fill="currentColor" />
      <circle cx="20" cy="44" r="5" fill="currentColor" />
      <circle cx="44" cy="44" r="5" fill="currentColor" />
      <circle cx="20" cy="32" r="5" fill="currentColor" />
      <circle cx="44" cy="32" r="5" fill="currentColor" />
    </svg>
  )
}

export function D20Icon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <polygon points="32,2 60,18 60,46 32,62 4,46 4,18" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="32,2 60,18 32,34 4,18" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="32" y1="34" x2="32" y2="62" stroke="currentColor" strokeWidth="1.5" />
      <line x1="32" y1="34" x2="60" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="32" y1="34" x2="4" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text x="32" y="48" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="Bebas Neue, sans-serif">20</text>
    </svg>
  )
}

export function MeepleIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="14" r="10" fill="currentColor" />
      <path d="M16 60 L12 36 C12 28 20 24 32 24 C44 24 52 28 52 36 L48 60 L40 48 L36 60 L28 60 L24 48 Z" fill="currentColor" />
    </svg>
  )
}

export function CardIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="8" width="36" height="48" rx="4" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" transform="rotate(-8 24 32)" />
      <rect x="18" y="8" width="36" height="48" rx="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" transform="rotate(4 36 32)" />
      <path d="M36 24 L40 32 L36 40 L32 32 Z" fill="currentColor" opacity="0.6" transform="rotate(4 36 32)" />
    </svg>
  )
}

export function ChessKnightIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 56 H46 V52 C46 48 44 46 40 44 L42 30 C42 20 36 12 28 10 L24 8 L26 16 L20 20 C16 24 14 30 14 36 L14 44 C14 46 16 48 18 48 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="24" cy="18" r="2.5" fill="currentColor" />
      <rect x="14" y="54" width="36" height="4" rx="2" fill="currentColor" />
    </svg>
  )
}

export function ShieldSwordsIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 6 C32 6 12 12 12 12 C12 12 12 34 12 38 C12 50 32 58 32 58 C32 58 52 50 52 38 C52 34 52 12 52 12 C52 12 32 6 32 6Z" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="20" y1="50" x2="44" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="50" x2="20" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

export function PlayersIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function ClockIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
