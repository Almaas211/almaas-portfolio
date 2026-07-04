import { useState, useEffect, useRef } from 'react'
import './Hero.css'
import face from '../assets/FACE1.jpg'

const roles = [
  'Data Science Engineer',
  'ML Engineer',
  'AI Engineer',
  'Data Analyst',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const hero = heroRef.current
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10
      const photo = hero.querySelector('.hero-photo-wrap')
      if (photo) {
        photo.style.transform = `translateY(var(--float-y, 0px)) rotateX(${-y * 0.4}deg) rotateY(${x * 0.4}deg)`
      }
    }
    const hero = heroRef.current
    if (hero) hero.addEventListener('mousemove', handleMouseMove)
    return () => { if (hero) hero.removeEventListener('mousemove', handleMouseMove) }
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-bg-glow" />
      <div className="hero-particles">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 6 + 's',
            animationDuration: (5 + Math.random() * 6) + 's',
            width: (2 + Math.random() * 3) + 'px',
            height: (2 + Math.random() * 3) + 'px',
            opacity: 0.2 + Math.random() * 0.4,
          }} />
        ))}
      </div>

      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-available">
            <span className="available-dot" />
            Available for full-time roles
          </div>
          <h1 className="hero-name">
            Almaas
            <br />
            <em>Labbai</em>
          </h1>
          <div className="hero-role">
            <span className="role-text">{displayed}</span>
            <span className="role-cursor">|</span>
          </div>
          <p className="hero-bio">
            B.E. in AI and Data Science Engineering from SIES Graduate School of
            Technology, Navi Mumbai. Building intelligent systems at the crossroads
            of ML, LLMs, and real-world data.
          </p>
          <div className="hero-tags">
            {['Python', 'Machine Learning', 'LLMs', 'FastAPI', 'SQL', 'Power BI', 'NLP'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a
              className="btn-primary"
              href="https://github.com/Almaas211"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              See Projects
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <div className="photo-glow" />
            <div className="photo-ring ring-outer" />
            <div className="photo-ring ring-inner" />
            <img
              src={face}
              alt="Almaas Labbai"
              className="hero-photo"
            />
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}