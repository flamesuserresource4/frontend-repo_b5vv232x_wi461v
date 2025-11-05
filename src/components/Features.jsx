import { Music, Mic, Shield, Headphones } from 'lucide-react'

const features = [
  {
    title: 'Ask. Play. Enjoy.',
    description:
      'Say what you want to hear. Your AI voice agent understands mood, genre, and context to spin the perfect set.',
    icon: Mic,
  },
  {
    title: 'Personalized to you',
    description:
      'Smarter recommendations that adapt in real time — discover hidden gems and fresh releases effortlessly.',
    icon: Music,
  },
  {
    title: 'Privacy-first design',
    description:
      'Your requests are protected with enterprise-grade security and built-in privacy controls.',
    icon: Shield,
  },
  {
    title: 'Seamless everywhere',
    description:
      'Control playback across mobile, desktop, and speakers with a simple voice cue or tap.',
    icon: Headphones,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-black to-[#0b0b0b] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Made for how you actually listen</h2>
          <p className="mt-3 text-white/70">
            Clean design. Effortless control. A futuristic feel that gets out of the way so the music can shine.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/20 p-2 ring-1 ring-emerald-500/30">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
