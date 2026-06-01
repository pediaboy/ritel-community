'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import LiveChat from '../components/LiveChat'
import { BookOpen, TrendingUp, Brain, Shield, DollarSign, Heart, MessageCircle, Target, Bot } from 'lucide-react'

const modules = [
  { id: 'fundamental', icon: <BookOpen className="w-5 h-5" />, title: 'Panduan Fundamental', desc: 'Cara membaca laporan keuangan, rasio keuangan, valuasi saham, dan analisa bisnis emiten secara mendalam.', content: '📊 **Analisa Fundamental Saham**\n\nFundamental analysis adalah metode mengevaluasi nilai intrinsik suatu saham dengan menganalisis berbagai faktor ekonomi dan keuangan perusahaan.\n\n**Indikator Utama:**\n• PER (Price to Earnings Ratio) - valuasi harga vs laba\n• PBV (Price to Book Value) - harga vs nilai buku\n• ROE (Return on Equity) - profitabilitas modal\n• DER (Debt to Equity Ratio) - leverage perusahaan\n• NPM (Net Profit Margin) - margin keuntungan bersih\n\n**Langkah Analisa:**\n1. Baca laporan keuangan tahunan (Annual Report)\n2. Hitung rasio-rasio kunci\n3. Bandingkan dengan kompetitor (peer comparison)\n4. Analisa tren pertumbuhan 5 tahun\n5. Tentukan nilai wajar (fair value)' },
  { id: 'bagger', icon: <Target className="w-5 h-5" />, title: 'Saham Bagger', desc: 'Strategi menemukan saham multibagger yang berpotensi naik 2x, 5x, bahkan 10x dalam jangka menengah-panjang.', content: '🚀 **Saham Bagger - Strategi Multi-X**\n\nBagger adalah saham yang naik berkali-kali lipat dari harga beli. Menemukan bagger yang tepat adalah kunci kekayaan di pasar saham.\n\n**Karakteristik Saham Bagger:**\n• Bisnis dengan moat (keunggulan kompetitif) kuat\n• Pertumbuhan pendapatan >20% per tahun\n• Manajemen yang jujur dan kompeten\n• Industri dengan runway pertumbuhan panjang\n• Valuasi masih murah relatif terhadap growth\n\n**Sektor Potensial Bagger:**\n• Teknologi & Digital\n• Healthcare & Farmasi\n• Consumer discretionary\n• Energi Terbarukan\n• Infrastruktur Digital' },
  { id: 'risk', icon: <Shield className="w-5 h-5" />, title: 'Risk Management', desc: 'Manajemen risiko trading: position sizing, stop loss, diversifikasi portofolio, dan lindungi modal dari kerugian besar.', content: '🛡️ **Risk Management Profesional**\n\nManajemen risiko adalah fondasi utama trading yang konsisten profit. Trader profesional selalu utamakan perlindungan modal.\n\n**Aturan Utama Risk Management:**\n• Max risk per trade: 1-2% dari total modal\n• Max drawdown: tidak lebih dari 10% dalam sebulan\n• Stop Loss wajib dipasang SEBELUM entry\n• Jangan average down saham yang downtrend\n• Risk:Reward minimum 1:2\n\n**Position Sizing Formula:**\nLot = (Modal × Risk%) / (Harga Entry - Harga SL)\n\n**Diversifikasi:**\n• Maksimal 5-7 saham berbeda sektor\n• Tidak ada 1 saham >20% dari portofolio' },
  { id: 'money', icon: <DollarSign className="w-5 h-5" />, title: 'Money Management', desc: 'Atur modal trading dengan bijak: alokasi portofolio, reinvestasi profit, dan strategi compounding jangka panjang.', content: '💰 **Money Management Trading**\n\nMoney management yang baik bisa membuat modal berkembang secara eksponensial melalui compounding.\n\n**Strategi Alokasi Modal:**\n• 60% - Core portfolio (saham blue chip stabil)\n• 30% - Growth stocks (potensi naik signifikan)\n• 10% - Speculative plays (high risk, high reward)\n\n**Strategi Compounding:**\n• Reinvestasikan 70% profit ke portofolio\n• Ambil 30% untuk cash reserve\n• Review portofolio setiap bulan\n• Rebalancing setiap kuartal\n\n**Target Realistis:**\n• Pemula: 15-20% per tahun\n• Menengah: 25-35% per tahun\n• Expert: 40-60% per tahun' },
  { id: 'psikologi', icon: <Brain className="w-5 h-5" />, title: 'Psikologi Trading', desc: 'Pahami bias kognitif, FOMO, fear & greed dalam trading. Bangun mindset trader profesional yang disiplin.', content: '🧠 **Psikologi Trading**\n\nKegagalan 80% trader bukan karena strategi yang salah, tapi karena psikologi yang tidak terkontrol.\n\n**Bias Kognitif yang Harus Dihindari:**\n• FOMO (Fear of Missing Out) - beli karena takut ketinggalan\n• Loss Aversion - menahan saham rugi terlalu lama\n• Overconfidence - terlalu percaya diri setelah beberapa profit\n• Anchoring Bias - terpaku pada harga beli\n• Herd Mentality - ikut-ikutan tanpa analisa\n\n**Membangun Mindset Trader Profesional:**\n1. Buat trading plan sebelum market buka\n2. Patuhi stop loss tanpa emosi\n3. Tidak revenge trading setelah loss\n4. Journal setiap trade untuk evaluasi\n5. Istirahat jika sudah 3x loss berturut-turut' },
  { id: 'emosional', icon: <Heart className="w-5 h-5" />, title: 'Emosional Trading', desc: 'Kontrol emosi saat trading: cara menghadapi loss, euforia profit, dan menjaga keseimbangan mental dalam volatilitas pasar.', content: '❤️ **Kontrol Emosional dalam Trading**\n\nTrader sukses bukan yang paling pintar, tapi yang paling bisa kontrol emosinya.\n\n**Siklus Emosi Trader:**\n• Optimisme → Euforia → Cemas → Panik → Depresi → Pasrah → Harapan\n\n**Tips Kontrol Emosi:**\n• Jangan cek portofolio setiap jam (stres tidak produktif)\n• Tetapkan waktu trading yang konsisten\n• Meditation 10 menit sebelum trading\n• Pisahkan dana trading dari dana kebutuhan hidup\n• Buat jurnal emosi trading harian\n\n**Red Flag Emosi:**\n• Beli impulsif tanpa analisa\n• Tidak bisa tidur karena saham\n• Trading untuk "balik modal"\n• Naikkan lot setelah loss besar' },
]

