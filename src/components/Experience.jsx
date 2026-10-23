
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Code2,
  Zap,
  GraduationCap,
  GitBranch,
  ArrowUpRight,
  BriefcaseBusiness,
} from 'lucide-react'

const experiences = [
  {
    period: 'Ongoing',
    type: 'Software Development',
    title: 'Full-Stack Development Projects',
    organization: 'Personal Projects',
    description:
      'Building practical web applications to strengthen my frontend, backend, database, and software development skills.',
    highlights: [
      'Developing Xaaji Electronics using React, Tailwind CSS, Node.js, Express, and MongoDB.',
      'Working with REST APIs and database-backed features.',
      'Practising responsive design, reusable components, debugging, and application testing.',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    icon: Code2,
    accent: 'blue',
  },
  {
    period: 'Through January 2027',
    type: 'Electrical Engineering',
    title: 'Electrical Engineering Studies',
    organization: 'Academic and Practical Learning',
    description:
      'Developing my understanding of electrical systems and technical problem-solving through engineering studies and practical learning.',
    highlights: [
      'Exploring electrical systems and circuit fundamentals.',
      'Developing technical analysis and troubleshooting skills.',
      'Planning an electrical supplies and repair-services business through Xaaji Electronics.',
    ],
    technologies: [
      'Circuit Fundamentals',
      'Electrical Systems',
      'Technical Problem-solving',
    ],
    icon: Zap,
    accent: 'amber',
  },
  {
    period: 'Ongoing',
    type: 'Independent Learning',
    title: 'Technical Learning and Projects',
    organization: 'Self-directed Development',
    description:
      'Continuing to build technical knowledge through coding practice, database exercises, developer tools, and Microsoft Learn.',
    highlights: [
      'Practising Python, JavaScript, and SQL.',
      'Using Git and GitHub to manage development work.',
      'Exploring Microsoft Azure and cloud computing fundamentals.',
    ],
    technologies: ['Python', 'SQL', 'Git', 'GitHub', 'Azure Learning'],
    icon: GitBranch,
    accent: 'indigo',
  },
]

const accents = {
  blue: {
    icon: 'bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300',
    label:
      'border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300',
    dot: 'bg-blue-500',
  },
  amber: {
    icon: 'bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300',
    label:
      'border-amber-100 bg-amber-50 text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300',
    dot: 'bg-amber-500',
  },
  indigo: {
    icon: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300',
    label:
      'border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300',
    dot: 'bg-indigo-500',
  },
}

export default function Experience() {
  const reduceMotion = useReducedMotion()
  const [darkMode, setDarkMode] = useState(false)

  // Synchronize with the global theme toggle in App.jsx.
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
    cardHeading: darkMode ? 'text-white' : 'text-slate-950',
    muted: darkMode ? 'text-slate-400' : 'text-slate-500',
  }

  return (
    <section
      id="experience"
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:py-28 ${colors.section}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full blur-3xl ${
          darkMode ? 'bg-blue-900/20' : 'bg-blue-100/70'
        }`}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
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
            <BriefcaseBusiness size={15} />
            Experience & Development
          </span>

          <h2
            className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${colors.heading}`}
          >
            My journey of
            <span
              className={`block ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              learning and building.
            </span>
          </h2>

          <p className={`mt-5 max-w-2xl text-base leading-8 ${colors.paragraph}`}>
            My journey combines software development projects, electrical
            engineering studies, and independent technical learning. These
            experiences reflect the skills I am developing and the work I
            am building along the way.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative mt-12 space-y-6">
          <div
            aria-hidden="true"
            className={`absolute bottom-8 left-6 top-8 hidden w-px sm:block ${
              darkMode ? 'bg-slate-800' : 'bg-slate-200'
            }`}
          />

          {experiences.map((experience, index) => {
            const Icon = experience.icon
            const accent = accents[experience.accent]

            return (
              <motion.article
                key={experience.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="relative sm:pl-16"
              >
                <span
                  className={`absolute left-[17px] top-7 z-10 hidden h-[19px] w-[19px] rounded-full border-4 sm:block ${
                    darkMode ? 'border-slate-950' : 'border-slate-50'
                  } ${accent.dot}`}
                />

                <div
                  className={`rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-8 ${
                    darkMode
                      ? 'border-slate-800 bg-slate-900 hover:border-slate-700 hover:shadow-black/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-slate-900/5'
                  }`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accent.icon}`}
                      >
                        <Icon size={24} />
                      </span>

                      <div>
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${accent.label}`}
                        >
                          {experience.type}
                        </span>

                        <h3
                          className={`mt-3 text-xl font-extrabold sm:text-2xl ${colors.cardHeading}`}
                        >
                          {experience.title}
                        </h3>

                        <p className={`mt-1 text-sm font-medium ${colors.muted}`}>
                          {experience.organization}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`w-fit shrink-0 rounded-lg px-3 py-2 text-xs font-bold ${
                        darkMode
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {experience.period}
                    </span>
                  </div>

                  <p className={`mt-6 text-sm leading-7 sm:text-base ${colors.paragraph}`}>
                    {experience.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className={`flex items-start gap-3 text-sm leading-6 ${colors.paragraph}`}
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-6 flex flex-wrap gap-2 border-t pt-5 ${
                      darkMode ? 'border-slate-800' : 'border-slate-100'
                    }`}
                  >
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${
                          darkMode
                            ? 'border-slate-700 bg-slate-800 text-slate-300'
                            : 'border-slate-200 bg-slate-50 text-slate-600'
                        }`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Learning and growth panel */}
        <div
          className={`mt-10 flex flex-col gap-4 rounded-2xl border p-6 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between sm:p-8 ${
            darkMode
              ? 'border-blue-400/20 bg-blue-400/[0.06]'
              : 'border-blue-100 bg-blue-50/70'
          }`}
        >
          <div className="flex items-start gap-4">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm ${
                darkMode
                  ? 'bg-blue-400/10 text-blue-300'
                  : 'bg-white text-blue-600'
              }`}
            >
              <GraduationCap size={23} />
            </span>

            <div>
              <h3 className={`font-bold ${colors.cardHeading}`}>
                Always learning, always improving
              </h3>

              <p className={`mt-2 max-w-2xl text-sm leading-7 ${colors.paragraph}`}>
                I aim to turn what I learn into practical projects and
                demonstrable technical work.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className={`inline-flex shrink-0 items-center gap-2 text-sm font-bold transition ${
              darkMode
                ? 'text-blue-300 hover:text-blue-200'
                : 'text-blue-700 hover:text-blue-900'
            }`}
          >
            View projects
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
