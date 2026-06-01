'use client'
import { Star } from 'lucide-react'

const testimonials = [
  { nama: "Budi Santoso", paket: "Gold", isi: "Sinyal dari Ritel Community sangat akurat! Dalam 3 bulan portofolio gue naik 40%. Analisa fundamentalnya juga detail banget.", rating: 5 },
  { nama: "Sari Dewi", paket: "Platinum", isi: "AI Agent-nya luar biasa! Bisa tanya kapan aja soal saham dan langsung dapat analisa mendalam. Worth it banget buat paket Platinum.", rating: 5 },
  { nama: "Rizky Pratama", paket: "Elite", isi: "Gua dulu rugi terus trading. Sejak gabung Ritel Community dan ikutin sinyal entry/TP/SL-nya, konsisten profit setiap bulan!", rating: 5 },
  { nama: "Maya Fitri", paket: "Silver", isi: "Modul money management dan psikologi trading beneran ngubah cara gue trading. Sekarang lebih disiplin dan nggak panik pas market turun.", rating: 5 },
  { nama: "Andi Kurniawan", paket: "Pro", isi: "Grup WA-nya aktif banget, update sinyal cepat. Admin responsif dan analisa sahamnya sangat membantu keputusan investasi gue.", rating: 5 },
  { nama: "Dewi Rahayu", paket: "Basic", isi: "Untuk harga segitu kontennya kaya banget! Panduan fundamentalnya mudah dipahami bahkan buat pemula seperti gue.", rating: 5 },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-white">Apa Kata Member Kami</h2>
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
        </div>
        <p className="text-slate-400">Ribuan trader Indonesia sudah membuktikan</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-card rounded-xl p-6 hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">"{t.isi}"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white text-sm">{t.nama}</p>
                <p className="text-xs text-blue-400">Member {t.paket}</p>
              </div>
              <div className="w-10 h-10 bg-blue-600/20 border border-blue-600/30 rounded-full flex items-center justify-center text-blue-400 font-bold">
                {t.nama[0]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
