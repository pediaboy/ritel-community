'use client'
import { MessageCircle } from 'lucide-react'

export default function LiveChat() {
  return (
    <a
      href="https://wa.me/6282218723401?text=Halo%20Ritel%20Community%2C%20saya%20ingin%20bertanya%20tentang%20paket%20VIP"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold">Live Chat</span>
    </a>
  )
}
