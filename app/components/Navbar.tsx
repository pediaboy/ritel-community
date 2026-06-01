'use client'
import { useState } from 'react'
import { Menu, X, TrendingUp, MoreVertical } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dotMenu, setDotMenu] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e1a]/90 backdrop-blur border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-400">
          <TrendingUp className="w-6 h-6" />
          RITEL COMMUNITY.ID
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400 transition">Beranda</Link>
          <Link href="/paket" className="hover:text-blue-400 transition">Paket VIP</Link>
          <Link href="/berita" className="hover:text-blue-400 transition">Berita</Link>
          <Link href="#chart" className="hover:text-blue-400 transition">Live Chart</Link>
          <Link href="#komunitas" className="hover:text-blue-400 transition">Komunitas</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block px-4 py-1.5 text-sm border border-blue-600 rounded-full hover:bg-blue-600/20 transition">Login</Link>
          <Link href="/register" className="hidden md:block px-4 py-1.5 text-sm bg-blue-600 rounded-full hover:bg-blue-700 transition">Daftar</Link>
          {/* Dot menu */}
          <div className="relative">
            <button onClick={() => setDotMenu(!dotMenu)} className="p-2 hover:bg-blue-900/30 rounded-full transition">
              <MoreVertical className="w-5 h-5 text-blue-400" />
            </button>
            {dotMenu && (
              <div className="absolute right-0 top-10 w-48 bg-[#111827] border border-blue-900/40 rounded-xl shadow-2xl py-2 z-50">
                <p className="px-4 py-1 text-xs text-slate-500 uppercase tracking-wider">Shortcut</p>
                <Link href="/paket" onClick={() => setDotMenu(false)} className="block px-4 py-2 text-sm hover:bg-blue-900/30 hover:text-blue-400 transition">💎 Paket VIP</Link>
                <Link href="#chart" onClick={() => setDotMenu(false)} className="block px-4 py-2 text-sm hover:bg-blue-900/30 hover:text-blue-400 transition">📈 Live Chart IHSG</Link>
                <Link href="#berita" onClick={() => setDotMenu(false)} className="block px-4 py-2 text-sm hover:bg-blue-900/30 hover:text-blue-400 transition">📰 Berita Pasar</Link>
                <Link href="#komunitas" onClick={() => setDotMenu(false)} className="block px-4 py-2 text-sm hover:bg-blue-900/30 hover:text-blue-400 transition">👥 Komunitas</Link>
                <Link href="/admin" onClick={() => setDotMenu(false)} className="block px-4 py-2 text-sm hover:bg-blue-900/30 hover:text-blue-400 transition">⚙️ Admin Panel</Link>
              </div>
            )}
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#0d1224] border-t border-blue-900/30 px-4 py-4 flex flex-col gap-3 text-sm">
          <Link href="/" onClick={() => setOpen(false)}>Beranda</Link>
          <Link href="/paket" onClick={() => setOpen(false)}>Paket VIP</Link>
          <Link href="/berita" onClick={() => setOpen(false)}>Berita</Link>
          <Link href="#chart" onClick={() => setOpen(false)}>Live Chart</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link href="/register" onClick={() => setOpen(false)} className="bg-blue-600 text-center py-2 rounded-full">Daftar</Link>
        </div>
      )}
    </nav>
  )
}