export default function VipPage() {
  const [active, setActive] = useState('fundamental')
  const current = modules.find(m => m.id === active)!

  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <div className="pt-20 max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-2xl font-bold text-white">Area VIP Member</h1>
          <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs px-3 py-1 rounded-full">Gold Member</span>
        </div>
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar modules */}
          <div className="lg:col-span-1 space-y-2">
            {modules.map(m => (
              <button key={m.id} onClick={() => setActive(m.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left transition ${active === m.id ? 'bg-blue-600/20 border border-blue-500/40 text-blue-400' : 'glass-card text-slate-400 hover:text-blue-400 hover:border-blue-900/50'}`}>
                {m.icon}
                <span className="font-medium">{m.title}</span>
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left glass-card text-purple-400 border border-purple-500/30 hover:bg-purple-600/10 transition">
              <Bot className="w-5 h-5" /> AI Agent
              <span className="ml-auto text-xs bg-purple-500/20 px-2 py-0.5 rounded-full">Platinum+</span>
            </button>
          </div>
          {/* Content */}
          <div className="lg:col-span-3 glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600/20 border border-blue-600/30 rounded-xl flex items-center justify-center text-blue-400">
                {current.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{current.title}</h2>
                <p className="text-slate-400 text-sm">{current.desc}</p>
              </div>
            </div>
            <div className="prose prose-invert max-w-none">
              {current.content.split('\n').map((line, i) => (
                <p key={i} className={`mb-2 text-sm ${line.startsWith('**') && line.endsWith('**') ? 'font-bold text-blue-300 text-base mt-4' : line.startsWith('•') ? 'text-slate-300 ml-4' : line.match(/^\d\./) ? 'text-slate-300 ml-4' : 'text-slate-400'}`}>
                  {line.replace(/\*\*/g, '')}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LiveChat />
    </main>
  )
}
