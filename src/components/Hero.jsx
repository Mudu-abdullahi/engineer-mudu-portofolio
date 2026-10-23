import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Zap,
  Download,
  Sparkles,
} from 'lucide-react'

const technologies = [
  'React',
  'JavaScript',
  'Node.js',
  'MongoDB',
  'Python',
  'Tailwind CSS',
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  // Read and follow the global theme
  const [darkMode, setDarkMode] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : true,
  )

  useEffect(() => {
    const root = document.documentElement

    const updateTheme = () => {
      setDarkMode(root.classList.contains('dark'))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const textMuted = darkMode ? 'text-slate-300' : 'text-slate-600'
  const textSubtle = darkMode ? 'text-slate-400' : 'text-slate-500'

  return (
    <section
      id="home"
      className={`relative isolate min-h-[90vh] overflow-hidden px-5 pb-20 pt-32 transition-colors duration-300 sm:px-8 sm:pt-36 lg:flex lg:min-h-screen lg:items-center lg:pb-24 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className={`absolute -right-40 -top-32 h-[30rem] w-[30rem] rounded-full blur-[120px] ${
            darkMode ? 'bg-blue-600/20' : 'bg-blue-400/15'
          }`}
        />

        <div
          className={`absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full blur-[110px] ${
            darkMode ? 'bg-indigo-600/15' : 'bg-indigo-400/10'
          }`}
        />

        <div
          className={`absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] ${
            darkMode ? 'opacity-60' : 'opacity-40'
          }`}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Hero introduction */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
        >
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide sm:text-sm ${
              darkMode
                ? 'border-blue-400/20 bg-blue-400/10 text-blue-200'
                : 'border-blue-200 bg-blue-50 text-blue-800'
            }`}
          >
            <Sparkles
              size={15}
              className={darkMode ? 'text-blue-300' : 'text-blue-600'}
            />
            Software Development × Electrical Engineering
          </div>

          <p
            className={`mt-8 text-sm font-semibold uppercase tracking-[0.22em] ${textSubtle}`}
          >
            Hello, welcome to my portfolio
          </p>

          <h1 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            I&apos;m Mohamud
            <span className="mt-2 block bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Abdullahi.
            </span>
          </h1>

          <h2
            className={`mt-6 text-xl font-bold sm:text-2xl ${
              darkMode ? 'text-slate-200' : 'text-slate-700'
            }`}
          >
            Software Developer
            <span className="mx-2 text-blue-500">|</span>
            Electrical Engineer in Training
          </h2>

          <p
            className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${textMuted}`}
          >
            I build web applications and explore practical engineering
            solutions. I enjoy turning ideas into useful digital products
            while developing my knowledge of electrical systems,
            troubleshooting, and technical problem-solving.
          </p>

          {/* Main actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Explore My Projects
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#engineering"
              className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-bold transition ${
                darkMode
                  ? 'border-white/15 bg-white/[0.04] text-white hover:border-amber-300/50 hover:bg-white/[0.08]'
                  : 'border-slate-300 bg-white text-slate-800 hover:border-amber-400 hover:bg-amber-50'
              }`}
            >
              <Zap size={17} className="text-amber-500" />
              Engineering Lab
            </a>
          </div>

          {/* CV and GitHub links */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/Mohamud-Abdullahi-CV.pdf"
              download
              className={`inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold transition hover:text-blue-500 ${textMuted}`}
            >
              <Download size={16} />
              Download CV
            </a>

            <a
              href="https://github.com/Mudu-abdullahi"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold transition hover:text-blue-500 ${textMuted}`}
            >
              GitHub Profile
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Technology tags */}
          <div
            className={`mt-10 border-t pt-6 ${
              darkMode ? 'border-white/10' : 'border-slate-200'
            }`}
          >
            <p
              className={`text-xs font-bold uppercase tracking-[0.18em] ${textSubtle}`}
            >
              Technologies I work with
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className={`rounded-lg border px-3 py-2 text-xs font-medium transition hover:border-blue-400 hover:text-blue-500 ${
                    darkMode
                      ? 'border-white/10 bg-white/[0.04] text-slate-300 hover:text-blue-200'
                      : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-amber-400/20 blur-2xl"
          />

          <div
            className={`relative overflow-hidden rounded-[2rem] border p-3 shadow-2xl transition-colors duration-300 ${
              darkMode
                ? 'border-white/10 bg-slate-900 shadow-black/30'
                : 'border-slate-200 bg-white shadow-slate-300/40'
            }`}
          >
            <div
              className={`relative overflow-hidden rounded-[1.5rem] ${
                darkMode ? 'bg-slate-800' : 'bg-slate-100'
              }`}
            >
              <img
                src="/images/mohamud-profile.jpg"
                alt="Mohamud Abdullahi"
                loading="eager"
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover object-center"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Building • Learning • Engineering
                </p>
                <p className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                  Technology with purpose.
                </p>
              </div>
            </div>

            {/* Software focus card */}
            <div
              className={`absolute -left-3 top-10 flex items-center gap-3 rounded-2xl border p-3 shadow-xl backdrop-blur sm:-left-6 sm:p-4 ${
                darkMode
                  ? 'border-white/10 bg-slate-900/95'
                  : 'border-slate-200 bg-white/95'
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-500">
                <Code2 size={22} />
              </span>

              <div>
                <p className={`text-xs ${textSubtle}`}>Focus area</p>
                <p
                  className={`text-sm font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Software
                </p>
              </div>
            </div>

            {/* Electrical engineering focus card */}
            <div
              className={`absolute -right-3 bottom-24 flex items-center gap-3 rounded-2xl border p-3 shadow-xl backdrop-blur sm:-right-6 sm:p-4 ${
                darkMode
                  ? 'border-white/10 bg-slate-900/95'
                  : 'border-slate-200 bg-white/95'
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-500">
                <Zap size={22} />
              </span>

              <div>
                <p className={`text-xs ${textSubtle}`}>Focus area</p>
                <p
                  className={`text-sm font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Electrical
                </p>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className={`mx-auto mt-8 flex w-fit items-center gap-2 text-sm font-medium transition hover:text-blue-500 ${textSubtle}`}
          >
            Discover my journey
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
