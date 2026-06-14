'use client'

import { useEffect, useRef, useState } from 'react'

interface Certificate {
  title: string
  issuer: string
  year: string
  description: string
  credentialId?: string
  link: string
  featured?: boolean
}

const certificates: Certificate[] = [
  {
    title: 'MySQL, PostgreSQL. Microsoft SQL & Oracle SQL',
    issuer: 'Udemy',
    year: '2024',
    description:
       'Relational database management systems used for storing, managing, and processing structured data efficiently for web, business, and enterprise applications.',
    credentialId: 'META-RD-2024-001',

    // PDF inside public folder
    link: '/abriocert.png',

    featured: true,
  },
  {
    title: 'Web Development Bootcamp with HTML CSS PHP MySQL WordPress',
    issuer: 'Udemy',
    year: '2024',
    description:
  'Comprehensive web development training covering responsive website creation, backend development with PHP & MySQL, and WordPress website management.',
    credentialId: 'FCC-FE-2023-482',
    link: '/abriocert1.png',
  },
  {
  title: 'Certificate of Recognition – First Runner Up',
  issuer: 'Holy Cross of Davao College',
  year: '2026',
  description:
    'Awarded to the eVital: Prototype Health Check-Up Kiosk for Local Communities as First Runner Up during TechnoFair 2026 under Sustainable Development Goals (SDG) 3 – Good Health and Well-Being and SDG 9 – Industry, Innovation, and Infrastructure.',
  credentialId: 'TECHNOFAIR-2026-FRU',
  link: '/abriocert3.jpg',
},
 
]

function CertCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const particleCount = 90
    const maxDistance = 120

    interface Particle { x: number; y: number; vx: number; vy: number }

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }))

    const draw = () => {
      ctx.globalAlpha = 0.2
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = '#00ff87'
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,255,135,${1 - dist / maxDistance})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}

function CertificateCard({ cert, index }: { cert: Certificate; index: number }) {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setVisible(true), index * 100)
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`relative bg-[rgba(0,20,10,0.75)] border border-[#00ff87]/20 p-7 backdrop-blur-md transition-all duration-500 flex flex-col gap-3 font-mono
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      hover:border-[#00ff87]/60 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,135,0.15)]`}
    >

      {cert.featured && (
        <div className="inline-flex items-center gap-1 text-[10px] tracking-[0.25em] text-[#00ff87] bg-[#00ff87]/10 border border-[#00ff87]/40 px-2 py-[2px] w-fit uppercase">
          ● Featured
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#00ff87]/10 border border-[#00ff87]/40 flex items-center justify-center text-[#00ff87] text-xs font-bold">
          {cert.issuer.split(' ').map((w) => w[0]).join('').slice(0,2)}
        </div>

        <div className="flex flex-col">
          <span className="text-[11px] text-white/70 uppercase">{cert.issuer}</span>
          <span className="text-[10px] text-[#00ff87]/60">{cert.year}</span>
        </div>
      </div>

      <h3 className="text-sm font-bold text-white uppercase tracking-wide">
        {cert.title}
      </h3>

      <p className="text-xs text-white/50 leading-relaxed">
        {cert.description}
      </p>

      {cert.credentialId && (
        <div className="flex items-center gap-2 bg-[#00ff87]/5 border-l-2 border-[#00ff87]/30 px-2 py-1">
          <span className="text-[9px] tracking-[0.2em] text-[#00ff87]/60 uppercase">
            ID
          </span>
          <span className="text-[10px] text-white/40">
            {cert.credentialId}
          </span>
        </div>
      )}

     {/* CERTIFICATE PREVIEW */}
<div className="mt-3 border border-[#00ff87]/20 overflow-hidden bg-white rounded-md p-2">
  <img
    src={cert.link}
    alt={cert.title}
    className="w-full h-[260px] object-cover object-top rounded-sm"
    draggable={false}
  />
</div>

<a
  href={cert.link}
  target="_blank"
  rel="noreferrer"
  className="mt-3 inline-flex items-center justify-center text-[10px] tracking-[0.25em] uppercase border border-[#00ff87]/40 text-[#00ff87] py-2 px-3 transition-all hover:bg-[#00ff87]/10 hover:text-white hover:shadow-[0_0_15px_rgba(0,255,135,0.3)]"
>
  Open Full Certificate
</a>

    </div>
  )
}

export default function Certificates() {
  const [sectionVisible, setSectionVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSectionVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const uniqueIssuers = Array.from(new Set(certificates.map((c) => c.issuer))).length
  const latestYear = Math.max(...certificates.map((c) => parseInt(c.year)))

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative bg-[#050a07] py-28 px-6 overflow-hidden font-mono"
    >

      <CertCanvas />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* LEFT-ALIGNED HEADER */}
        <div className={`mb-16 transition-all duration-700 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-[700px]">

            

            <h2 className="text-left text-[clamp(2rem,5vw,3.2rem)] font-black tracking-[0.12em] uppercase text-white font-[Orbitron]">
              CERTIFI <span className="text-[#00ff87] drop-shadow-[0_0_20px_rgba(0,255,135,0.6)]">CATIONS</span>
            </h2>

            <p className="text-left text-[11px] tracking-[0.2em] text-[#00ff87]/40 uppercase mt-2">
              Professional Certifications & Achievements
            </p>

          </div>
        </div>

        {/* STATS */}
        <div className="flex justify-start gap-12 mb-12 flex-wrap">
          {[
            { number: certificates.length, label: 'Certificates' },
            { number: uniqueIssuers, label: 'Issuers' },
            { number: latestYear, label: 'Latest' },
          ].map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="text-3xl font-black text-[#00ff87] font-[Orbitron]">
                {stat.number}
              </div>
              <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.credentialId ?? cert.title} cert={cert} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}