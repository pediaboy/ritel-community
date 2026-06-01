import Navbar from '../components/Navbar'
import LiveChat from '../components/LiveChat'
import { Check, Crown, Bot, Users, Zap } from 'lucide-react'

const pakets = [
  {
    nama: 'Starter', harga: 100000, warna: 'blue', highlight: false,
    fitur: ['Berita pasar realtime', 'Live Chart IHSG', 'Panduan dasar trading', 'Grup WA Starter', 'Support WA'],
    wa: 'Starter+Rp100K', deskripsi: 'Cocok untuk pemula yang baru mulai belajar investasi saham.'
  },
  {
    nama: 'Basic', harga: 200000, warna: 'blue', highlight: false,
    fitur: ['Semua fitur Starter', 'Sinyal saham basic', 'Panduan fundamental', 'Watchlist rekomendasi', 'Grup WA Basic'],
    wa: 'Basic+Rp200K', deskripsi: 'Untuk investor yang ingin mulai aktif trading dengan panduan sinyal.'
  },
  {
    nama: 'Silver', harga: 350000, warna: 'slate', highlight: false,
    fitur: ['Semua fitur Basic', 'Analisa bagger saham', 'Money management', 'Modul value investing', 'Grup WA Silver'],
    wa: 'Silver+Rp350K', deskripsi: 'Upgrade skill dengan analisa bagger dan money management profesional.'
  },
  {
    nama: 'Gold', harga: 500000, warna: 'yellow', highlight: false,
    fitur: ['Semua fitur Silver', 'Risk management lengkap', 'Psikologi & emosional trading', 'Sinyal entry/TP/SL', 'Analisa teknikal + fundamental', 'Grup WA Gold'],
    wa: 'Gold+Rp500K', deskripsi: 'Paket komprehensif dengan risk management dan psikologi trading.'
  },
  {
    nama: 'Platinum', harga: 750000, warna: 'purple', highlight: true,
    fitur: ['Semua fitur Gold', '🤖 AI Agent Trading', 'Sinyal premium realtime', 'Panduan portofolio', 'Priority support', 'Grup WA Platinum VIP'],
    wa: 'Platinum+Rp750K', deskripsi: 'Akses AI Agent eksklusif untuk analisa saham instan kapan saja.',
    badge: 'BEST VALUE'
  },
  {
    nama: 'Pro', harga: 750000, warna: 'cyan', highlight: false,
    fitur: ['Semua fitur Gold', '🤖 AI Agent Pro', 'Sinyal pro harian', 'Screener saham custom', 'Webinar bulanan', 'Grup WA Pro'],
    wa: 'Pro+Rp750K', deskripsi: 'Untuk trader aktif dengan AI Pro dan sinyal harian yang konsisten.'
  },
  {
    nama: 'Elite', harga: 1000000, warna: 'gold', highlight: true,
    fitur: ['SEMUA AKSES PENUH', '🤖 AI Agent Elite (Priority)', 'Sinyal VIP realtime', 'Arahan entry/antri/TP/SL', 'Konsultasi 1-on-1', 'Akses semua modul', 'Grup WA Elite Exclusive'],
    wa: 'Elite+Rp1.000.000', deskripsi: 'Paket terlengkap dengan akses penuh semua fitur dan konsultasi pribadi.',
    badge: 'PREMIUM'
  },
]

const colorMap: Record<string, string> = {
  blue: 'border-blue-500/40 bg-blue-500/5',
  slate: 'border-slate-500/40 bg-slate-500/5',
  yellow: 'border-yellow-500/40 bg-yellow-500/5',
  purple: 'border-purple-500/40 bg-purple-500/5',
  cyan: 'border-cyan-500/40 bg-cyan-500/5',
  gold: 'border-amber-400/40 bg-amber-400/5',
}
const btnMap: Record<string, string> = {
  blue: 'bg-blue-600 hover:bg-blue-700',
  slate: 'bg-slate-600 hover:bg-slate-700',
  yellow: 'bg-yellow-600 hover:bg-yellow-700',
  purple: 'bg-purple-600 hover:bg-purple-700',
  cyan: 'bg-cyan-600 hover:bg-cyan-700',
  gold: 'bg-amber-500 hover:bg-amber-600',
}

export default function PaketPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-white mb-4">Semua Paket VIP</h1>
          <p className="text-slate-400 text-lg">Pilih paket yang sesuai dengan kebutuhan trading lu</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
            <Users className="w-4 h-4" /> Setiap paket include grup WhatsApp eksklusif
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pakets.map((p) => (
            <div key={p.nama} className={`relative rounded-2xl border p-7 transition-all hover:scale-[1.02] ${colorMap[p.warna]} ${p.highlight ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-900/20' : ''}`}>
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">{p.badge}</span>
                </div>
              )}
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-white">{p.nama}</h2>
                {p.nama === 'Elite' && <Crown className="w-6 h-6 text-amber-400" />}
                {(p.nama === 'Platinum' || p.nama === 'Pro') && <Bot className="w-6 h-6 text-purple-400" />}
              </div>
              <p className="text-slate-400 text-sm mb-4">{p.deskripsi}</p>
              <div className="mb-5">
                <span className="text-3xl font-extrabold text-white">Rp {p.harga.toLocaleString('id-ID')}</span>
                <span className="text-slate-400 text-sm">/bulan</span>
              </div>
              <ul className="space-y-2.5 mb-7">
                {p.fitur.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/6282218723401?text=Halo%2C%20saya%20ingin%20order%20paket%20${encodeURIComponent(p.wa)}`} target="_blank" rel="noopener noreferrer"
                className={`block text-center w-full py-3 text-white font-semibold rounded-xl transition ${btnMap[p.warna]}`}>
                Order via WhatsApp
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-slate-400 text-sm">
          <p>Ada pertanyaan? Hubungi kami di <a href="https://wa.me/6282218723401" className="text-blue-400 hover:underline">WA 082218723401</a> atau Instagram <a href="https://instagram.com/elthoriqqqq_" className="text-blue-400 hover:underline">@elthoriqqqq_</a></p>
        </div>
      </div>
      <LiveChat />
    </main>
  )
}
