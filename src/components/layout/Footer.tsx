import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Logo } from '../icons/Logo'
import { D6Icon, MeepleIcon, CardIcon } from '../icons/GameIcons'

const footerLinks = [
  { label: 'Início', path: '/' },
  { label: 'Jogos', path: '/jogos' },
  { label: 'Eventos', path: '/eventos' },
  { label: 'Menu', path: '/menu' },
  { label: 'Reservas', path: '/reservas' },
]

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal hover:bg-brand-orange hover:text-white transition-colors"
    >
      {children}
    </motion.a>
  )
}

export function Footer() {
  return (
    <footer className="bg-brand-teal-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10"><D6Icon size={80} /></div>
        <div className="absolute bottom-10 right-20"><MeepleIcon size={60} /></div>
        <div className="absolute top-20 right-40"><CardIcon size={70} /></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Logo className="mb-6 [&_span]:text-white [&_.text-brand-orange]:text-brand-orange-light" />
            <p className="text-stone-300 text-sm leading-relaxed max-w-xs">
              Café, comunidade e os melhores board games & TCGs em Santo Tirso.
              O teu refúgio para jogadas épicas.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xl tracking-wider mb-4 text-brand-orange-light">
              NAVEGAR
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-stone-300 hover:text-brand-orange-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl tracking-wider mb-4 text-brand-orange-light">
              CONTACTOS
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <p>
                <span className="text-white font-medium">Morada:</span><br />
                Rua Exemplo, 123<br />
                4780 Santo Tirso
              </p>
              <p>
                <span className="text-white font-medium">Telefone:</span><br />
                +351 912 345 678
              </p>
              <p>
                <span className="text-white font-medium">Horário:</span><br />
                Ter-Sex: 14:00 - 23:00<br />
                Sáb-Dom: 11:00 - 00:00<br />
                Seg: Encerrado
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <SocialLink href="https://instagram.com" label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://facebook.com" label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://discord.com" label="Discord">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                </svg>
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-stone-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Velho Hábito Game Café. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
