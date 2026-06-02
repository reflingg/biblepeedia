import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/about',   label: 'About' },
  { to: '/events',  label: 'Events' },
  { to: '/donate',  label: 'Donate' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border-col px-[5vw] flex items-center justify-between h-24 transition-shadow duration-300 ${scrolled ? 'shadow-bp-sm' : ''}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/images/logo/Biblepeedia.png"
            alt="Biblepeedia"
            style={{ width: 260, height: 90, objectFit: 'cover', objectPosition: 'center center' }}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-sm font-medium no-underline transition-colors duration-200 relative pb-0.5 group ${pathname === to ? 'text-primary-blue' : 'text-text-muted hover:text-primary-blue'}`}
              >
                {label}
                <span className={`absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary-blue rounded-full transition-transform duration-200 origin-left ${pathname === to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/donate"
            className="hidden md:inline-flex items-center gap-2 bg-primary-gold text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-gold-dark transition-all duration-200 hover:-translate-y-px no-underline"
          >
            Support Us
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden border border-border-col rounded-lg px-2.5 py-1.5 text-gray-800 hover:bg-light-blue transition-colors duration-200"
          >
            <svg viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-4">
              <line x1="0" y1="1" x2="18" y2="1" />
              <line x1="0" y1="7" x2="18" y2="7" />
              <line x1="0" y1="13" x2="18" y2="13" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-24 left-0 right-0 z-40 bg-white border-b border-border-col overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100 py-2 pb-4 shadow-bp-md' : 'max-h-0 opacity-0'}`}>
        <div className="px-[5vw] flex flex-col">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`py-3 border-b border-border-col text-base font-medium no-underline transition-colors duration-200 last:border-b-0 ${pathname === to ? 'text-primary-blue' : 'text-gray-800 hover:text-primary-blue'}`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="mt-3 inline-flex items-center justify-center gap-2 bg-primary-gold text-gray-900 font-semibold text-sm px-5 py-3 rounded-lg no-underline"
          >
            Support Us
          </Link>
        </div>
      </div>
    </>
  )
}
