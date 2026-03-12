import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '../icons/Logo'
import { D6Icon } from '../icons/GameIcons'

const navLinks = [
  { path: '/', label: 'Início' },
  { path: '/jogos', label: 'Jogos' },
  { path: '/eventos', label: 'Eventos' },
  { path: '/menu', label: 'Menu' },
  { path: '/reservas', label: 'Reservas' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" aria-label="Velho Hábito Game Café - Início">
            <Logo compact={false} />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.path} {...link} active={location.pathname === link.path} />
            ))}
            <Link
              to="/reservas"
              className="ml-4 px-5 py-2.5 bg-brand-orange text-white font-semibold rounded-xl hover:bg-brand-orange-dark transition-colors text-sm tracking-wide"
            >
              Reservar Mesa
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="dice"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <D6Icon size={28} className="text-brand-orange" />
                </motion.div>
              ) : (
                <motion.div
                  key="hamburger"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-1.5"
                >
                  <span className="w-6 h-0.5 bg-brand-teal-dark rounded-full" />
                  <span className="w-5 h-0.5 bg-brand-teal-dark rounded-full" />
                  <span className="w-6 h-0.5 bg-brand-teal-dark rounded-full" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-stone-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-lg font-heading tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? 'bg-brand-orange/10 text-brand-orange'
                      : 'text-brand-dark hover:bg-stone-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/reservas"
                className="block mt-4 px-4 py-3 bg-brand-orange text-white text-center font-semibold rounded-xl text-lg"
              >
                Reservar Mesa
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ path, label, active }: { path: string; label: string; active: boolean }) {
  return (
    <Link
      to={path}
      className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors group"
    >
      <span className={active ? 'text-brand-orange' : 'text-brand-dark group-hover:text-brand-orange'}>
        {label}
      </span>
      {active && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-orange rounded-full"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  )
}
