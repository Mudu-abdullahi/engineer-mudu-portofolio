
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Lightbulb,
  Target,
  Layers3,
  Code2,
  Zap,
  CheckCircle2,
  Compass,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const principles = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Problem-solving',
    description:
      'I approach challenges by understanding the problem, breaking it into manageable steps, and exploring practical solutions.',
    color: 'blue',
  },
  {
    icon: Target,
    number: '02',
    title: 'Continuous learning',
    description:
      'I strengthen my skills through hands-on projects, technical practice, and exploring new tools and concepts.',
    color: 'indigo',
  },
  {
    icon: Layers3,
    number: '03',
    title: 'Practical thinking',
    description:
      'I value clear documentation, maintainable software, careful analysis, and solutions designed around real needs.',
    color: 'amber',
  },
]

const focusAreas = [
  'Responsive web interfaces',
  'REST APIs and database integration',
  'Electrical circuit fundamentals',
  'Technical troubleshooting',
]

export default function About() {
  const reduceMotion = useReducedMotion()
  const [darkMode, setDarkMode] = useState(false)

  // Follow the global theme selected in App.jsx.
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

  const colors = {
    section: darkMode ? 'bg-slate-950' : 'bg-slate-50',
    heading: darkMode ? 'text-white' : 'text-slate-950',
    paragraph: darkMode ? 'text-slate-300' : 'text-slate-600',
    card: darkMode
      ? 'border-slate-800 bg-slate-900'
      : 'border-slate-200 bg-white',
    cardHeading: darkMode ? 'text-white' : 'text-slate-900',
    label: darkMode ? 'text-slate-400' : 'text-slate-400',
    principleNumber: darkMode ? 'text-slate-600' : 'text-slate-300',
  }

  const iconColors = {
    blue: darkMode
      ? 'bg-blue-400/10 text-blue-300'
      : 'bg-blue-50 text-blue-600',
    indigo: darkMode
      ? 'bg-indigo-400/10 text-indigo-300'
      : 'bg-indigo-50 text-indigo-600',
    amber: darkMode
      ? 'bg-amber-400/10 text-amber-300'
      : 'bg-amber-50 text-amber-600',
  }

  return (
    <section
      id="about"
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:py-28 ${colors.section}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? 'bg-blue-900/20' : 'bg-blue-100/70'
        }`}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="max-w-3xl"
        >
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] ${
              darkMode
                ? 'border-blue-400/30 bg-blue-400/10 text-blue-300'
                : 'border-blue-200 bg-blue-50 text-blue-700'
            }`}
          >
            <Compass size={15} />
            About Me
          </span>

          <h2
            className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${colors.heading}`}
          >
            Curious by nature.
            <span className="block text-blue-600 dark:text-blue-400">
              Driven to build.
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${colors.paragraph}`}
          >
            I am Mohamud Abdullahi, a technology enthusiast developing my
            expertise in software development alongside my electrical
            engineering studies. I enjoy learning how systems work and
            applying that understanding to practical challenges.
          </p>
        </motion.div>

        {/* Story and focus areas */}
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
            className={`rounded-3xl border p-6 shadow-sm transition-colors duration-300 sm:p-8 lg:p-10 ${colors.card}`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  darkMode
                    ? 'bg-blue-400/10 text-blue-300'
                    : 'bg-blue-50 text-blue-600'
                }`}
              >
                <Code2 size={24} />
              </span>

              <div>
                <p
                  className={`text-xs font-bold uppercase tracking-[0.14em] ${colors.label}`}
                >
                  My journey
                </p>
                <h3
                  className={`mt-1 text-xl font-extrabold ${colors.cardHeading}`}
                >
                  Software meets engineering
                </h3>
              </div>
            </div>

            <div
              className={`mt-6 space-y-4 text-sm leading-7 sm:text-base ${colors.paragraph}`}
            >
              <p>
                Through software projects, I practise building responsive
                interfaces, connecting APIs, working with databases, and
                organizing code into reusable components.
              </p>

              <p>
                My electrical engineering studies help me explore circuit
                principles, electrical systems, measurements, and structured
                technical problem-solving.
              </p>

              <p>
                I am interested in how these fields can complement one
                another to create useful tools and services. My portfolio
                documents my learning, projects, and progress as I continue
                developing my skills.
              </p>
            </div>

            <a
              href="#projects"
              className={`group mt-7 inline-flex items-center gap-2 text-sm font-bold transition ${
                darkMode
                  ? 'text-blue-300 hover:text-blue-200'
                  : 'text-blue-700 hover:text-blue-900'
              }`}
            >
              Explore my projects
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Focus areas */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: 0.08,
            }}
            className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl shadow-slate-900/10 transition-colors duration-300 dark:bg-slate-900 sm:p-8 lg:p-9"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
              What I focus on
            </p>

            <h3 className="mt-3 text-2xl font-extrabold">
              Learning through practice.
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              I focus on building a strong foundation and turning concepts
              into work I can explain, test, and improve.
            </p>

            <ul className="mt-7 space-y-4">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-blue-300"
                  />
                  <span className="text-sm leading-6 text-slate-200">
                    {area}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
                <Code2 size={23} className="text-blue-300" />
                <h4 className="mt-3 font-bold">Software</h4>
                <p className="mt-1 text-xs leading-5 text-slate-300">
                  Applications and digital tools
                </p>
              </div>

              <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
                <Zap size={23} className="text-amber-300" />
                <h4 className="mt-3 font-bold">Electrical</h4>
                <p className="mt-1 text-xs leading-5 text-slate-300">
                  Systems and circuit principles
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Working principles */}
        <div className="mt-16">
          <div className="mb-7">
            <p
              className={`text-xs font-bold uppercase tracking-[0.16em] ${
                darkMode ? 'text-blue-300' : 'text-blue-700'
              }`}
            >
              How I work
            </p>

            <h3
              className={`mt-2 text-2xl font-extrabold sm:text-3xl ${colors.heading}`}
            >
              Principles behind my work
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon

              return (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    darkMode
                      ? 'border-slate-800 bg-slate-900 hover:shadow-black/20'
                      : 'border-slate-200 bg-white hover:shadow-slate-900/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconColors[principle.color]}`}
                    >
                      <Icon size={23} />
                    </span>

                    <span
                      className={`text-xs font-bold tracking-widest ${colors.principleNumber}`}
                    >
                      {principle.number}
                    </span>
                  </div>

                  <h4
                    className={`mt-5 text-lg font-extrabold ${colors.cardHeading}`}
                  >
                    {principle.title}
                  </h4>

                  <p className={`mt-3 text-sm leading-7 ${colors.paragraph}`}>
                    {principle.description}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
