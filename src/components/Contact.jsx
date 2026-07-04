import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-section reveal-section">
      <div className="container">
        <div className="section-eyebrow">Get In Touch</div>
        <h2 className="section-title">Open to the right <em>opportunity</em></h2>
        <div className="contact-layout">
          <div className="contact-left">
            <p className="contact-bio">
              Actively seeking full-time roles in Data Science, ML Engineering,
              AI Engineering, and Data Analytics. Based in Navi Mumbai — open
              to relocate, work hard, and deliver real impact from day one.
            </p>
            <div className="contact-status">
              <span className="status-dot" />
              <span>Available now</span>
            </div>
          </div>
          <div className="contact-links">
            <a
              href="https://github.com/Almaas211"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-row"
            >
              <div className="contact-icon">🐙</div>
              <div className="contact-info">
                <div className="contact-label">GitHub</div>
                <div className="contact-val">github.com/Almaas211</div>
              </div>
              <div className="contact-arrow">→</div>
            </a>
            <a
              href="https://www.linkedin.com/in/almaaslabbai07/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-row"
            >
              <div className="contact-icon">💼</div>
              <div className="contact-info">
                <div className="contact-label">LinkedIn</div>
                <div className="contact-val">linkedin.com/in/almaaslabbai07/</div>
              </div>
              <div className="contact-arrow">→</div>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=almaaslabbai07@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-row"
            >
              <div className="contact-icon">✉️</div>
              <div className="contact-info">
                <div className="contact-label">Email</div>
                <div className="contact-val">almaaslabbai07@gmail.com</div>
              </div>
              <div className="contact-arrow">→</div>
            </a>
            <div className="glass-card contact-row">
              <div className="contact-icon">📍</div>
              <div className="contact-info">
                <div className="contact-label">Location</div>
                <div className="contact-val">Navi Mumbai, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}