import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import ResumeModal from './components/ResumeModal.jsx'
import './App.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    const ids = ['hero', 'about', 'projects', 'skills', 'experience', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-section')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar activeSection={activeSection} onResumeClick={() => setResumeOpen(true)} />
      <main>
        <Hero onResumeClick={() => setResumeOpen(true)} />
        <Stats />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Contact />
      </main>
      <footer className="footer">
        Open to relocate &nbsp;·&nbsp; Ready to work hard &nbsp;·&nbsp; Here to make an impact
      </footer>
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </div>
  )
}