'use client'

import { useEffect, useRef, useState } from 'react'

const socials = [
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.404 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.471c.23-.47 3.06-5.952 8.35-7.68.176-.045.356-.09.53-.127-.34-.77-.7-1.537-1.07-2.29C6.93 9.11 2.18 9.16 1.73 9.17h-.04c.003 3.545 1.24 6.79 3.315 9.31zm5.11-16.285c.55.996 1.077 2.01 1.54 3.01C14.147 5.55 17.006 4.43 17.87 4.1c-1.59-1.43-3.68-2.32-5.87-2.4zM16.957 5.1c-.94.36-3.615 1.408-6.69 3.022.02.06.04.11.06.17l.05.13c3.344-.42 6.677.264 6.97.33C17.27 7.327 17.17 6.15 16.957 5.1zm1.123 3.22c-.31-.073-3.72-.825-7.18-.38-.013 0-.025.003-.036.004.36.95.69 1.91.97 2.86 3.2-.58 5.97.44 6.32.572-.08-1.064-.46-2.063-1.07-3.056z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSending(true)

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (data.success) {
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    } else {
      alert('Failed to send message.')
    }
  } catch (err) {
    console.error(err)
    alert('Something went wrong.')
  }

  setSending(false)
}

  const inputStyle = {
    width: '100%',
    background: 'rgba(0,255,135,0.02)',
    border: '1px solid rgba(0,255,135,0.15)',
    color: '#e0ffe8',
    padding: '12px 16px',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.3s',
  }

  const labelStyle = {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    letterSpacing: '0.2em',
    color: 'rgba(0,255,135,0.5)',
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,255,135,0.04) 0%, transparent 70%)',
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
            GET IN TOUCH
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
            LET&apos;S BUILD SOMETHING <br />
            <span style={{ color: '#00ff87' }}>EXTRAORDINARY</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left - Info */}
          <div
            className="lg:col-span-2 transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-30px)' }}
          >
            <p
              className="mb-10"
              style={{
                fontSize: '1rem',
                color: 'rgba(200,240,220,0.55)',
                lineHeight: 1.9,
              }}
            >
              Whether you have a project in mind, want to collaborate, or just
              want to say hello my inbox is always open. I&apos;m currently
              available for freelance work and exciting opportunities.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: 'EMAIL',
                  value: 'abriojohnlyko@gmail.com',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: 'LOCATION',
                  value: 'Davao City, Philippines',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: 'AVAILABILITY',
                  value: 'Open to opportunities',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="mt-0.5"
                    style={{ color: '#00ff87' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '9px',
                        letterSpacing: '0.2em',
                        color: 'rgba(0,255,135,0.4)',
                        marginBottom: '4px',
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: '14px', color: 'rgba(200,240,220,0.8)' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <div
                className="mb-4"
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'rgba(0,255,135,0.3)',
                }}
              >
                // FIND ME ON
              </div>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    className="flex items-center justify-center w-10 h-10 transition-all duration-300"
                    style={{
                      border: '1px solid rgba(0,255,135,0.15)',
                      color: 'rgba(0,255,135,0.5)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.border = '1px solid rgba(0,255,135,0.5)'
                      e.currentTarget.style.color = '#00ff87'
                      e.currentTarget.style.background = 'rgba(0,255,135,0.08)'
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(0,255,135,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.border = '1px solid rgba(0,255,135,0.15)'
                      e.currentTarget.style.color = 'rgba(0,255,135,0.5)'
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="lg:col-span-3 transition-all duration-700 delay-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(30px)' }}
          >
            <div
              className="p-8 relative"
              style={{
                border: '1px solid rgba(0,255,135,0.12)',
                background: 'rgba(0,255,135,0.015)',
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3" style={{ borderTop: '1px solid #00ff87', borderLeft: '1px solid #00ff87' }} />
              <div className="absolute top-0 right-0 w-3 h-3" style={{ borderTop: '1px solid #00ff87', borderRight: '1px solid #00ff87' }} />
              <div className="absolute bottom-0 left-0 w-3 h-3" style={{ borderBottom: '1px solid #00ff87', borderLeft: '1px solid #00ff87' }} />
              <div className="absolute bottom-0 right-0 w-3 h-3" style={{ borderBottom: '1px solid #00ff87', borderRight: '1px solid #00ff87' }} />

              <div
                className="mb-6"
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  color: 'rgba(0,255,135,0.35)',
                }}
              >
                // SEND MESSAGE
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={labelStyle}>NAME</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your name"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid rgba(0,255,135,0.45)'
                        e.target.style.boxShadow = '0 0 15px rgba(0,255,135,0.08)'
                        e.target.style.background = 'rgba(0,255,135,0.04)'
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid rgba(0,255,135,0.15)'
                        e.target.style.boxShadow = 'none'
                        e.target.style.background = 'rgba(0,255,135,0.02)'
                      }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>EMAIL</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Enter your email address"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid rgba(0,255,135,0.45)'
                        e.target.style.boxShadow = '0 0 15px rgba(0,255,135,0.08)'
                        e.target.style.background = 'rgba(0,255,135,0.04)'
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid rgba(0,255,135,0.15)'
                        e.target.style.boxShadow = 'none'
                        e.target.style.background = 'rgba(0,255,135,0.02)'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label style={labelStyle}>PHONE(OPTIONAL)</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Enter your phone number"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.border = '1px solid rgba(0,255,135,0.45)'
                      e.target.style.boxShadow = '0 0 15px rgba(0,255,135,0.08)'
                      e.target.style.background = 'rgba(0,255,135,0.04)'
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '1px solid rgba(0,255,135,0.15)'
                      e.target.style.boxShadow = 'none'
                      e.target.style.background = 'rgba(0,255,135,0.02)'
                    }}
                  />
                </div>

                <div className="mb-8">
                  <label style={labelStyle}>MESSAGE</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="write your message here..."
                    style={{ ...inputStyle, resize: 'vertical' as const, minHeight: '120px' }}
                    onFocus={(e) => {
                      e.target.style.border = '1px solid rgba(0,255,135,0.45)'
                      e.target.style.boxShadow = '0 0 15px rgba(0,255,135,0.08)'
                      e.target.style.background = 'rgba(0,255,135,0.04)'
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '1px solid rgba(0,255,135,0.15)'
                      e.target.style.boxShadow = 'none'
                      e.target.style.background = 'rgba(0,255,135,0.02)'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 flex items-center justify-center gap-3 transition-all duration-300"
                  style={{
                    background: sent ? 'rgba(0,255,135,0.15)' : '#00ff87',
                    color: sent ? '#00ff87' : '#050a07',
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    border: sent ? '1px solid #00ff87' : 'none',
                    opacity: sending ? 0.7 : 1,
                    cursor: sending ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!sending && !sent) {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,135,0.4)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 11-6.219-8.56" />
                      </svg>
                      TRANSMITTING...
                    </>
                  ) : sent ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      MESSAGE SENT
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
