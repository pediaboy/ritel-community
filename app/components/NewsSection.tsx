'use client'
import { useEffect, useState } from 'react'
import { ExternalLink, Clock, TrendingUp } from 'lucide-react'

interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
  description: string
}

const SAMPLE_NEWS: NewsItem[] = [
  { title: "IHSG Menguat Didorong Sektor Perbankan dan Energi", link: "https://cnbcindonesia.com", pubDate: new Date().toISOString(), source: "CNBC Indonesia", description: "Indeks Harga Saham Gabungan (IHSG) menguat pada perdagangan hari ini didorong oleh sektor perbankan dan energi yang mencatatkan kenaikan signifikan." },
  { title: "Saham Big Cap Mulai Rebound, Analis Rekomendasikan Buy", link: "https://bisnis.com", pubDate: new Date(Date.now()-3600000).toISOString(), source: "Bisnis.com", description: "Sejumlah saham berkapitalisasi besar mulai menunjukkan tanda-tanda pemulihan. Para analis merekomendasikan strategi buy on weakness." },
  { title: "BI Pertahankan Suku Bunga, Rupiah Menguat ke Level 15.800", link: "https://detik.com/finance", pubDate: new Date(Date.now()-7200000).toISOString(), source: "Detikfinance", description: "Bank Indonesia memutuskan untuk mempertahankan suku bunga acuan BI Rate di level 6,25% dalam Rapat Dewan Gubernur bulan ini." },
  { title: "Bursa Asia Kompak Menguat, Wall Street Tutup Positif", link: "https://cnbcindonesia.com", pubDate: new Date(Date.now()-10800000).toISOString(), source: "CNBC Indonesia", description: "Bursa saham Asia kompak menguat mengikuti sentimen positif dari Wall Street yang ditutup naik pada perdagangan semalam." },
  { title: "IPO Saham Baru: 3 Emiten Siap Melantai di Bursa Bulan Ini", link: "https://bisnis.com", pubDate: new Date(Date.now()-14400000).toISOString(), source: "Bisnis.com", description: "Tiga perusahaan siap melakukan penawaran umum perdana (IPO) di Bursa Efek Indonesia bulan ini dengan total nilai mencapai Rp 2,5 triliun." },
  { title: "Analis: Sektor Konsumer Jadi Pilihan Utama di Tengah Volatilitas", link: "https://detik.com/finance", pubDate: new Date(Date.now()-18000000).toISOString(), source: "Detikfinance", description: "Di tengah volatilitas pasar yang tinggi, analis merekomendasikan investor untuk melirik saham-saham sektor konsumer defensif." },
]

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const h = Math.floor(diff / 3600000)
  const m = Math.floor(diff / 60000)
  if (h > 0) return `${h} jam lalu`
  if (m > 0) return `${m} menit lalu`
  return 'Baru saja'
}

export default function NewsSection() {
  const [news] = useState<NewsItem[]>(SAMPLE_NEWS)

  return (
    <section id="berita" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
        <h2 className="text-2xl font-bold text-white">Berita Pasar Saham</h2>
        <span className="flex items-center gap-1 text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded-full">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
          LIVE
        </span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
            className="group glass-card rounded-xl p-5 hover:border-blue-500/40 hover:glow-blue transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">{item.source}</span>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition" />
            </div>
            <h3 className="font-semibold text-white text-sm leading-snug mb-3 group-hover:text-blue-300 transition line-clamp-2">{item.title}</h3>
            <p className="text-xs text-slate-400 line-clamp-2 mb-3">{item.description}</p>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="w-3 h-3" />
              {timeAgo(item.pubDate)}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
