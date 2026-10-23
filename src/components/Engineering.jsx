
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Zap,
  CircuitBoard,
  Activity,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Wrench,
  Calculator,
  Gauge,
  RotateCcw,
  Lightbulb,
} from 'lucide-react'

const areas = [
  {
    icon: CircuitBoard,
    number: '01',
    title: 'Circuit Analysis',
    description:
      'Explore electrical quantities, component behaviour, circuit principles, and analytical approaches to electrical problems.',
    topics: ['Voltage and current', 'Circuit fundamentals', 'Electrical components'],
  },
  {
    icon: Zap,
    number: '02',
    title: 'Electrical Systems',
    description:
      'Develop an understanding of electrical system components, technical diagrams, installation principles, and system behaviour.',
    topics: ['System fundamentals', 'Technical diagrams', 'System components'],
  },
  {
    icon: Activity,
    number: '03',
    title: 'Testing & Troubleshooting',
    description:
      'Use a structured approach to investigate faults, interpret measurements, and document technical findings.',
    topics: ['Fault investigation', 'Electrical measurements', 'Technical reports'],
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Safety & Reliability',
    description:
      'Consider safe working practices, hazard awareness, relevant standards, and reliable engineering outcomes.',
    topics: ['Risk awareness', 'Safe working practices', 'System reliability'],
  },
]

const caseStudySteps = [
  'Define the engineering problem',
  'Document diagrams and calculations',
  'Identify components and design choices',
  'Describe testing, safety, and results',
  'Record lessons learned',
]

const fieldConfig = {
  current: [
    { key: 'voltage', label: 'Voltage', unit: 'V', placeholder: '12' },
    { key: 'resistance', label: 'Resistance', unit: 'Ω', placeholder: '6' },
  ],
  voltage: [
    { key: 'current', label: 'Current', unit: 'A', placeholder: '2' },
    { key: 'resistance', label: 'Resistance', unit: 'Ω', placeholder: '6' },
  ],
  resistance: [
    { key: 'voltage', label: 'Voltage', unit: 'V', placeholder: '12' },
    { key: 'current', label: 'Current', unit: 'A', placeholder: '2' },
  ],
}

