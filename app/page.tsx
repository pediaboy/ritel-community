import Navbar from './components/Navbar'
import LiveChat from './components/LiveChat'
import NewsSection from './components/NewsSection'
import Testimonials from './components/Testimonials'
import TradingViewChart from './components/TradingViewChart'
import Link from 'next/link'
import { Shield, TrendingUp, Users, Zap, Star, ChevronRight, Crown, Bot } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Pasar Aktif — IHSG Update Realtime
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Komunitas Trading Saham<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Terpercaya di Indonesia</span>
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Sinyal realtime, analisa fundamental mendalam, panduan VIP, dan AI Agent khusus untuk membantu perjalanan trading saham lu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/paket" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-900/40">
            Lihat Semua Paket
          </Link>
          <a href="https://wa.me/6282218723401?text=Halo%20Ritel%20Community%2C%20saya%20ingin%20bergabung!" target="_blank" rel="noopener noreferrer"
            className="px-8 py-3 border border-blue-600/50 hover:border-blue-400 text-blue-400 font-semibold rounded-full transition-all">
            Hubungi Kami
          </a>
        </div>
        <div className="flex items-center justify-center gap-8 mt-10 text-sm text-slate-400">
          <div className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-400" /> 5.000+ Member Aktif</div>
          <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" /> Rating 4.9/5</div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-400" /> Terpercaya Sejak 2022</div>
        </div>
      </section>

      {/* Chart IHSG */}
      <section id="chart" className="px-4 max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-white">Live Chart IHSG</h2>
          <span className="flex items-center gap-1 text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            REALTIME
          </span>
        </div>
        <div className="glass-card rounded-2xl overflow-hidden" style={{ height: '560px' }}>
          <TradingViewChart />
        </div>
      </section>

      {/* News */}
      <NewsSection />

      {/* Pricing Preview - Only Starter */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">Paket VIP Kami</h2>
            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          </div>
          <p className="text-slate-400">Mulai perjalanan trading dengan paket terjangkau</p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="glass-card rounded-2xl p-8 max-w-sm w-full border border-blue-500/30 hover:glow-blue transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-blue-400 font-bold text-lg">Starter</span>
              <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">Paling Terjangkau</span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">Rp 100K</span>
              <span className="text-slate-400 text-sm">/bulan</span>
            </div>
            <ul className="space-y-3 mb-6 text-sm text-slate-300">
              {['Akses berita pasar realtime', 'Live Chart IHSG', 'Panduan dasar trading', 'Grup WA Starter Community', 'Support via WhatsApp'].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/6282218723401?text=Halo%2C%20saya%20ingin%20order%20paket%20Starter%20Rp100K" target="_blank" rel="noopener noreferrer"
              className="block text-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition">
              Order Sekarang
            </a>
          </div>
        </div>
        <div className="text-center">
          <Link href="/paket" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition group">
            Lihat Semua Paket (hingga Rp 1.000.000)
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <TrendingUp className="w-6 h-6" />, title: 'Sinyal Realtime', desc: 'Arahan entry, antri, TP & SL akurat dari analis berpengalaman' },
            { icon: <Bot className="w-6 h-6" />, title: 'AI Agent Trading', desc: 'Tanya apa saja soal saham, dapat analisa instan dari AI' },
            { icon: <Crown className="w-6 h-6" />, title: 'Analisa Fundamental', desc: 'Panduan bagger, value investing, dan analisa emiten mendalam' },
            { icon: <Shield className="w-6 h-6" />, title: 'Risk Management', desc: 'Panduan money management dan psikologi trading untuk profit konsisten' },
          ].map((f, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-xl flex items-center justify-center text-blue-400 mb-4">{f.icon}</div>
              <h3 className="font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section id="komunitas" className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-10 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Siap Mulai Trading Lebih Cerdas?</h2>
          <p className="text-slate-400 mb-8">Bergabung dengan ribuan trader Indonesia yang sudah profit konsisten bersama Ritel Community</p>
          <a href="https://wa.me/6282218723401?text=Halo%20Ritel%20Community%2C%20saya%20ingin%20bergabung!" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all hover:scale-105 text-lg shadow-lg shadow-blue-900/40">
            Gabung Sekarang via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/30 py-10 px-4 text-center text-slate-500 text-sm">
        <div className="max-w-5xl mx-auto">
          <p className="font-bold text-white text-lg mb-2">RITEL COMMUNITY.ID</p>
          <p className="mb-1">Komunitas Trading Saham Indonesia</p>
          <p className="mb-4 text-slate-400">WA: 082218723401 | Instagram: @elthoriqqqq_</p>
          <div className="border-t border-blue-900/20 pt-4">
            <p>© 2025 RITEL COMMUNITY.ID — Developed by <span className="text-blue-400 font-semibold">THIRAFI THARIQ AL IDRIS</span></p>
            <p className="text-xs mt-1 text-slate-600">Instagram: @elthoriqqqq_ | WA: 082218723401</p>
          </div>
        </div>
      </footer>

      <LiveChat />
    </main>
  )
}
