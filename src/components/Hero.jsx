import Spline from '@splinetool/react-spline'
import { PlayCircle, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-black text-white">
      {/* Background gradient accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 pt-10 lg:pt-20">
        <div className="relative z-10 flex flex-col justify-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 w-max">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            Introducing AI Voice Aura
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Music, remixed with intelligent sound.
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-prose">
            Experience Spotify with an AI voice agent that understands your vibe. Discover, queue, and control playback with natural conversation — faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3">
              <PlayCircle className="h-5 w-5" />
              Get Spotify Free
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-6 py-3">
              Learn more
            </a>
          </div>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[72vh]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
