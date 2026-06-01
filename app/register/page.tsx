import Navbar from '../components/Navbar'
import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] flex items-center justify-center px-4">
      <Navbar />
      <div className="w-full max-w-md glass-card rounded-2xl p-8 mt-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-blue-400 font-bold text-xl mb-2">
            <TrendingUp className="w-6 h-6" /> RITEL COMMUNITY.ID
          </div>
          <h1 className="text-2xl font-bold text-white">Daftar Akun</h1>
          <p className="text-slate-400 text-sm mt-1">Buat akun VIP kamu</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Nama Lengkap</label>
            <input type="text" placeholder="Nama kamu" className="w-full bg-[#0d1224] border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
            <input type="email" placeholder="email@kamu.com" className="w-full bg-[#0d1224] border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">No. WhatsApp</label>
            <input type="tel" placeholder="08xxxxxxxxxx" className="w-full bg-[#0d1224] border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-[#0d1224] border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition" />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition mt-2">
            Daftar Sekarang
          </button>
        </form>
        <p className="text-center text-slate-400 text-sm mt-6">
          Sudah punya akun? <Link href="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>
      </div>
    </main>
  )
}
