
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  GraduationCap,
  BookOpen,
  Award,
  ArrowUpRight,
  CheckCircle2,
  Code2,
} from 'lucide-react'

const education = [
  {
    icon: GraduationCap,
    category: 'Formal Education',
    title: 'Electrical Engineering',
    institution: 'Academic and Practical Learning',
    period: 'Through January 2027',
    description:
      'Developing knowledge of electrical engineering principles, electrical systems, technical problem-solving, and practical applications.',
    accent: 'amber',
    details: [
      'Electrical engineering fundamentals',
      'Technical problem-solving',
      'Practical engineering learning',
    ],
  },
  {
    icon: Code2,
    category: 'Technical Learning',
    title: 'Software Development',
    institution: 'Independent Learning and Projects',
    period: 'Ongoing',
    description:
      'Building software development skills through hands-on projects involving frontend interfaces, backend APIs, databases, and version control.',
    accent: 'blue',
    details: [
      'React, JavaScript, and Tailwind CSS',
      'Node.js, Express, and REST APIs',
      'MongoDB, SQL, Git, and GitHub',
    ],
  },
  {
    icon: Award,
    category: 'Cloud Learning',
    title: 'Microsoft Azure Fundamentals',
    institution: 'Microsoft Learn',
    period: 'Learning in progress',
    description:
      'Exploring cloud computing concepts, Azure services, networking, and cloud architecture through structured learning modules.',
    accent: 'emerald',
    details: [
      'Cloud computing fundamentals',
      'Azure architecture and services',
      'Networking and security concepts',
    ],
  },
]

const accentStyles = {
  amber: {
    icon: 'bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20',
    label:
      'bg-amber-50 text-amber-800 dark:bg-amber-400/10 dark:text-amber-300',
    line: 'bg-amber-500',
  },
  blue: {
    icon: 'bg-blue-50 text-blue-700 ring-blue-100 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20',
    label:
      'bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300',
    line: 'bg-blue-500',
  },
  emerald: {
    icon: 'bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/20',
    label:
      'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300',
    line: 'bg-emerald-500',
  },
}

function EducationCard({ item, index, reduceMotion, darkMode }) {
  const Icon = item.icon
  const styles = accentStyles[item.accent]

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : index * 0.08,
      }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
        darkMode
          ? 'border-slate-800 bg-slate-900 hover:border-slate-700 hover:shadow-black/20'
          : 'border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-slate-200/60'
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 ${styles.line} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${styles.icon}`}
          aria-hidden="true"
        >
          <Icon size={24} strokeWidth={1.8} />
        </div>

        <span
          className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${styles.label}`}
        >
          {item.category}
        </span>
      </div>

      <h3
        className={`mt-6 text-xl font-bold tracking-tight ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}
      >
        {item.title}
      </h3>

      <p
        className={`mt-2 font-semibold leading-6 ${
          darkMode ? 'text-slate-300' : 'text-slate-700'
        }`}
      >
        {item.institution}
      </p>

      <p
        className={`mt-1 text-sm font-medium ${
          darkMode ? 'text-slate-400' : 'text-slate-500'
        }`}
      >
        {item.period}
      </p>

      <p
        className={`mt-4 text-sm leading-7 ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {item.description}
      </p>

      <div className="mt-5 space-y-3">
        {item.details.map((detail) => (
          <div key={detail} className="flex items-start gap-2.5">
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <span
              className={`text-sm leading-6 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {detail}
            </span>
          </div>
        ))}
      </div>
    </motion.article>
  )
}

export default function Education() {
  const reduceMotion = useReducedMotion()
  const [darkMode, setDarkMode] = useState(false)

  // Follow the global theme toggle in App.jsx.
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
      id="education"
      aria-labelledby="education-heading"
      className={`scroll-mt-24 px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:py-28 ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p
            className={`text-sm font-bold uppercase tracking-[0.18em] ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}
          >
            Education and technical learning
          </p>

          <h2
            id="education-heading"
            className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}
          >
            The foundation behind my work.
          </h2>

          <p
            className={`mt-5 text-base leading-8 sm:text-lg ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            My development combines electrical engineering studies, hands-on
            software projects, and continued exploration of cloud technology.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <EducationCard
              key={item.category}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* Learning and growth panel */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl border p-6 text-center transition-colors duration-300 sm:flex-row sm:text-left ${
            darkMode
              ? 'border-slate-800 bg-slate-900'
              : 'border-slate-200 bg-white'
          }`}
        >
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              darkMode
                ? 'bg-blue-400/10 text-blue-300'
                : 'bg-blue-50 text-blue-700'
            }`}
          >
            <BookOpen size={22} aria-hidden="true" />
          </div>

          <div>
            <h3
              className={`font-bold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Always learning. Always building.
            </h3>

            <p
              className={`mt-1 text-sm leading-6 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              I aim to turn new knowledge into practical projects and useful
              solutions.
            </p>
          </div>

          <a
            href="#projects"
            className={`inline-flex items-center gap-2 text-sm font-bold transition sm:ml-auto ${
              darkMode
                ? 'text-blue-300 hover:text-blue-200'
                : 'text-blue-700 hover:text-blue-900'
            }`}
          >
            Explore projects
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