function ElectricalLab() {
  const [mode, setMode] = useState('current')
  const [firstValue, setFirstValue] = useState('12')
  const [secondValue, setSecondValue] = useState('6')

  const fields = fieldConfig[mode]
  const values = {
    [fields[0].key]: firstValue,
    [fields[1].key]: secondValue,
  }

  const first = Number(firstValue)
  const second = Number(secondValue)

  const valid =
    firstValue.trim() !== '' &&
    secondValue.trim() !== '' &&
    Number.isFinite(first) &&
    Number.isFinite(second) &&
    first >= 0 &&
    second >= 0 &&
    (mode !== 'current' || second > 0) &&
    (mode !== 'resistance' || first > 0) &&
    (mode !== 'resistance' || second > 0)

  let voltage = Number(values.voltage)
  let current = Number(values.current)
  let resistance = Number(values.resistance)

  if (mode === 'current') {
    current = resistance > 0 ? voltage / resistance : 0
  } else if (mode === 'voltage') {
    voltage = current * resistance
  } else {
    resistance = current > 0 ? voltage / current : 0
  }

  const power = voltage * current

  const result =
    mode === 'current'
      ? current
      : mode === 'voltage'
        ? voltage
        : resistance

  const resultUnit =
    mode === 'current' ? 'A' : mode === 'voltage' ? 'V' : 'Ω'

  const formula =
    mode === 'current'
      ? 'I = V ÷ R'
      : mode === 'voltage'
        ? 'V = I × R'
        : 'R = V ÷ I'

  const calculation =
    mode === 'current'
      ? `${voltage} ÷ ${resistance}`
      : mode === 'voltage'
        ? `${current} × ${resistance}`
        : `${voltage} ÷ ${current}`

  function resetCalculator() {
    setMode('current')
    setFirstValue('12')
    setSecondValue('6')
  }

  function changeMode(nextMode) {
    setMode(nextMode)
    setFirstValue(nextMode === 'voltage' ? '2' : '12')
    setSecondValue(nextMode === 'resistance' ? '2' : '6')
  }

  return (
    <div className="mt-12 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 text-white shadow-2xl shadow-slate-950/10">
      <div className="relative overflow-hidden border-b border-white/10 px-6 py-8 sm:px-9">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"
        />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-amber-300">
              <Activity size={14} />
              Interactive learning tool
            </span>

            <h3 className="mt-4 text-2xl font-extrabold sm:text-3xl">
              Electrical Engineering Lab
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Explore Ohm&apos;s Law and electrical power. Change the inputs
              to calculate electrical quantities instantly.
            </p>
          </div>

          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
            <Calculator size={25} />
          </span>
        </div>
      </div>

      <div className="grid gap-7 p-5 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-9">
        <div>
          <p className="text-sm font-bold">1. Choose what to calculate</p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { id: 'current', label: 'Current (I)' },
              { id: 'voltage', label: 'Voltage (V)' },
              { id: 'resistance', label: 'Resistance (R)' },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => changeMode(option.id)}
                aria-pressed={mode === option.id}
                className={`rounded-xl border px-2 py-3 text-xs font-bold transition sm:text-sm ${
                  mode === option.id
                    ? 'border-amber-400 bg-amber-400 text-slate-950'
                    : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-amber-400/50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <p className="mt-6 text-sm font-bold">
            2. Enter the known values
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {fields.map((field, index) => (
              <label key={field.key} className="block">
                <span className="text-sm font-medium text-slate-300">
                  {field.label} ({field.unit})
                </span>

                <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/[0.05] focus-within:border-amber-400">
                  <input
                    type="number"
                    min="0"
                    step="any"
                    inputMode="decimal"
                    value={index === 0 ? firstValue : secondValue}
                    onChange={(event) =>
                      index === 0
                        ? setFirstValue(event.target.value)
                        : setSecondValue(event.target.value)
                    }
                    placeholder={field.placeholder}
                    aria-label={`${field.label} in ${field.unit}`}
                    className="w-full min-w-0 bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
                  />

                  <span className="pr-4 text-sm font-bold text-amber-300">
                    {field.unit}
                  </span>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Use non-negative values and valid units.
            </span>

            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <RotateCcw size={14} />
              Reset
            </button>
          </div>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Lightbulb size={17} className="text-amber-300" />
              Formula used
            </div>

            <p className="mt-3 font-mono text-xl font-bold text-amber-300">
              {formula}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Substitution: {calculation}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-orange-400/[0.03] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <Gauge size={17} className="text-amber-300" />
              Calculated result
            </div>

            {valid ? (
              <>
                <div className="mt-4 flex flex-wrap items-baseline gap-2">
                  <span className="break-all text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {Number.isFinite(result)
                      ? Number(result.toFixed(4))
                      : '—'}
                  </span>

                  <span className="text-lg font-bold text-amber-300">
                    {resultUnit}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {mode === 'current'
                    ? 'Current flowing through the ideal resistive circuit.'
                    : mode === 'voltage'
                      ? 'Voltage across the ideal resistive component.'
                      : 'Resistance of the ideal component.'}
                </p>
              </>
            ) : (
              <p role="status" className="mt-4 text-sm leading-6 text-amber-200">
                Enter valid values. Resistance must be greater than zero when
                calculating current, and current must be greater than zero
                when calculating resistance.
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-bold">Circuit preview</p>

            <svg
              viewBox="0 0 320 150"
              role="img"
              aria-label="Simplified series circuit containing a voltage source and resistor"
              className="mt-4 w-full"
            >
              <path
                d="M60 35 H132 M188 35 H260 V115 H60 V35"
                fill="none"
                stroke="#64748b"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M132 35 L140 23 L152 47 L164 23 L176 47 L188 35"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              <circle
                cx="60"
                cy="75"
                r="20"
                fill="#172033"
                stroke="#fbbf24"
                strokeWidth="2.5"
              />

              <path
                d="M60 64 V72 M56 68 H64 M54 83 H66"
                stroke="#fbbf24"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <text x="160" y="15" fill="#fbbf24" fontSize="11" textAnchor="middle">
                R
              </text>

              <text x="160" y="133" fill="#cbd5e1" fontSize="11" textAnchor="middle">
                Ideal resistive circuit
              </text>

              <text x="26" y="112" fill="#cbd5e1" fontSize="10">
                Source
              </text>

              {valid && (
                <text
                  x="160"
                  y="76"
                  fill="#34d399"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  I = {Number(current.toFixed(3))} A
                </text>
              )}
            </svg>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/[0.05] p-3">
                <p className="text-xs text-slate-400">Voltage</p>
                <p className="mt-1 font-bold">
                  {valid ? `${Number(voltage.toFixed(3))} V` : '—'}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.05] p-3">
                <p className="text-xs text-slate-400">Power</p>
                <p className="mt-1 font-bold">
                  {valid ? `${Number(power.toFixed(3))} W` : '—'}
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs leading-6 text-slate-400">
            Assumes an ideal DC source and a purely resistive load. This
            simulation does not model component tolerances, temperature,
            transient behaviour, or real-world circuit faults.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Engineering() {
  const reduceMotion = useReducedMotion()
  const [darkMode, setDarkMode] = useState(false)

  // Follow the theme selected by the global navbar toggle.
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
    section: darkMode ? 'bg-slate-950' : 'bg-white',
    heading: darkMode ? 'text-white' : 'text-slate-950',
    paragraph: darkMode ? 'text-slate-300' : 'text-slate-600',
    card: darkMode
      ? 'border-slate-800 bg-slate-900'
      : 'border-slate-200 bg-white',
    cardHeading: darkMode ? 'text-white' : 'text-slate-900',
    muted: darkMode ? 'text-slate-400' : 'text-slate-500',
  }

  return (
    <section
      id="engineering"
      className={`relative scroll-mt-24 overflow-hidden px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:py-28 ${colors.section}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-40 top-16 h-96 w-96 rounded-full blur-3xl ${
          darkMode ? 'bg-amber-500/10' : 'bg-amber-100/40'
        }`}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
          >
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-bold uppercase tracking-[0.15em] ${
                darkMode
                  ? 'border-amber-400/30 bg-amber-400/10 text-amber-300'
                  : 'border-amber-200 bg-amber-50 text-amber-700'
              }`}
            >
              <Zap size={15} />
              Electrical Engineering
            </div>

            <h2
              className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${colors.heading}`}
            >
              Understanding systems.{' '}
              <span className={darkMode ? 'text-amber-400' : 'text-amber-600'}>
                Solving technical challenges.
              </span>
            </h2>

            <p className={`mt-6 leading-8 ${colors.paragraph}`}>
              Electrical engineering brings a practical systems perspective
              to my wider interest in technology. Here, I highlight the
              technical areas I am developing and the engineering projects
              I plan to document as my portfolio grows.
            </p>

            <p className={`mt-4 leading-8 ${colors.paragraph}`}>
              My goal is to connect engineering principles with structured
              problem-solving and, where appropriate, software-based tools
              that help people understand and manage technical systems.
            </p>

            <a
              href="#projects"
              className={`group mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${
                darkMode
                  ? 'bg-white text-slate-950 hover:bg-slate-200'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              Explore My Projects
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <div
              className={`mt-9 rounded-2xl border p-5 sm:p-6 ${
                darkMode
                  ? 'border-amber-400/20 bg-amber-400/[0.06]'
                  : 'border-amber-100 bg-amber-50/70'
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm ${
                    darkMode
                      ? 'bg-amber-400/10 text-amber-300'
                      : 'bg-white text-amber-600'
                  }`}
                >
                  <Wrench size={22} />
                </span>

                <div>
                  <h3 className={`font-bold ${colors.cardHeading}`}>
                    Practical engineering mindset
                  </h3>

                  <p className={`mt-2 text-sm leading-7 ${colors.paragraph}`}>
                    Understand the problem, analyse the system, consider
                    safety, and document the outcome clearly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map((area, index) => {
              const Icon = area.icon

              return (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className={`group flex h-full flex-col rounded-2xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${
                    darkMode
                      ? 'border-slate-800 bg-slate-900 hover:border-amber-400/40 hover:shadow-black/20'
                      : 'border-slate-200 bg-white hover:border-amber-200 hover:shadow-slate-900/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                        darkMode
                          ? 'bg-amber-400/10 text-amber-300 group-hover:bg-amber-500 group-hover:text-slate-950'
                          : 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'
                      }`}
                    >
                      <Icon size={24} />
                    </span>

                    <span
                      className={`text-xs font-bold tracking-widest ${
                        darkMode ? 'text-slate-600' : 'text-slate-300'
                      }`}
                    >
                      {area.number}
                    </span>
                  </div>

                  <h3 className={`mt-5 text-lg font-bold ${colors.cardHeading}`}>
                    {area.title}
                  </h3>

                  <p className={`mt-3 text-sm leading-7 ${colors.paragraph}`}>
                    {area.description}
                  </p>

                  <ul
                    className={`mt-5 space-y-3 border-t pt-4 ${
                      darkMode ? 'border-slate-800' : 'border-slate-100'
                    }`}
                  >
                    {area.topics.map((topic) => (
                      <li
                        key={topic}
                        className={`flex items-start gap-2 text-xs font-medium leading-5 ${colors.muted}`}
                      >
                        <CheckCircle2
                          size={15}
                          className={`mt-0.5 shrink-0 ${
                            darkMode ? 'text-amber-400' : 'text-amber-600'
                          }`}
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </div>

        <ElectricalLab />

        {/* Engineering project documentation */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className={`mt-12 overflow-hidden rounded-3xl border ${
            darkMode
              ? 'border-slate-800 bg-slate-900'
              : 'border-slate-200 bg-slate-950'
          }`}
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-400">
                <CircuitBoard size={25} />
              </span>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                Project documentation
              </p>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Turning engineering work into clear case studies.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Each project can document the problem, design process,
                technical reasoning, testing, and lessons learned.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
              >
                Get in touch
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <p className="text-sm font-bold text-white">
                Suggested case-study structure
              </p>

              <ol className="mt-5 space-y-4">
                {caseStudySteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-xs font-bold text-amber-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="pt-1 text-sm leading-6 text-slate-300">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>

        <p className={`mt-5 text-xs leading-6 ${colors.muted}`}>
          The lab is an educational calculation tool, not a physical circuit
          simulator or a replacement for professional electrical testing.
          Add real project evidence, diagrams, measurements, and results as
          you complete work you can demonstrate.
        </p>
      </div>
    </section>
  )
}
