'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Users, TrendingUp, MessageSquare, Settings, Plus, Edit, Trash2, Crown, Shield, BarChart2 } from 'lucide-react'

const SIGNALS = [
  { id: 1, saham: 'BBRI', entry: 4800, antri: 4750, tp1: 5000, tp2: 5200, sl: 4600, status: 'Aktif', catatan: 'Break resistance kuat' },
  { id: 2, saham: 'TLKM', entry: 3200, antri: 3150, tp1: 3400, tp2: 3600, sl: 3050, status: 'Aktif', catatan: 'Akumulasi institusi' },
  { id: 3, saham: 'ASII', entry: 5500, antri: 5450, tp1: 5800, tp2: 6100, sl: 5300, status: 'Tutup', catatan: 'Target tercapai' },
]
const USERS = [
  { id: 1, nama: 'Budi Santoso', email: 'budi@email.com', paket: 'Gold', expired: '2025-12-31', status: 'Aktif' },
  { id: 2, nama: 'Sari Dewi', email: 'sari@email.com', paket: 'Platinum', expired: '2025-11-30', status: 'Aktif' },
  { id: 3, nama: 'Rizky P', email: 'rizky@email.com', paket: 'Elite', expired: '2025-10-15', status: 'Aktif' },
]
const TESTIMONIALS = [
  { id: 1, nama: 'Budi Santoso', paket: 'Gold', isi: 'Sinyal sangat akurat!', visible: true },
  { id: 2, nama: 'Sari Dewi', paket: 'Platinum', isi: 'AI Agent luar biasa!', visible: true },
]

