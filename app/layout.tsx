import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RITEL COMMUNITY.ID - Komunitas Trading Saham Indonesia',
  description: 'Platform trading saham terpercaya dengan sinyal realtime, analisa fundamental, dan panduan VIP untuk investor Indonesia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-[#0a0e1a] text-slate-200 min-h-screen">{children}</body>
    </html>
  )
}
