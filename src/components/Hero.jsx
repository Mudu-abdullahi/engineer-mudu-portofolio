import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Zap,
  Download,
  Sparkles,
  CircuitBoard,
  Cpu,
} from 'lucide-react'
import WireframeSphere from './WireframeSphere'

const technologies = [
  'React',
  'JavaScript',
  'Node.js',
  'MongoDB',
  'Python',
  'Tailwind CSS',
]

const floatingTechnologies = [
  {
    name: 'React',
    icon: Code2,
    position: 'left-[5%] top-[22%] sm:left-[12%]',
    color: 'text-cyan-400',
    delay: 0,
  },
  {
    name: 'Node.js',
    icon: Code2,
    position: 'right-[5%] top-[30%] sm:right-[12%]',
    color: 'text-green-400',
    delay: 0.5,
  },
  {
    name: 'Electrical',
    icon: Zap,
    position: 'left-[5%] bottom-[24%] sm:left-[13%]',
    color: 'text-amber-400',
    delay: 1,
  },
  {
    name: 'Circuits',
    icon: CircuitBoard,
    position: 'right-[5%] bottom-[21%] sm:right-[13%]',
    color: 'text-blue-400',
    delay: 1.5,
  },
  {
    name: 'MongoDB',
    icon: Code2,
    position: 'left-[2%] top-[46%] sm:left-[7%]',
    color: 'text-emerald-400',
    delay: 0.8,
  },
  {
    name: 'Python',
    icon: Cpu,
    position: 'right-[2%] top-[55%] sm:right-[7%]',
    color: 'text-yellow-400',
    delay: 1.2,
  },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

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
      className={`relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-28 text-center transition-colors duration-300 sm:min-h-screen sm:px-8 sm:pt-28 ${
        darkMode
          ? 'bg-[#09090f] text-white'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background glow and subtle stars */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className={`absolute left-1/2 top-[42%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] sm:h-[38rem] sm:w-[38rem] ${
            darkMode ? 'bg-indigo-600/10' : 'bg-blue-400/10'
          }`}
        />

        <div
          className={`absolute inset-0 ${
            darkMode
              ? 'bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.12)_1px,transparent_2px),radial-gradient(circle_at_75%_20%,rgba(99,102,241,0.18)_1px,transparent_2px),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.16)_1px,transparent_2px)]'
              : 'bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.12)_1px,transparent_2px),radial-gradient(circle_at_75%_20%,rgba(99,102,241,0.12)_1px,transparent_2px)]'
          }`}
        />
      </div>

      {/* Animated wireframe sphere */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-[44%] -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 sm:h-[620px] sm:w-[620px] lg:h-[760px] lg:w-[760px] ${
          darkMode ? 'opacity-90' : 'opacity-30'
        }`}
      >
        <WireframeSphere />
      </div>

      {/* Floating technology badges */}
      {floatingTechnologies.map((technology) => {
        const Icon = technology.icon

        return (
          <motion.div
            key={technology.name}
            aria-hidden="true"
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 12,
            }}
            animate={{
              opacity: darkMode ? 1 : 0.8,
              y: reduceMotion ? 0 : [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.7 },
              y: reduceMotion
                ? { duration: 0 }
                : {
                    duration: 4,
                    delay: technology.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
            }}
            className={`absolute ${technology.position} hidden items-center gap-3 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:flex ${
              darkMode
                ? 'border-white/10 bg-slate-900/65 shadow-blue-950/20 hover:border-indigo-400/40 hover:bg-slate-900/90'
                : 'border-slate-200 bg-white/85 shadow-slate-300/30 hover:border-indigo-300'
            }`}
          >
            <Icon size={16} className={technology.color} />
            <span
              className={`text-xs font-semibold ${
                darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              {technology.name}
            </span>
          </motion.div>
        )
      })}

      {/* Main hero content */}
      <motion.div
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 24,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.8,
          ease: 'easeOut',
        }}
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        {/* Introduction badge */}
        <div
          className={`mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide sm:text-sm ${
            darkMode
              ? 'border-indigo-400/20 bg-indigo-400/[0.08] text-indigo-300'
              : 'border-indigo-200 bg-indigo-50 text-indigo-700'
          }`}
        >
          <Sparkles size={15} />
          Software Development × Electrical Engineering
        </div>

        <p
          className={`mt-8 text-sm font-medium sm:text-base ${
            darkMode ? 'text-indigo-300' : 'text-indigo-600'
          }`}
        >
          Hello, welcome to my portfolio 👋
        </p>

        {/* Main heading */}
        <h1 className="mt-5 text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block">
            I&apos;m{' '}
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                darkMode
                  ? 'from-indigo-400 via-blue-500 to-teal-400'
                  : 'from-indigo-600 via-blue-600 to-teal-600'
              }`}
            >
              Mohamud Abdullahi
            </span>
          </span>
        </h1>

        {/* Professional title */}
        <h2
          className={`mt-6 text-xl font-bold sm:text-2xl lg:text-3xl ${
            darkMode ? 'text-teal-400' : 'text-teal-700'
          }`}
        >
          Software Developer
          <span className="mx-2 text-indigo-400">|</span>
          Electrical Engineer in Training
        </h2>

        {/* Description */}
        <p
          className={`mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          I build web applications and explore practical engineering
          solutions. I combine technology, creativity, and problem-solving
          to develop useful digital products and electrical systems.
        </p>

        {/* Primary actions */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_0_25px_rgba(99,102,241,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10">Explore My Projects</span>
            <ArrowRight
              size={17}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className={`group inline-flex items-center gap-2 rounded-xl border px-7 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
              darkMode
                ? 'border-indigo-400/30 bg-white/[0.03] text-white shadow-[0_0_15px_rgba(99,102,241,0.05)] hover:border-indigo-400/70 hover:bg-indigo-500/10 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]'
                : 'border-slate-300 bg-white text-slate-800 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-500/10'
            }`}
          >
            Contact Me
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Availability status */}
        <div className="mt-7 flex justify-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium sm:text-sm ${
              darkMode
                ? 'border-emerald-500/25 bg-emerald-500/[0.07] text-emerald-400'
                : 'border-emerald-200 bg-emerald-50 text-emerald-700'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </div>
        </div>

        {/* CV and GitHub links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a
            href="/Mohamud-Abdullahi-CV.pdf"
            download
            className={`inline-flex items-center gap-2 text-sm font-semibold transition hover:text-indigo-400 ${
              textMuted
            }`}
          >
            <Download size={16} />
            Download CV
          </a>

          <a
            href="https://github.com/Mudu-abdullahi"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition hover:text-indigo-400 ${
              textMuted
            }`}
          >
            <Code2 size={16} />
            GitHub Profile
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Technology tags */}
        <div
          className={`mx-auto mt-10 max-w-3xl border-t pt-6 ${
            darkMode ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          <p
            className={`text-xs font-bold uppercase tracking-[0.18em] ${textSubtle}`}
          >
            Technologies I work with
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className={`rounded-lg border px-3 py-2 text-xs font-medium transition duration-200 hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-400 ${
                  darkMode
                    ? 'border-white/10 bg-white/[0.04] text-slate-300'
                    : 'border-slate-200 bg-white text-slate-700'
                }`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down to learn about me"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.8,
          delay: 0.6,
        }}
        className={`absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 transition hover:text-indigo-400 sm:bottom-6 ${
          textSubtle
        }`}
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-current p-1"
        >
          <span className="h-2 w-1 rounded-full bg-current" />
        </motion.div>

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Scroll down
        </span>
      </motion.a>
    </section>
  )
}
