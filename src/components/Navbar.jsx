
import { useEffect, useState } from 'react'
import {
  Code2,
  Menu,
  X,
  ChevronDown,
  Zap,
  Sun,
  Moon,
} from 'lucide-react'

const mainLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

const moreLinks = [
  { label: 'Electrical Engineering', href: '#engineering' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
]

const allLinks = [...mainLinks, ...moreLinks]

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const sections = allLinks
      .map((link) => link.href.slice(1))
      .filter((id, index, ids) => ids.indexOf(id) === index)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )

        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: '-15% 0px -65% 0px',
        threshold: [0, 0.15, 0.3, 0.6],
      },
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open && !moreOpen) return

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setMoreOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open, moreOpen])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const closeMenus = () => {
    setOpen(false)
    setMoreOpen(false)
  }

  const toggleTheme = () => {
    setDarkMode((previous) => !previous)
  }

  const linkClass = (href) =>
    `relative whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 ${
      active === href
        ? 'text-blue-600'
        : darkMode
          ? 'text-slate-300 hover:text-blue-400'
          : 'text-slate-600 hover:text-blue-600'
    }`

  const themeButtonClass = `inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
    darkMode
      ? 'border-slate-700 bg-slate-800 text-amber-300 hover:bg-slate-700'
      : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600'
  }`

  return (
    <header
      className={`sticky top-0 z-50 border-b shadow-sm backdrop-blur-xl transition-colors duration-300 ${
        darkMode
          ? 'border-slate-800 bg-slate-950/90 shadow-black/10'
          : 'border-slate-200/70 bg-white/85 shadow-slate-900/[0.02]'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-8"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenus}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Mohamud Abdullahi home"
        >
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-600/20 transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
            <Code2 size={23} strokeWidth={2.2} />
            <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-blue-600 bg-amber-400" />
          </span>

          <span>
            <span
              className={`block text-lg font-extrabold tracking-tight sm:text-xl ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}
            >
              Engineer Mudu<span className="text-blue-500">.</span>
            </span>

            <span
              className={`hidden text-[10px] font-semibold uppercase tracking-[0.15em] sm:block ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Software & Electrical
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          {mainLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={
                active === link.href ? 'location' : undefined
              }
              className={linkClass(link.href)}
            >
              {link.label}

              <span
                className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left rounded-full bg-blue-600 transition-transform duration-200 ${
                  active === link.href ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}

          {/* More dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((previous) => !previous)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1.5 py-2 text-sm font-medium transition-colors ${
                moreLinks.some((link) => link.href === active)
                  ? 'text-blue-600'
                  : darkMode
                    ? 'text-slate-300 hover:text-blue-400'
                    : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              More

              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  moreOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {moreOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close navigation dropdown"
                  className="fixed inset-0 z-40 cursor-default"
                  onClick={() => setMoreOpen(false)}
                />

                <div
                  className={`absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border p-2 shadow-xl ${
                    darkMode
                      ? 'border-slate-700 bg-slate-900 shadow-black/30'
                      : 'border-slate-200/80 bg-white shadow-slate-900/10'
                  }`}
                >
                  {moreLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenus}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                        active === link.href
                          ? darkMode
                            ? 'bg-blue-500/15 font-semibold text-blue-300'
                            : 'bg-blue-50 font-semibold text-blue-700'
                          : darkMode
                            ? 'text-slate-300 hover:bg-slate-800 hover:text-blue-300'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                      }`}
                    >
                      {link.label}

                      {active === link.href && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      )}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Desktop theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className={themeButtonClass}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className={themeButtonClass}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={
              open ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className={themeButtonClass}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`absolute inset-x-0 top-full overflow-hidden border-b shadow-xl backdrop-blur-xl transition-all duration-300 ease-out lg:hidden ${
          darkMode
            ? 'border-slate-800 bg-slate-950/95 shadow-black/20'
            : 'border-slate-200 bg-white/95 shadow-slate-900/5'
        } ${
          open
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <div
          className="mx-auto max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto px-5 pb-5 pt-4 sm:px-8"
          inert={!open}
        >
          <div className="mb-3 flex items-center gap-2 px-3">
            <Zap size={15} className="text-amber-500" />

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Explore portfolio
            </p>
          </div>

          {[...mainLinks, ...moreLinks].map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenus}
              aria-current={
                active === link.href ? 'location' : undefined
              }
              tabIndex={open ? 0 : -1}
              style={{
                transitionDelay: open ? `${index * 25}ms` : '0ms',
              }}
              className={`mb-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors ${
                active === link.href
                  ? darkMode
                    ? 'bg-blue-500/15 font-semibold text-blue-300'
                    : 'bg-blue-50 font-semibold text-blue-700'
                  : darkMode
                    ? 'font-medium text-slate-300 hover:bg-slate-800 hover:text-blue-300'
                    : 'font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600'
              }`}
            >
              {link.label}

              {active === link.href && (
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              )}
            </a>
          ))}

          <p
            className={`mt-4 text-center text-xs ${
              darkMode ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            Software Development · Electrical Engineering
          </p>
        </div>
      </div>
    </header>
  )
}
