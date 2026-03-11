import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Lyko M. Abrio | UI/UX Designer & Frontend Developer',
  description: 'Portfolio of John Lyko M. Abrio — UI/UX Designer and Frontend Developer specializing in React, Next.js and digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise antialiased" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
