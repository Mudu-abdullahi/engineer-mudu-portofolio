import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  Code2,
  Zap,
} from 'lucide-react'

const EMAIL = 'your-email@example.com'

export default function Contact() {
  const reduceMotion = useReducedMotion()

  const [darkMode, setDarkMode] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : true,
  )

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

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

  const theme = darkMode
    ? {
        section: 'border-slate-800 bg-[#080F20]',
        heading: 'text-white',
        text: 'text-slate-300',
        muted: 'text-slate-400',
        label: 'text-slate-300',
        card: 'border-slate-700 bg-slate-900/70',
        input:
          'border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20',
        iconCard: 'border-white/10 bg-white/5',
      }
    : {
        section: 'border-slate-200 bg-white',
        heading: 'text-slate-950',
        text: 'text-slate-600',
        muted: 'text-slate-500',
        label: 'text-slate-700',
        card: 'border-slate-200 bg-slate-50/80',
        input:
          'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/10',
        iconCard: 'border-slate-200 bg-white/10',
      }

  const updateField = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()
    const subjectText =
      form.subject.trim() || `Portfolio enquiry from ${name}`

    if (!name || !email || !message) return

    if (EMAIL === 'your-email@example.com') {
      window.alert(
        'Please configure your email address in Contact.jsx before using this form.',
      )
      return
    }

    const subject = encodeURIComponent(subjectText)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const fadeIn = reduceMotion ? false : { opacity: 0, y: 20 }

  const inputClassName = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-4 ${theme.input}`

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`scroll-mt-24 border-t px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:py-28 ${theme.section}`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={fadeIn}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-500">
            Get in touch
          </p>

          <h2
            id="contact-heading"
            className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${theme.heading}`}
          >
            Let's discuss an idea or opportunity.
          </h2>

          <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${theme.text}`}>
            Have a project in mind, want to discuss technology, or see an
            opportunity to collaborate? I'd be glad to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* Contact information */}
          <motion.aside
            initial={fadeIn}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
            className={`relative overflow-hidden rounded-3xl p-7 transition-colors duration-300 sm:p-9 ${
              darkMode
                ? 'bg-slate-950 text-white'
                : 'bg-slate-900 text-white'
            }`}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                <Mail size={24} aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Contact details
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                For software development, electrical engineering discussions,
                project enquiries, or professional opportunities, feel free
                to reach out.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="rounded-xl bg-white/10 p-3 text-blue-300">
                    <Mail size={20} aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold">Email</p>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 block break-all text-sm leading-6 text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="rounded-xl bg-white/10 p-3 text-amber-300">
                    <MapPin size={20} aria-hidden="true" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold">Location</p>
                    <p className="mt-1 text-sm text-slate-300">
                      Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  Find me online
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Mudu-abdullahi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                  >
                    GitHub
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/eng-mohamud-abdullahi-b01b97368/?isSelfProfile=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                  >
                    LinkedIn
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Professional interests */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Code2
                    size={19}
                    className="text-blue-300"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-sm font-semibold">Software</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Apps and web projects
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Zap
                    size={19}
                    className="text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-sm font-semibold">Engineering</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Technical ideas and solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Contact form */}
          <motion.div
            initial={fadeIn}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.08,
            }}
            className={`rounded-3xl border p-6 transition-colors duration-300 sm:p-9 ${theme.card}`}
          >
            <h3 className={`text-xl font-bold sm:text-2xl ${theme.heading}`}>
              Send an enquiry
            </h3>

            <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>
              Fill in the details below. Your email application will open
              with your message ready to review.
            </p>

            <form onSubmit={handleSubmit} className="mt-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className={`mb-2 block text-sm font-semibold ${theme.label}`}
                  >
                    Your name <span className="text-blue-500">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    required
                    maxLength={100}
                    autoComplete="name"
                    placeholder="Enter your name"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className={`mb-2 block text-sm font-semibold ${theme.label}`}
                  >
                    Your email <span className="text-blue-500">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClassName}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-subject"
                    className={`mb-2 block text-sm font-semibold ${theme.label}`}
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={updateField}
                    maxLength={150}
                    placeholder="What would you like to discuss?"
                    className={inputClassName}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className={`mb-2 block text-sm font-semibold ${theme.label}`}
                  >
                    Message <span className="text-blue-500">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    required
                    maxLength={5000}
                    rows={6}
                    placeholder="Tell me about your project or enquiry..."
                    className={`${inputClassName} resize-y`}
                  />

                  <p className={`mt-2 text-right text-xs ${theme.muted}`}>
                    {form.message.length}/5000 characters
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
              >
                Prepare email
                <Send size={17} aria-hidden="true" />
              </button>

              <p className={`mt-4 flex items-start gap-2 text-xs leading-5 ${theme.muted}`}>
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                This form opens your email application. It does not send
                messages directly from the website.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}