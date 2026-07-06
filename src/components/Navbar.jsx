import { useState } from 'react'
import './Navbar.css'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection, onResumeClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">

        <div className="nav-logo" onClick={() => scrollTo('hero')}>
          AL
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((l) => (
            <button
              key={l.id}
              className={'nav-btn' + (activeSection === l.id ? ' active' : '')}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}

          <button
            className="nav-resume"
            onClick={() => {
              onResumeClick()
              setMenuOpen(false)
            }}
          >
            Resume
          </button>

          <a
            className="nav-cta"
            href="https://github.com/Almaas211"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </a>
        </nav>

      </div>
    </header>
  )
}