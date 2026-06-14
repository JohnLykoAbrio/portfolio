'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'Evital Manual Dashboard',
    category: 'UI/UX Design · Next.js',
    desc: 'Interactive health kiosk dashboard with real-time monitoring, intuitive navigation, and a user-friendly interface for local community health services.',
    tech: ['UI/UX Design', 'Vercel', 'Next.js'],
    color: '#00ff87',
    year: '2026',
    image: '/project1.png',
    link: 'https://evitalcapstoneproject.vercel.app/',
  },
  {
    id: '02',
    title: 'Tristar Website',
    category: 'Next.js · UI/UX Design',
    desc: 'Modern corporate website with responsive layouts, smooth animations, and a clean user experience designed for branding and online presence.',
    tech: ['Next.js', 'UI/UX Design', 'Vercel'],
    color: '#00ff87',
    year: '2026',
    image: '/project2.png',
    link: 'https://tristar-hazel.vercel.app/',
  },
  {
    id: '03',
    title: 'Human Resource Information System',
    category: 'Next.js · Supabase',
    desc: 'Modern HR management platform with employee records, attendance tracking, authentication, and streamlined administrative workflows.',
    tech: ['Next.js', 'Supabase', 'Vercel', 'Prisma'],
    color: '#00ff87',
    year: '2026',
    image: '/project3.png',
  },
  {
    id: '04',
    title: 'Fuel Tracker Mobile App',
    category: 'Mobile UI/UX · React Native',
    desc: 'Smart fuel monitoring app that helps users track fuel expenses, monitor consumption history, and manage vehicle efficiency through an intuitive mobile interface.',
    tech: ['React Native', 'Snack.Expo', 'Firebase'],
    color: '#00ff87',
    year: '2025',
    image: '/project4.png',
    link: 'https://snack.expo.dev/@johnlykoabrio/advfinalproj',
  },
  {
    id: '05',
    title: 'Evital Feedback System',
    category: 'Next.js · Supabase',
  desc: 'Web-based feedback management system that collects user responses, stores data securely with Supabase, and provides an organized interface for monitoring community feedback.',
    tech: ['Next.js', 'Supabase', 'Prisma', 'Vercel'],
    color: '#00ff87',
    year: '2026',
    image: '/project5.png',
    
  },
  {
    id: '06',
    title: 'Evital Health Kiosk Prototype',
    category: 'Creative Dev · CSS Art',
    desc: 'eVital is a prototype health check-up kiosk designed for local communities that allows users to monitor basic health information such as height, weight, BMI, and vital signs through a fast, accurate, and user-friendly digital system.',
    tech: ['c++', 'Arduino', 'Sensor', '3D Printing'],
    color: '#00ff87',
    year: '2025',
    image: '/project6.jpg',
    
  },
]


function ProjectCard({
  project,
  index,
  visible,
}: {
  project: typeof projects[0]
  index: number
  visible: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative group transition-all duration-500 cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 100}ms`,
        border: hovered
          ? '1px solid rgba(0,255,135,0.35)'
          : '1px solid rgba(0,255,135,0.1)',
        background: hovered
          ? 'rgba(0,255,135,0.04)'
          : 'rgba(0,255,135,0.01)',
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
        {/* Header */}
        <div className="mb-4">
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

        {/* Project image */}
        <div
          className="mb-5 relative overflow-hidden"
          style={{
            height: '220px',
            border: '1px solid rgba(0,255,135,0.07)',
            background: 'rgba(0,255,135,0.02)',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
            style={{
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              opacity: hovered ? 0.35 : 0.85,
            }}
          />

          {/* Project index */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '80px',
              fontWeight: 900,
              color: 'rgba(0,255,135,0.08)',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            {project.id}
          </div>

          {/* Hover button */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-xs transition-all"
              style={{
                background: '#00ff87',
                color: '#050a07',
                fontFamily: 'Space Mono, monospace',
                letterSpacing: '0.1em',
              }}
            >
              VIEW PROJECT
            </a>
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
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-12 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
          }}
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
                border:
                  f === filter
                    ? '1px solid #00ff87'
                    : '1px solid rgba(0,255,135,0.15)',
                color:
                  f === filter
                    ? '#00ff87'
                    : 'rgba(0,255,135,0.4)',
                background:
                  f === filter
                    ? 'rgba(0,255,135,0.08)'
                    : 'transparent',
                boxShadow:
                  f === filter
                    ? '0 0 10px rgba(0,255,135,0.1)'
                    : 'none',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}