'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'NexaFlow Dashboard',
    category: 'UI/UX Design · React',
    desc: 'Real-time analytics dashboard for fintech operations. Features live data visualization, custom chart components, and role-based access control.',
    tech: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    color: '#00ff87',
    status: 'LIVE',
    year: '2024',
  },
  {
    id: '02',
    title: 'Cipher E-Commerce',
    category: 'Next.js · Full Stack',
    desc: 'Modern e-commerce platform built with Next.js App Router, Stripe integration, and a headless CMS. Optimized for Core Web Vitals.',
    tech: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    color: '#00ff87',
    status: 'LIVE',
    year: '2024',
  },
  {
    id: '03',
    title: 'Orbit Design System',
    category: 'Design System · Figma',
    desc: 'Comprehensive design system with 200+ components, dark/light themes, design tokens, and full Figma-to-code documentation.',
    tech: ['Figma', 'Storybook', 'React', 'CSS Variables'],
    color: '#00ff87',
    status: 'WIP',
    year: '2025',
  },
  {
    id: '04',
    title: 'Pulse Health App',
    category: 'Mobile UI/UX · React Native',
    desc: 'Health tracking app with intuitive data entry flows, biometric visualizations, and personalized wellness recommendations.',
    tech: ['React Native', 'Expo', 'HealthKit', 'Figma'],
    color: '#00ff87',
    status: 'LIVE',
    year: '2023',
  },
  {
    id: '05',
    title: 'Aether SaaS Platform',
    category: 'Next.js · SaaS',
    desc: 'Multi-tenant SaaS platform with subscription management, team workspaces, and an AI-powered workflow automation engine.',
    tech: ['Next.js', 'Auth.js', 'OpenAI', 'Stripe'],
    color: '#00ff87',
    status: 'LIVE',
    year: '2024',
  },
  {
    id: '06',
    title: 'VoidType Portfolio',
    category: 'Creative Dev · CSS Art',
    desc: 'Award-winning creative portfolio with WebGL backgrounds, custom cursor effects, and experimental typography animations.',
    tech: ['Three.js', 'GSAP', 'WebGL', 'Next.js'],
    color: '#00ff87',
    status: 'CONCEPT',
    year: '2025',
  },
]