export default function AdminPage() {
  const [tab, setTab] = useState('dashboard')

  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <div className="pt-20 flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-[#0d1224] border-r border-blue-900/30 p-4 fixed top-16 left-0">
          <div className="flex items-center gap-2 mb-6 px-2">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-white">Admin Panel</span>
          </div>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: <BarChart2 className="w-4 h-4" /> },
            { id: 'signals', label: 'Sinyal & Token', icon: <TrendingUp className="w-4 h-4" /> },
            { id: 'users', label: 'Kelola User', icon: <Users className="w-4 h-4" /> },
            { id: 'testimonials', label: 'Testimoni', icon: <MessageSquare className="w-4 h-4" /> },
            { id: 'settings', label: 'Pengaturan', icon: <Settings className="w-4 h-4" /> },
          ].map(m => (
            <button key={m.id} onClick={() => setTab(m.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm mb-1 transition ${tab === m.id ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30' : 'text-slate-400 hover:bg-blue-900/20'}`}>
              {m.icon} {m.label}
            </button>
          ))}
        </div>
        {/* Content */}
        <div className="ml-64 flex-1 p-8">
          {tab === 'dashboard' && (
            <div>
              <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Total Member', value: '247', color: 'blue' },
                  { label: 'Member Aktif', value: '198', color: 'green' },
                  { label: 'Expired <7 Hari', value: '12', color: 'yellow' },
                  { label: 'Sinyal Aktif', value: '8', color: 'purple' },
                ].map(s => (
                  <div key={s.label} className="glass-card rounded-xl p-5">
                    <p className="text-slate-400 text-sm">{s.label}</p>
                    <p className="text-3xl font-bold text-white mt-1">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="glass-card rounded-xl p-6">
                <h2 className="font-bold text-white mb-4">Sinyal Aktif Terbaru</h2>
                <table className="w-full text-sm">
                  <thead><tr className="text-slate-400 border-b border-blue-900/30">
                    <th className="text-left pb-3">Saham</th><th className="text-left pb-3">Entry</th>
                    <th className="text-left pb-3">TP1</th><th className="text-left pb-3">SL</th><th className="text-left pb-3">Status</th>
                  </tr></thead>
                  <tbody>{SIGNALS.map(s => (
                    <tr key={s.id} className="border-b border-blue-900/20">
                      <td className="py-3 font-bold text-blue-400">{s.saham}</td>
                      <td className="py-3 text-white">{s.entry}</td>
                      <td className="py-3 text-green-400">{s.tp1}</td>
                      <td className="py-3 text-red-400">{s.sl}</td>
                      <td className="py-3"><span className={`px-2 py-0.5 rounded-full text-xs ${s.status==='Aktif'?'bg-green-500/20 text-green-400':'bg-slate-500/20 text-slate-400'}`}>{s.status}</span></td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
          )}
          {tab === 'signals' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-white">Sinyal & Arahan Saham</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-sm text-white transition">
                  <Plus className="w-4 h-4" /> Tambah Sinyal
                </button>
              </div>
              <div className="glass-card rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead><tr className="bg-blue-900/20 text-slate-400">
                    {['Saham','Entry','Antri','TP1','TP2','SL','Status','Catatan','Aksi'].map(h => (
                      <th key={h} className="text-left px-4 py-3">{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>{SIGNALS.map(s => (
                    <tr key={s.id} className="border-b border-blue-900/20 hover:bg-blue-900/10 transition">
                      <td className="px-4 py-3 font-bold text-blue-400">{s.saham}</td>
                      <td className="px-4 py-3 text-white">{s.entry}</td>
                      <td className="px-4 py-3 text-cyan-400">{s.antri}</td>
                      <td className="px-4 py-3 text-green-400">{s.tp1}</td>
                      <td className="px-4 py-3 text-green-300">{s.tp2}</td>
                      <td className="px-4 py-3 text-red-400">{s.sl}</td>
                      <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs ${s.status==='Aktif'?'bg-green-500/20 text-green-400':'bg-slate-500/20 text-slate-400'}`}>{s.status}</span></td>
                      <td className="px-4 py-3 text-slate-400 max-w-xs truncate">{s.catatan}</td>
                      <td className="px-4 py-3 flex gap-2">
                        <button className="p-1.5 hover:bg-blue-600/20 rounded-lg transition text-blue-400"><Edit className="w-4 h-4" /></button>
                        <button className="p-1.5 hover:bg-red-600/20 rounded-lg transition text-red-400"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
          )}
          {tab === 'users' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-white">Kelola User</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-sm text-white transition">
                  <Plus className="w-4 h-4" /> Tambah User
                </button>
              </div>
              <div className="glass-card rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead><tr className="bg-blue-900/20 text-slate-400">
                    {['Nama','Email','Paket','Expired','Status','Aksi'].map(h => (
                      <th key={h} className="text-left px-4 py-3">{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>{USERS.map(u => (
                    <tr key={u.id} className="border-b border-blue-900/20 hover:bg-blue-900/10 transition">
                      <td className="px-4 py-3 font-medium text-white">{u.nama}</td>
                      <td className="px-4 py-3 text-slate-400">{u.email}</td>
                      <td className="px-4 py-3"><span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs">{u.paket}</span></td>
                      <td className="px-4 py-3 text-slate-300">{u.expired}</td>
                      <td className="px-4 py-3"><span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs">{u.status}</span></td>
                      <td className="px-4 py-3 flex gap-2">
                        <button className="p-1.5 hover:bg-blue-600/20 rounded-lg transition text-blue-400"><Edit className="w-4 h-4" /></button>
                        <button className="p-1.5 hover:bg-red-600/20 rounded-lg transition text-red-400"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
          )}
          {tab === 'testimonials' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-white">Kelola Testimoni</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-sm text-white transition">
                  <Plus className="w-4 h-4" /> Tambah Testimoni
                </button>
              </div>
              <div className="grid gap-4">
                {TESTIMONIALS.map(t => (
                  <div key={t.id} className="glass-card rounded-xl p-5 flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-white">{t.nama}</span>
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">{t.paket}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${t.visible?'bg-green-500/20 text-green-400':'bg-slate-500/20 text-slate-400'}`}>{t.visible?'Tampil':'Tersembunyi'}</span>
                      </div>
                      <p className="text-slate-400 text-sm">"{t.isi}"</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button className="p-1.5 hover:bg-blue-600/20 rounded-lg transition text-blue-400"><Edit className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-red-600/20 rounded-lg transition text-red-400"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab === 'settings' && (
            <div>
              <h1 className="text-2xl font-bold text-white mb-6">Pengaturan</h1>
              <div className="glass-card rounded-xl p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Nomor WhatsApp</label>
                  <input defaultValue="082218723401" className="w-full bg-[#0d1224] border border-blue-900/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Instagram</label>
                  <input defaultValue="@elthoriqqqq_" className="w-full bg-[#0d1224] border border-blue-900/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Teks Hero (Tagline)</label>
                  <textarea rows={3} defaultValue="Komunitas Trading Saham Terpercaya di Indonesia" className="w-full bg-[#0d1224] border border-blue-900/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none" />
                </div>
                <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm transition">Simpan Perubahan</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
