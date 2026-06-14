'use client'

import { useEffect, useRef, useState } from 'react'

const timeline = [
  { year: '2014', event: 'Cornelio C. Reta Elementary School Reta Ave, Bangoy District, Davao City' },
  { year: '2017', event: 'F Bangoy National High School Sasa, Davao City' },
  { year: '2020', event: 'Holy Child College of Davao, Mintal Davao City' },
  { year: '2026', event: 'Holy Cross of Davao College, Davao City' },
]

const features = [
  { icon: '◈', title: 'Design Thinking', desc: 'Human-centered approach' },
  { icon: '◎', title: 'Clean Code', desc: 'Readable and scalable' },
  { icon: '◉', title: 'Performance', desc: 'Optimized applications' },
  { icon: '◐', title: 'Innovation', desc: 'Creative solutions' },
]

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    )

    const element = ref.current
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">

      {/* Section Label */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-[#00ff87]/20 font-mono">
        // SECTION_02
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="text-[11px] tracking-[0.3em] text-[#00ff87]/50 font-mono mb-3">
            ABOUT ME
          </div>

          <h2 className="font-extrabold text-white leading-tight text-[clamp(2rem,4vw,3.5rem)]">
            BUILDING THE <span className="text-[#00ff87]">FUTURE</span>
            <br />
            ONE PIXEL AT A TIME
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

            <p className="text-[1.05rem] text-green-100/70 leading-relaxed">
              Hello! I'm <span className="text-[#00ff87]">John Lyko M. Abrio</span>, a dedicated UI/UX Designer
              and Frontend Developer focused on building modern, responsive, and
              user-friendly web interfaces.
            </p>

            <p className="text-green-100/55 leading-relaxed">
              My technical expertise includes React, Next.js, and Tailwind CSS,
              which I use to develop scalable and efficient frontend applications.
            </p>

            <p className="text-green-100/55 leading-relaxed">
              I also work with 3D design, exploring innovative visual approaches
              that bring depth and creativity to digital projects.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="p-4 border border-[#00ff87]/10 bg-[#00ff87]/[0.02] hover:border-[#00ff87]/30 hover:bg-[#00ff87]/[0.05] transition"
                >
                  <div className="text-[#00ff87] text-xl mb-2">{item.icon}</div>

                  <div className="text-xs text-green-50 font-semibold mb-1">
                    {item.title}
                  </div>

                  <div className="text-[12px] text-green-100/40">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            <div className="text-[11px] tracking-[0.2em] text-[#00ff87]/40 font-mono mb-6">
              // EDUCATIONAL BACKGROUND
            </div>

            <div className="relative">

              {/* Vertical Line */}
              <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff87]/40 to-[#00ff87]/5" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className={`flex gap-6 items-start transition-all duration-500 ${
                      visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                    }`}
                    style={{ transitionDelay: `${i * 100 + 600}ms` }}
                  >
                    <div className="text-[#00ff87] font-bold text-xs min-w-[48px]">
                      {item.year}
                    </div>

                    <div className="w-2 h-2 bg-[#00ff87] shadow-[0_0_8px_#00ff87] mt-1.5" />

                    <p className="text-sm text-green-100/60 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex gap-4 flex-wrap">

              <a
  href="/CVabrio.pdf"
  download="CVabrio.pdf"
  className="px-6 py-3 border border-[#00ff87]/30 text-[#00ff87]/80 text-xs tracking-widest font-mono hover:bg-[#00ff87]/10 transition"
>
  DOWNLOAD CV
</a>

              <a
                href="/Abrio Resume (1).pdf"
                target="_blank"
                className="px-6 py-3 border border-[#00ff87]/30 text-[#00ff87]/80 text-xs tracking-widest font-mono hover:bg-[#00ff87]/10 transition"
              >
                MY RESUME
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}