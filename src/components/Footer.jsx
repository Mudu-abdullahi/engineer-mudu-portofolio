import { useEffect, useState } from 'react'
import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Zap,
  MapPin,
  Mail,
} from 'lucide-react'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Mudu-abdullahi',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
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

  const theme = darkMode
    ? {
        background: 'bg-[#080F20]',
        panel: 'border-white/10 bg-white/[0.045]',
        heading: 'text-white',
        text: 'text-slate-300',
        muted: 'text-slate-400',
        subtle: 'text-slate-500',
        border: 'border-white/10',
        link: 'text-slate-400 hover:text-white',
        social:
          'border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white',
        backToTop:
          'border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white',
        grid: 'rgba(148,163,184,0.035)',
      }
    : {
        background: 'bg-slate-50',
        panel: 'border-slate-200 bg-white/80',
        heading: 'text-slate-900',
        text: 'text-slate-600',
        muted: 'text-slate-600',
        subtle: 'text-slate-500',
        border: 'border-slate-200',
        link: 'text-slate-600 hover:text-blue-700',
        social:
          'border-slate-200 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700',
        backToTop:
          'border-slate-200 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700',
        grid: 'rgba(100,116,139,0.07)',
      }

  return (
    <footer
      id="site-footer"
      className={`relative isolate overflow-hidden px-5 pt-16 pb-8 transition-colors duration-300 sm:px-8 sm:pt-20 ${theme.background} ${theme.heading}`}
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className={`absolute -top-40 left-[10%] h-80 w-80 rounded-full blur-[120px] ${
            darkMode ? 'bg-blue-600/20' : 'bg-blue-400/15'
          }`}
        />
        <div
          className={`absolute -right-24 top-20 h-72 w-72 rounded-full blur-[110px] ${
            darkMode ? 'bg-indigo-500/10' : 'bg-indigo-300/20'
          }`}
        />
        <div
          className={`absolute -bottom-40 right-[25%] h-72 w-72 rounded-full blur-[110px] ${
            darkMode ? 'bg-amber-500/[0.07]' : 'bg-amber-300/15'
          }`}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${theme.grid} 1px, transparent 1px), linear-gradient(90deg, ${theme.grid} 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Contact call-to-action */}
        <div
          className={`relative mb-16 overflow-hidden rounded-3xl border p-7 shadow-xl backdrop-blur-sm transition-colors duration-300 sm:p-10 lg:p-12 ${theme.panel} ${
            darkMode ? 'shadow-black/10' : 'shadow-slate-200/60'
          }`}
        >
          <div
            className={`pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full blur-3xl ${
              darkMode ? 'bg-blue-500/15' : 'bg-blue-400/15'
            }`}
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${
                  darkMode
                    ? 'border-blue-400/20 bg-blue-400/10 text-blue-300'
                    : 'border-blue-200 bg-blue-50 text-blue-700'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Let's connect
              </p>

              <h2 className={`mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl ${theme.heading}`}>
                Have an idea?
                <span className="mt-1 block text-blue-500">
                  Let's build something meaningful.
                </span>
              </h2>

              <p className={`mt-4 max-w-xl text-sm leading-7 sm:text-base ${theme.text}`}>
                From software projects to engineering ideas, I'm interested
                in learning, solving problems, and exploring opportunities
                to create practical solutions.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              <Mail size={18} aria-hidden="true" />
              Get in touch
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr] lg:gap-16">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#home"
              aria-label="Engineer Mudu, back to home"
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-950/20 transition group-hover:-translate-y-0.5">
                <Code2 size={24} strokeWidth={2} />
              </span>

              <span className={`text-xl font-extrabold tracking-tight ${theme.heading}`}>
                Engineer Mudu<span className="text-blue-500">.</span>
              </span>
            </a>

            <p className={`mt-5 text-sm leading-7 ${theme.muted}`}>
              Bringing together software development and electrical
              engineering through practical problem-solving, creativity,
              and continuous learning.
            </p>

            <div className={`mt-5 inline-flex items-center gap-2 text-sm ${theme.muted}`}>
              <MapPin
                size={16}
                className="text-blue-500"
                aria-hidden="true"
              />
              Kenya
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold ${
                  darkMode
                    ? 'border-blue-400/15 bg-blue-400/[0.07] text-blue-200'
                    : 'border-blue-200 bg-blue-50 text-blue-700'
                }`}
              >
                <Code2 size={14} aria-hidden="true" />
                Software Development
              </span>

              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold ${
                  darkMode
                    ? 'border-amber-400/15 bg-amber-400/[0.07] text-amber-200'
                    : 'border-amber-200 bg-amber-50 text-amber-800'
                }`}
              >
                <Zap size={14} aria-hidden="true" />
                Electrical Engineering
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={`text-sm font-bold uppercase tracking-[0.16em] ${theme.heading}`}>
              Explore
            </h3>

            <div className="mt-5 h-0.5 w-10 rounded-full bg-blue-500" />

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="grid grid-cols-2 gap-x-5 gap-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`inline-flex items-center text-sm transition hover:translate-x-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 ${theme.link}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social links */}
          <div>
            <h3 className={`text-sm font-bold uppercase tracking-[0.16em] ${theme.heading}`}>
              Follow my journey
            </h3>

            <div className="mt-5 h-0.5 w-10 rounded-full bg-amber-500" />

            <p className={`mt-5 text-sm leading-7 ${theme.muted}`}>
              Explore my projects, follow my learning journey, and connect
              with me online.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} profile, opens in a new tab`}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition hover:border-blue-400/40 hover:bg-blue-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${theme.social}`}
                >
                  {link.label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
            </div>

            <a
              href="#projects"
              className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition ${
                darkMode
                  ? 'text-blue-300 hover:text-blue-200'
                  : 'text-blue-700 hover:text-blue-600'
              }`}
            >
              Explore my projects
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-14 border-t pt-6 ${theme.border}`}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className={`text-sm font-semibold ${theme.text}`}>
                © {currentYear} Mohamud Abdullahi
              </p>

              <p className={`mt-1 text-xs leading-5 ${theme.subtle}`}>
                Designed with purpose. Built for continuous growth.
              </p>
            </div>

            <a
              href="#home"
              className={`group inline-flex w-fit items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition hover:border-blue-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${theme.backToTop}`}
            >
              Back to top
              <ArrowUp
                size={16}
                className="transition-transform group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}