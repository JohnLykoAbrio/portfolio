'use client'

export default function Footer() {
  return (
    <footer
      className="relative py-12 mt-16"
      style={{ borderTop: '1px solid rgba(0,255,135,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 flex items-center justify-center"
              style={{
                border: '1px solid rgba(0,255,135,0.3)',
                boxShadow: '0 0 8px rgba(0,255,135,0.15)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '11px',
                  color: '#00ff87',
                  fontWeight: 700,
                }}
              >
                JL
              </span>
            </div>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                color: 'rgba(0,255,135,0.3)',
                letterSpacing: '0.15em',
              }}
            >
              JOHN LYKO M. ABRIO
            </span>
          </div>

          <div
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              color: 'rgba(0,255,135,0.2)',
              letterSpacing: '0.1em',
              textAlign: 'center',
            }}
          >
            © {new Date().getFullYear()} · DESIGNED &amp; BUILT WITH ♥ IN THE PHILIPPINES
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00ff87', boxShadow: '0 0 6px #00ff87', animation: 'pulse 2s infinite' }} />
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                color: 'rgba(0,255,135,0.4)',
                letterSpacing: '0.1em',
              }}
            >
              AVAILABLE FOR WORK
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
