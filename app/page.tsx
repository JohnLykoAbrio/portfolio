import AnimatedBackground from '@/components/AnimatedBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'  // ← ADD
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return ( 
    <main className="relative min-h-screen" style={{ background: '#050a07' }}>
      <AnimatedBackground />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(180deg, #050a07 0%, transparent 100%)',
        }}
      />
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />  {/* ← ADD */}
        <Contact />
        <Footer />
      </div>
    </main>
  )
}