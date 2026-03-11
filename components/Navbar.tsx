'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CERTIFICATES', href: '#certificates' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['hero', 'about', 'skills', 'projects', 'certificates', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const middle = window.innerHeight / 2

if (rect.top <= middle && rect.bottom >= middle) {
            setActive(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5,10,7,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,255,135,0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              borderColor: '#00ff87',
              boxShadow: '0 0 10px rgba(0,255,135,0.3)',
            }}
          >
            <span
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '14px',
                color: '#00ff87',
                fontWeight: 700,
              }}
            >
              JL
            </span>
          </div>
          <span
            className="hidden sm:block"
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '11px',
              color: 'rgba(0,255,135,0.6)',
              letterSpacing: '0.2em',
            }}
          >
            ABRIO.DEV
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative group transition-all duration-300"
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: isActive ? '#00ff87' : 'rgba(0,255,135,0.45)',
                }}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    background: '#00ff87',
                    width: isActive ? '100%' : '0%',
                    boxShadow: isActive ? '0 0 8px #00ff87' : 'none',
                  }}
                />
                {/* Hover underline */}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{
                    background: 'rgba(0,255,135,0.4)',
                    width: '0%',
                  }}
                />
              </a>
            )
          })}
          <a
            href="#contact"
            className="px-4 py-2 text-xs transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: 'Space Mono, monospace',
              letterSpacing: '0.1em',
              border: '1px solid #00ff87',
              color: '#00ff87',
              boxShadow: '0 0 10px rgba(0,255,135,0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,135,0.1)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,135,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0,255,135,0.2)'
            }}
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: '#00ff87',
              transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: '#00ff87',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: '#00ff87',
              transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(5,10,7,0.98)',
          borderBottom: menuOpen ? '1px solid rgba(0,255,135,0.1)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                letterSpacing: '0.15em',
                color: 'rgba(0,255,135,0.7)',
                borderBottom: '1px solid rgba(0,255,135,0.08)',
                paddingBottom: '12px',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}