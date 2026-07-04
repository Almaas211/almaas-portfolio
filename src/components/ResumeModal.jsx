import './ResumeModal.css'

const resumes = [
  {
    icon: '🤖',
    title: 'AI / Machine Learning Resume',
    desc: 'Best for: ML Engineer, AI Engineer, Data Scientist',
    file: '/resumes/Data Analytics_AIML Resume.pdf',
  },
  {
    icon: '📊',
    title: 'Data Analytics Resume',
    desc: 'Best for: Data Analyst, BI Analyst, Business Intelligence Analyst',
    file: '/resumes/Data Analytics_AIML Resume.pdf',
  },
  {
    icon: '🌐',
    title: 'Frontend Developer | Web Developer',
    desc: 'Best for:Frontend Developer, Web Developer, Software Developer',
    file: '/resumes/Web_Frontend Developer Resume.pdf',
  },
  {
    icon: '🐍',
    title: 'Python Developer | Software Developer',
    desc: 'Best for:Python Developer, Software Engineer, Backend Developer',
    file: null, // Coming soon
  },
]

export default function ResumeModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-icon">📄</div>
        <h2 className="modal-title">Download Resume</h2>
        <p className="modal-sub">Choose a resume based on the role you are hiring for</p>
        <div className="resume-options">
          {resumes.map(r => (
            <div key={r.title} className="resume-card glass-card">
              <div className="resume-card-left">
                <span className="resume-icon">{r.icon}</span>
                <div>
                  <div className="resume-title">{r.title}</div>
                  <div className="resume-desc">{r.desc}</div>
                </div>
              </div>
              {r.file ? (
                <a href={r.file} download className="resume-dl-btn">Download</a>
              ) : (
                <span className="resume-soon">Coming soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}