function ProjectCard({ project, index, visible }: {
  project: typeof projects[0]; index: number; visible: boolean
}) {
  const [hovered, setHovered] = useState(false)

  const statusColors: Record<string, string> = {
    LIVE: '#00ff87',
    WIP: '#ffb800',
    CONCEPT: '#00aaff',
  }

  return (
    <div
      className="relative group transition-all duration-500 cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 100}ms`,
        border: hovered ? '1px solid rgba(0,255,135,0.35)' : '1px solid rgba(0,255,135,0.1)',
        background: hovered ? 'rgba(0,255,135,0.04)' : 'rgba(0,255,135,0.01)',
        boxShadow: hovered ? '0 0 40px rgba(0,255,135,0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top bar */}
      <div
        className="h-px w-full transition-all duration-500"
        style={{
          background: hovered
            ? 'linear-gradient(90deg, transparent, #00ff87, transparent)'
            : 'transparent',
          boxShadow: hovered ? '0 0 8px #00ff87' : 'none',
        }}
      />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '11px',
                color: 'rgba(0,255,135,0.35)',
                letterSpacing: '0.2em',
              }}
            >
              PROJECT_{project.id}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: statusColors[project.status] || '#00ff87' }}
            />
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '9px',
                color: statusColors[project.status] || '#00ff87',
                letterSpacing: '0.15em',
              }}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Visual placeholder */}
        <div
          className="mb-5 relative overflow-hidden flex items-center justify-center"
          style={{
            height: '140px',
            background: 'rgba(0,255,135,0.02)',
            border: '1px solid rgba(0,255,135,0.07)',
          }}
        >
          {/* Abstract circuit art */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 140"
            preserveAspectRatio="xMidYMid slice"
            style={{ opacity: 0.25 }}
          >
            <defs>
              <pattern id={`grid-${project.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00ff87" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="300" height="140" fill={`url(#grid-${project.id})`} />
            <circle cx="150" cy="70" r="40" fill="none" stroke="#00ff87" strokeWidth="0.5" />
            <circle cx="150" cy="70" r="25" fill="none" stroke="#00ff87" strokeWidth="0.3" />
            <line x1="50" y1="70" x2="110" y2="70" stroke="#00ff87" strokeWidth="0.5" />
            <line x1="190" y1="70" x2="250" y2="70" stroke="#00ff87" strokeWidth="0.5" />
            <line x1="150" y1="20" x2="150" y2="45" stroke="#00ff87" strokeWidth="0.5" />
            <line x1="150" y1="95" x2="150" y2="120" stroke="#00ff87" strokeWidth="0.5" />
            <text x="150" y="75" textAnchor="middle" fill="#00ff87" fontSize="12" fontFamily="Orbitron" fontWeight="bold">
              {project.id}
            </text>
          </svg>

          {/* Project index big number */}
          <div
            className="absolute"
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '80px',
              fontWeight: 900,
              color: 'rgba(0,255,135,0.04)',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            {project.id}
          </div>

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <div className="flex gap-3">
              <button
                className="px-4 py-2 text-xs transition-all"
                style={{
                  background: '#00ff87',
                  color: '#050a07',
                  fontFamily: 'Space Mono, monospace',
                  letterSpacing: '0.1em',
                }}
              >
                VIEW
              </button>
              <button
                className="px-4 py-2 text-xs transition-all"
                style={{
                  border: '1px solid #00ff87',
                  color: '#00ff87',
                  fontFamily: 'Space Mono, monospace',
                  letterSpacing: '0.1em',
                  background: 'rgba(0,255,135,0.05)',
                }}
              >
                CODE
              </button>
            </div>
          </div>
        </div>

        {/* Category */}
        <div
          className="mb-2"
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: 'rgba(0,255,135,0.5)',
          }}
        >
          {project.category}
        </div>

        {/* Title */}
        <h3
          className="mb-3 transition-all duration-300"
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: '16px',
            fontWeight: 700,
            color: hovered ? '#00ff87' : '#e0ffe8',
            letterSpacing: '0.03em',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="mb-4"
          style={{
            fontSize: '12.5px',
            color: 'rgba(200,240,220,0.5)',
            lineHeight: 1.7,
          }}
        >
          {project.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '9px',
                letterSpacing: '0.08em',
                color: 'rgba(0,255,135,0.45)',
                border: '1px solid rgba(0,255,135,0.12)',
                padding: '2px 8px',
                background: 'rgba(0,255,135,0.02)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Year */}
        <div
          className="mt-4 pt-4"
          style={{ borderTop: '1px solid rgba(0,255,135,0.07)' }}
        >
          <span
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '10px',
              color: 'rgba(0,255,135,0.25)',
              letterSpacing: '0.15em',
            }}
          >
            {project.year}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const [filter, setFilter] = useState('ALL')
  const ref = useRef<HTMLElement>(null)

  const filters = ['ALL', 'UI/UX', 'REACT', 'NEXT.JS', 'DESIGN']

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)' }}
        >
          <div
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: 'rgba(0,255,135,0.5)',
              marginBottom: '12px',
            }}
          >
            WORK
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
              }}
            >
              SELECTED <span style={{ color: '#00ff87' }}>PROJECTS</span>
            </h2>
            <a
              href="#"
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: 'rgba(0,255,135,0.6)',
                borderBottom: '1px solid rgba(0,255,135,0.3)',
                paddingBottom: '2px',
                whiteSpace: 'nowrap',
              }}
            >
              VIEW ALL →
            </a>
          </div>
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="transition-all duration-200"
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                letterSpacing: '0.15em',
                padding: '6px 16px',
                border: f === filter ? '1px solid #00ff87' : '1px solid rgba(0,255,135,0.15)',
                color: f === filter ? '#00ff87' : 'rgba(0,255,135,0.4)',
                background: f === filter ? 'rgba(0,255,135,0.08)' : 'transparent',
                boxShadow: f === filter ? '0 0 10px rgba(0,255,135,0.1)' : 'none',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
