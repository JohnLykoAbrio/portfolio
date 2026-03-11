'use client'

import { useEffect, useState, useRef } from 'react'
import Image from "next/image"

const roles = ['UI/UX Designer', 'Frontend Developer', 'React Specialist', 'Next.js Engineer']

function TypingText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1500)
      return () => clearTimeout(t)
    }
    const current = texts[index]
    const timeout = deleting ? 60 : 100

    const t = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1))
        } else {
          setPause(true)
          setDeleting(true)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1))
        } else {
          setDeleting(false)
          setIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, timeout)
    return () => clearTimeout(t)
  }, [displayed, deleting, index, texts, pause])

  return (
    <span>
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          background: '#00ff87',
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
          animation: 'blink 1s step-end infinite',
        }}
      />
    </span>
  )
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,135,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 pointer-events-none" style={{ opacity: 0.4 }}>
        <svg width="60" height="60" fill="none">
          <path d="M0 60 L0 0 L60 0" stroke="#00ff87" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute top-20 right-8 pointer-events-none" style={{ opacity: 0.4 }}>
        <svg width="60" height="60" fill="none">
          <path d="M60 60 L60 0 L0 0" stroke="#00ff87" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-8 pointer-events-none" style={{ opacity: 0.4 }}>
        <svg width="60" height="60" fill="none">
          <path d="M0 0 L0 60 L60 60" stroke="#00ff87" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-8 pointer-events-none" style={{ opacity: 0.4 }}>
        <svg width="60" height="60" fill="none">
          <path d="M60 0 L60 60 L0 60" stroke="#00ff87" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="flex flex-col lg:flex-row items-start justify-between gap-8">          <div
            className="flex-1 transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
          {/* Status + Portfolio Label */}
<div className="mb-8 flex flex-col gap-1 pl-[10px]">

  {/* Available for work row */}
  {/* Status + Portfolio Label */}
<div className="mb-8 flex flex-col gap-3">

  {/* Available for work */}
  <div className="flex items-center gap-2 pl-[18px]">
    <span
      className="inline-block w-2 h-2 rounded-full"
      style={{
        background: '#00ff87',
        boxShadow: '0 0 8px #00ff87',
        animation: 'pulse 2s infinite',
        transform: 'translateY(5px)',
      }}
    />

    <span
      style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '11px',
        color: 'rgba(0,255,135,0.7)',
        letterSpacing: '0.10em',
        transform: 'translateY(5px)',
      }}
    >
      AVAILABLE FOR WORK
    </span>
  </div>

  {/* Portfolio label */}
  <div
    style={{
      fontFamily: 'Space Mono, monospace',
      fontSize: '12px',
      
      letterSpacing: '0.2em',
      color: 'rgba(0,255,135,0.5)',
      paddingLeft: '18px',
    }}
  >
    // PORTFOLIO_v2.0
  </div>
  </div>

