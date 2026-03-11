'use client'

import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    label: 'DESIGN',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    skills: [
      { name: 'UI/UX Design', level: 92, desc: 'Figma, user research, prototyping' },
      { name: 'Design Systems', level: 85, desc: 'Component libraries, tokens, documentation' },
      { name: 'Interaction Design', level: 88, desc: 'Micro-animations, transitions, flow' },
      { name: 'Wireframing', level: 94, desc: 'Lo-fi to hi-fi prototypes' },
    ],
  },
  {
    label: 'FRONTEND',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: 'React', level: 95, desc: 'Hooks, context, advanced patterns' },
      { name: 'Next.js', level: 90, desc: 'App router, SSR, SSG, API routes' },
      { name: 'TypeScript', level: 85, desc: 'Type safety, generics, utilities' },
      { name: 'CSS / Tailwind', level: 92, desc: 'Animations, responsive, custom themes' },
    ],
  },
  {
    label: 'TOOLCHAIN',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      { name: 'Figma', level: 95, desc: 'Prototyping, auto-layout, variables' },
      { name: 'Git / GitHub', level: 88, desc: 'Version control, CI/CD workflows' },
      { name: 'Node.js', level: 75, desc: 'APIs, middleware, backend logic' },
      { name: 'Framer Motion', level: 82, desc: 'Complex animations, gestures' },
    ],
  },
]

function SkillBar({ name, level, desc, visible }: { name: string; level: number; desc: string; visible: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-baseline mb-2">
        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '12px',
            color: hovered ? '#00ff87' : 'rgba(200,240,220,0.8)',
            transition: 'color 0.3s',
            letterSpacing: '0.05em',
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: '11px',
            color: '#00ff87',
            fontWeight: 700,
          }}
        >
          {level}%
        </span>
      </div>

      {/* Bar track */}
      <div
        className="relative mb-1 overflow-hidden"
        style={{
          height: '4px',
          background: 'rgba(0,255,135,0.08)',
          border: '1px solid rgba(0,255,135,0.1)',
        }}
      >
        {/* Fill */}
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, rgba(0,255,135,0.4), #00ff87)',
            width: visible ? `${level}%` : '0%',
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '2px 0 8px rgba(0,255,135,0.5)',
          }}
        />
        {/* Shimmer on fill */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: visible ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            backgroundSize: '60% 100%',
            animation: 'shimmer 2s infinite',
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>

      <p
        style={{
          fontSize: '11px',
          color: 'rgba(200,240,220,0.3)',
          fontFamily: 'DM Sans, sans-serif',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        {desc}
      </p>
    </div>
  )
}

const techBadges = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js',
  'Figma', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3',
  'REST APIs', 'Git', 'Vercel', 'Redux', 'GraphQL',
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,255,135,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-700"
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
            CAPABILITIES
          </div>
          <h2
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            SKILLS &amp; <span style={{ color: '#00ff87' }}>EXPERTISE</span>
          </h2>
        </div>

        {/* Skill categories */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.label}
              className="p-6 transition-all duration-500 group"
              style={{
                border: '1px solid rgba(0,255,135,0.12)',
                background: 'rgba(0,255,135,0.015)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(30px)',
                transitionDelay: `${catIdx * 150}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(0,255,135,0.3)'
                e.currentTarget.style.background = 'rgba(0,255,135,0.04)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,135,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(0,255,135,0.12)'
                e.currentTarget.style.background = 'rgba(0,255,135,0.015)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div style={{ color: '#00ff87' }}>{category.icon}</div>
                <span
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#e0ffe8',
                    letterSpacing: '0.2em',
                  }}
                >
                  {category.label}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: 'rgba(0,255,135,0.15)' }}
                />
              </div>

              {/* Skills list */}
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    desc={skill.desc}
                    visible={visible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div
          className="transition-all duration-700 delay-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)' }}
        >
          <div
            className="text-center mb-6"
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'rgba(0,255,135,0.3)',
            }}
          >
            // TECH_STACK
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge, i) => (
              <span
                key={badge}
                className="transition-all duration-200 cursor-default"
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  color: 'rgba(0,255,135,0.5)',
                  border: '1px solid rgba(0,255,135,0.1)',
                  padding: '5px 14px',
                  background: 'rgba(0,255,135,0.02)',
                  transitionDelay: `${i * 30}ms`,
                  opacity: visible ? 1 : 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00ff87'
                  e.currentTarget.style.border = '1px solid rgba(0,255,135,0.4)'
                  e.currentTarget.style.background = 'rgba(0,255,135,0.08)'
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0,255,135,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(0,255,135,0.5)'
                  e.currentTarget.style.border = '1px solid rgba(0,255,135,0.1)'
                  e.currentTarget.style.background = 'rgba(0,255,135,0.02)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
