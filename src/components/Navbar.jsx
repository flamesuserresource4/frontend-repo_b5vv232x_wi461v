import { Music, User, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Music className="h-6 w-6 text-emerald-400" />
            <span className="text-lg font-semibold tracking-tight">Spotify</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#" className="hover:text-white transition">Premium</a>
            <a href="#" className="hover:text-white transition">Download</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-white/80 hover:text-white text-sm">Log in</button>
            <button className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 text-sm">Sign up</button>
          </div>

          <button aria-label="Open menu" className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 text-white/80">
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:text-white">Premium</a>
              <a href="#" className="hover:text-white">Download</a>
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#" className="hover:text-white">Support</a>
              <div className="pt-2 flex items-center gap-3">
                <button className="text-white/80 hover:text-white text-sm">Log in</button>
                <button className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 text-sm">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