</div>

            {/* Name */}
            <h1
              className="mb-3 leading-none"
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              JOHN LYKO
              <br />
              <span
                style={{
                  color: '#00ff87',
                  textShadow: '0 0 30px rgba(0,255,135,0.4)',
                }}
              >
                M. ABRIO
              </span>
            </h1>

            {/* Typing role */}
            <div
              className="mb-8"
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                color: 'rgba(0,255,135,0.8)',
                minHeight: '2rem',
              }}
            >
              <TypingText texts={roles} />
            </div>

            {/* Description */}
            <p
              className="mb-10 max-w-lg"
              style={{
                fontSize: '1rem',
                color: 'rgba(200,240,220,0.6)',
                lineHeight: 1.8,
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Crafting immersive digital experiences at the intersection of{' '}
              <span style={{ color: '#00ff87' }}>design</span> and{' '}
              <span style={{ color: '#00ff87' }}>technology</span>. Specializing in
              intuitive interfaces, performant React applications, and cutting-edge
              Next.js solutions.
            </p>

            {/* Skill chips */}
{/* Skill chips */}
          <div className="flex flex-wrap gap-3 mb-10 pl-[18px]">              
      {['UI/UX Design', 'React', 'Next.js', 'TypeScript', 'Figma'].map((skill) => (
                <span
                  key={skill}
                  style={{
                  
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    transform: 'translateY(-2px)',
                    color: 'rgba(0,255,135,0.7)',
                    border: '1px solid rgba(0,255,135,0.25)',
                    padding: '4px 12px',
                    background: 'rgba(0,255,135,0.04)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 px-8 py-4 transition-all duration-300"
                style={{
                  background: '#00ff87',
                  color: '#050a07',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,135,0.5)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                VIEW PROJECTS
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 px-8 py-4 transition-all duration-300"
                style={{
                  border: '1px solid rgba(0,255,135,0.4)',
                  color: '#00ff87',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0,255,135,0.08)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,135,0.2)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                CONTACT ME
              </a>
            </div>
          </div>

          {/* Right - Visual element */}
          <div
  className="flex-1 flex items-center justify-center transition-all duration-1000 delay-300 lg:pt-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(40px)',
            }}
          >
            <div className="relative">
              {/* Profile card */}
             <div
  className="relative w-96 h-96 lg:w-[420px] lg:h-[420px]"
                style={{
                  border: '1px solid rgba(0,255,135,0.2)',
                  background: 'rgba(0,255,135,0.02)',
                }}
              >
                {/* Corner accents */}
                {[
                  'top-0 left-0',
                  'top-0 right-0',
                  'bottom-0 left-0',
                  'bottom-0 right-0',
                ].map((pos, i) => (
                  <div
                    key={i}
                    className={`absolute ${pos} w-4 h-4`}
                    style={{ border: '2px solid #00ff87' }}
                  />
                ))}

                {/* Inner content */}
<div className="absolute inset-6 flex flex-col items-center justify-center gap-5">                  {/* Avatar placeholder */}
<div
className="w-48 h-48 rounded-full flex items-center justify-center overflow-hidden"  style={{
    background: 'radial-gradient(circle, rgba(0,255,135,0.1) 0%, rgba(0,255,135,0.02) 70%)',
    border: '2px solid rgba(0,255,135,0.3)',
    boxShadow: '0 0 30px rgba(0,255,135,0.1), inset 0 0 30px rgba(0,255,135,0.05)',
  }}
>
  <Image
    src="/profile.png"
    alt="John Lyko"
    width={1000}
    height={1000}
    className="object-cover w-full h-full rounded-full"
    priority
  />
</div>

                  <div className="text-center">
                    <div
                      style={{
                        fontFamily: 'Orbitron, monospace',
                        fontSize: '23px',
                        fontWeight: 700,
                        color: '#e0ffe8',
                        letterSpacing: '0.05em',
                      }}
                    >
                      JOHN LYKO ABRIO
                    </div>
                    <div
                      style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '10px',
                        color: 'rgba(0,255,135,0.6)',
                        letterSpacing: '0.2em',
                        marginTop: '4px',
                      }}
                    >
                      UI/UX · FRONTEND
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6">
                    {[
                      { num: '3+', label: 'YRS EXP' },
                      { num: '20+', label: 'PROJECTS' },
                      { num: 'none', label: 'CLIENTS' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div
                          style={{
                            fontFamily: 'Orbitron, monospace',
                            fontSize: '23px',
                            fontWeight: 700,
                            color: '#00ff87',
                          }}
                        >
                          {stat.num}
                        </div>
                        <div
                          style={{
                            fontFamily: 'Space Mono, monospace',
                            fontSize: '15px',
                            color: 'rgba(0,255,135,0.4)',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scanning line */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(0,255,135,0.6), transparent)',
                    animation: 'scan-down 3s linear infinite',
                  }}
                />
              </div>

              {/* Floating orbit rings */}
              <div
                className="absolute inset-0 -m-8 rounded-full pointer-events-none"
                style={{
                  border: '1px solid rgba(0,255,135,0.08)',
                  animation: 'spin 20s linear infinite',
                }}
              />
              <div
                className="absolute inset-0 -m-16 rounded-full pointer-events-none"
                style={{
                  border: '1px solid rgba(0,255,135,0.05)',
                  animation: 'spin 30s linear infinite reverse',
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '9px',
              letterSpacing: '0.3em',
              color: 'rgba(0,255,135,0.3)',
            }}
          >
            SCROLL
          </div>
          <div
            className="w-px h-12"
            style={{
              background: 'linear-gradient(180deg, rgba(0,255,135,0.5), transparent)',
              animation: 'pulse 2s infinite',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-down {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
