
import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Engineering from './components/Engineering'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('engineer-mudu-theme')

      if (savedTheme) {
        return savedTheme === 'dark'
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', darkMode)

    try {
      localStorage.setItem(
        'engineer-mudu-theme',
        darkMode ? 'dark' : 'light',
      )
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [darkMode])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-950 text-slate-200'
          : 'bg-[#F8FAFC] text-slate-700'
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Engineering />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
