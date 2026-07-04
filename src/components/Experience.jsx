import './Experience.css'

const jobs = [
  {
    role: 'Data Science and ML Intern',
    company: 'Zaalima Development',
    period: '2024 - 2025',
    desc: 'Built and evaluated ML models — XGBoost, SVM, KNN, Logistic Regression. Worked across data preprocessing, feature engineering, and optimization pipelines.',
  },
  {
    role: 'Data and Analytics Intern',
    company: 'Elevate Labs',
    period: '2024 - 2025',
    desc: 'Created dashboards and visualizations using SQL and Power BI to surface key insights for business decision-making across large datasets.',
  },
  {
    role: 'Web Development Intern',
    company: 'Adobiz',
    period: '2024',
    desc: 'Built and deployed web applications using HTML, CSS, and JavaScript. Gained hands-on experience with frontend workflows and production deployment.',
  },
]

const certs = [
  { icon: '🎓', name: 'B.E. AI and Data Science Engineering', issuer: 'SIES Graduate School of Technology, Navi Mumbai - 2026' },
  { icon: '📜', name: 'Data Analytics Virtual Experience', issuer: 'Deloitte via Forage' },
  { icon: '📜', name: 'Data Analytics', issuer: 'Elevate Labs' },
  { icon: '📜', name: 'Data Science & ML', issuer: 'Zaalima Development'}
]

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <div className="section-eyebrow">Background</div>
        <h2 className="section-title">Where I have <em>worked</em></h2>
        <div className="timeline">
          {jobs.map((j, i) => (
            <div key={j.role} className="timeline-row">
              <div className="timeline-left">
                <div className="tl-period">{j.period}</div>
              </div>
              <div className="timeline-center">
                <div className="tl-dot" />
                {i < jobs.length - 1 && <div className="tl-line" />}
              </div>
              <div className="glass-card timeline-card">
                <div className="tl-role">{j.role}</div>
                <div className="tl-company">{j.company}</div>
                <p className="tl-desc">{j.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-eyebrow" style={{ marginTop: 64 }}>Credentials</div>
        <div className="certs-grid">
          {certs.map(c => (
            <div key={c.name} className="glass-card cert-card">
              <span className="cert-icon">{c.icon}</span>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}