
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  CircuitBoard,
  GitBranch,
  BrainCircuit,
  Zap,
  ArrowUpRight,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    icon: Monitor,
    accent: 'blue',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    description: 'Creating application logic and connecting services.',
    icon: Server,
    accent: 'indigo',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    description: 'Working with data storage and database queries.',
    icon: Database,
    accent: 'emerald',
    skills: ['MongoDB', 'MySQL', 'SQL'],
  },
  {
    title: 'Tools & Workflow',
    description: 'Developing, testing, and managing code.',
    icon: Wrench,
    accent: 'violet',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite'],
  },
  {
    title: 'Electrical Engineering',
    description: 'Building understanding of electrical principles and systems.',
    icon: CircuitBoard,
    accent: 'amber',
    skills: [
      'Circuit Fundamentals',
      'Electrical Systems',
      'Technical Diagrams',
      'Electrical Measurements',
    ],
  },
  {
    title: 'Technical Problem-solving',
    description: 'Approaching technical challenges systematically.',
    icon: BrainCircuit,
    accent: 'rose',
    skills: [
      'Troubleshooting',
      'Logical Thinking',
      'Testing',
      'Documentation',
    ],
  },
]

const accentStyles = {
  blue: {
    icon: 'bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300',
    badge:
      'border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300',
    glow: 'hover:border-blue-300 dark:hover:border-blue-400/40',
  },
  indigo: {
    icon: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300',
    badge:
      'border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300',
    glow: 'hover:border-indigo-300 dark:hover:border-indigo-400/40',
  },
  emerald: {
    icon: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300',
    badge:
      'border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300',
    glow: 'hover:border-emerald-300 dark:hover:border-emerald-400/40',
  },
  violet: {
    icon: 'bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300',
    badge:
      'border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300',
    glow: 'hover:border-violet-300 dark:hover:border-violet-400/40',
  },
  amber: {
    icon: 'bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300',
    badge:
      'border-amber-100 bg-amber-50 text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300',
    glow: 'hover:border-amber-300 dark:hover:border-amber-400/40',
  },
  rose: {
    icon: 'bg-rose-50 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300',
    badge:
      'border-rose-100 bg-rose-50 text-rose-700 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-300',
    glow: 'hover:border-rose-300 dark:hover:border-rose-400/40',
  },
}

function SkillCard({ group, index, reduceMotion, darkMode }) {
  const Icon = group.icon
  const accent = accentStyles[group.accent]

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : index * 0.06,
      }}
      className={`rounded-2xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${
        darkMode
          ? 'border-slate-800 bg-slate-900 shadow-black/10 hover:shadow-black/20'
          : 'border-slate-200 bg-white hover:shadow-slate-900/5'
      } ${accent.glow}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.icon}`}
        >
          <Icon size={23} />
        </span>

        <span
          className={`text-xs font-bold tracking-widest ${
            darkMode ? 'text-slate-600' : 'text-slate-300'
          }`}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3
        className={`mt-5 text-lg font-extrabold ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}
      >
        {group.title}
      </h3>

      <p
        className={`mt-2 min-h-12 text-sm leading-6 ${
          darkMode ? 'text-slate-400' : 'text-slate-500'
        }`}
      >
        {group.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold ${accent.badge}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Skills() {
  const reduceMotion = useReducedMotion()
  const [darkMode, setDarkMode] = useState(false)

  // Keep this section synchronized with the global theme toggle.
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

  return (
    <section
      id="skills"
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:py-28 ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full blur-3xl ${
          darkMode ? 'bg-indigo-900/20' : 'bg-indigo-100/70'
        }`}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] ${
              darkMode
                ? 'border-blue-400/30 bg-blue-400/10 text-blue-300'
                : 'border-blue-200 bg-blue-50 text-blue-700'
            }`}
          >
            <Code2 size={15} />
            Skills & Technologies
          </span>

          <h2
            className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}
          >
            Tools I use.
            <span className="block text-blue-600 dark:text-blue-400">
              Skills I continue to develop.
            </span>
          </h2>

          <p
            className={`mt-5 text-base leading-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            My current learning and practical focus spans web development,
            databases, development tools, electrical engineering principles,
            and structured technical problem-solving.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.title}
              group={group}
              index={index}
              reduceMotion={reduceMotion}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* Learning and growth panel */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mt-10 overflow-hidden rounded-3xl bg-slate-900 p-6 text-white transition-colors duration-300 sm:p-8 lg:p-10"
        >
          <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-300">
                <GitBranch size={18} />
                Continuous improvement
              </span>

              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Learning by building.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                I strengthen my knowledge through projects, practical
                exercises, debugging, technical documentation, and continued
                learning. This section reflects my current areas of focus,
                not a claim of expert-level proficiency in every technology.
              </p>
            </div>

            <a
              href="#projects"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              See my projects
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-7 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <Code2 size={21} className="shrink-0 text-blue-300" />
              <div>
                <p className="font-bold">Software Development</p>
                <p className="mt-1 text-xs text-slate-400">
                  Frontend, APIs, and databases
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <Zap size={21} className="shrink-0 text-amber-300" />
              <div>
                <p className="font-bold">Electrical Engineering</p>
                <p className="mt-1 text-xs text-slate-400">
                  Electrical principles and technical analysis
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
