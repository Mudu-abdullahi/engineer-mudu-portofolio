import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Zap,
  Globe,
  Layers3,
} from 'lucide-react'

const projects = [
  {
    title: 'Xaaji Electronics',
    category: 'Full-Stack Web Application',
    status: 'In Development',
    description:
      'A web platform for electrical supplies and repair services, designed to manage products, customers, jobs, inventory, and service-related workflows.',
    highlights: [
      'Product and inventory management',
      'Customer and job management',
      'Responsive React interface',
    ],
    technologies: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    image: '/images/projects/xaaji-electronics.png',
    imageAlt: 'Xaaji Electronics project screenshot',
    repository: '',
    demo: 'https://xaaji-electronics.onrender.com',
    icon: Zap,
    accent: 'amber',
  },
  {
    title: 'MERN Registration System',
    category: 'Full-Stack Web Application',
    status: 'Project',
    description:
      'A registration application built to practise form handling, frontend and backend integration, API requests, and database storage.',
    highlights: [
      'Registration form and validation',
      'REST API integration',
      'MongoDB data storage',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/projects/mern-registration.png',
    imageAlt: 'MERN Registration System project screenshot',
    repository: '',
    demo: '',
    icon: Code2,
    accent: 'blue',
  },
  {
    title: 'SpendWise Dashboard',
    category: 'Dashboard Application',
    status: 'Project',
    description:
      'A dashboard project focused on presenting information in a structured interface and practising modern frontend development.',
    highlights: [
      'Dashboard interface',
      'Reusable React components',
      'Responsive layout',
    ],
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '/images/projects/spendwise-dashboard.png',
    imageAlt: 'SpendWise Dashboard project screenshot',
    repository: 'https://github.com/Mudu-abdullahi/spendwise-dashboard',
    demo: '',
    icon: Globe,
    accent: 'emerald',
  },
]

const accentStyles = {
  amber: {
    icon: 'bg-amber-400/10 text-amber-500 ring-amber-400/20 dark:text-amber-300',
    badge:
      'border-amber-400/30 bg-amber-50 text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200',
    glow: 'hover:border-amber-400/40',
  },
  blue: {
    icon: 'bg-blue-400/10 text-blue-600 ring-blue-400/20 dark:text-blue-300',
    badge:
      'border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200',
    glow: 'hover:border-blue-400/40',
  },
  emerald: {
    icon: 'bg-emerald-400/10 text-emerald-600 ring-emerald-400/20 dark:text-emerald-300',
    badge:
      'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200',
    glow: 'hover:border-emerald-400/40',
  },
}

function ProjectImage({ src, alt, title, darkMode }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden ${
        darkMode ? 'bg-slate-800' : 'bg-slate-100'
      }`}
    >
      {!imageFailed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.06]" 
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div
          className={`flex h-full flex-col items-center justify-center gap-3 ${
            darkMode
              ? 'bg-gradient-to-br from-slate-800 to-slate-900 text-slate-400'
              : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-500'
          }`}
        >
          <Layers3 size={36} />
          <span className="text-sm font-semibold">{title}</span>
          <span className="text-xs">Project preview unavailable</span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
    </div>
  )
}

function ProjectCard({ project, index, reduceMotion, darkMode }) {
  const Icon = project.icon
  const accent = accentStyles[project.accent]

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : index * 0.08,
      }}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        darkMode
          ? 'border-white/10 bg-slate-900/70 shadow-black/20 hover:border-indigo-400/35 hover:shadow-indigo-950/40'
          : 'border-slate-200 bg-white shadow-slate-200/70 hover:border-indigo-300 hover:shadow-indigo-200/40'
      } ${accent.glow}`}
    >
      <div className="relative">
        <ProjectImage
          src={project.image}
          alt={project.imageAlt}
          title={project.title}
          darkMode={darkMode}
        />

        <span
          className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur ${accent.badge}`}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${accent.icon}`}
          >
            <Icon size={22} />
          </span>

          <div className="min-w-0">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.12em] ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {project.category}
            </p>

            <h3
              className={`mt-1 text-xl font-extrabold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {project.title}
            </h3>
          </div>
        </div>

        <p
          className={`mt-5 text-sm leading-7 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {project.description}
        </p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className={`flex items-start gap-2 text-sm ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <ArrowRight
                size={15}
                className={`mt-1 shrink-0 ${
                  darkMode ? 'text-slate-500' : 'text-slate-400'
                }`}
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 hover:border-indigo-400/50 hover:text-indigo-400 ${
                darkMode
                  ? 'border-white/10 bg-white/[0.04] text-slate-300'
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}
            >
              {technology}
            </span>
          ))}
        </div>

        <div
          className={`mt-6 flex flex-wrap gap-3 border-t pt-5 ${
            darkMode ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          {project.repository ? (
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${
                darkMode
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-indigo-950/30 hover:from-violet-500 hover:to-blue-600 hover:shadow-lg hover:shadow-indigo-500/20'
                  : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg hover:shadow-indigo-500/20'
              }`} 
            >
              <Code2 size={16} />
              View Code
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium ${
                darkMode
                  ? 'border-white/10 text-slate-400'
                  : 'border-slate-200 text-slate-500'
              }`}
            >
              <Code2 size={16} />
              Repository link to be added
            </span>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                darkMode
                  ? 'border-white/10 text-slate-200 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-200'
                  : 'border-slate-300 text-slate-700 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700'
              }`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const reduceMotion = useReducedMotion()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const updateTheme = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:py-28 ${
        darkMode ? 'bg-[#09090f] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full blur-[120px] ${
          darkMode ? 'bg-indigo-600/10' : 'bg-blue-400/10'
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
                ? 'border-indigo-400/20 bg-indigo-400/10 text-indigo-200'
                : 'border-indigo-200 bg-indigo-50 text-indigo-800'
            }`}
          >
            <Code2 size={15} />
            Selected Work
          </span>

          <h2
            className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Projects built through
            <span className="block bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-300" >
              learning and practice.
            </span>
          </h2>

          <p
            className={`mt-5 text-base leading-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            A selection of my software projects, where I practise building
            interfaces, connecting APIs, working with databases, and solving
            practical problems.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              reduceMotion={reduceMotion}
              darkMode={darkMode}
            />
          ))}
        </div>

        <div
          className={`mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border p-6 sm:flex-row sm:p-8 ${
            darkMode
              ? 'border-white/10 bg-white/[0.04]'
              : 'border-slate-200 bg-white'
          }`}
        >
          <div>
            <h3
              className={`text-lg font-bold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Explore more of my work
            </h3>

            <p
              className={`mt-2 text-sm leading-6 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Visit my GitHub profile to explore available repositories.
            </p>
          </div>

          <a
            href="https://github.com/Mudu-abdullahi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500 hover:shadow-indigo-500/30" 
          >
            <Code2 size={17} />
            Visit GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
