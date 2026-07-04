import './Projects.css'

const projects = [
  {
    num: '01',
    name: 'Agentic AI Code Reviewer',
    desc: 'Full-stack agentic AI using the ReAct loop pattern. FastAPI backend, OpenRouter API with claude-3-haiku, GitHub REST API integration, and an animated Solar System canvas frontend.',
    tags: ['FastAPI', 'OpenRouter', 'ReAct Loop', 'GitHub API', 'Python'],
    link: 'https://github.com/Almaas211/ai-code-reviewer',
    stats: null,
    accent: 'var(--gold)',
    status: 'live',
  },
  {
    num: '02',
    name: 'Healthcare No-Show Prediction',
    desc: 'ML classification model predicting patient appointment no-shows. Feature engineered for class imbalance with precision-recall tuning.',
    tags: ['XGBoost', 'Random Forest', 'SVM', 'scikit-learn', 'pandas'],
    link: 'https://github.com/Almaas211/Healthcare-Appointment-NoShow-Prediction',
    stats: [
      { label: 'Accuracy', value: '87%' },
      { label: 'Dataset', value: '110K Records' },
      { label: 'Role', value: 'Data Analytics & ML Engineer' },
    ],
    accent: 'var(--gold2)',
    status: 'live',
  },
  {
    num: '03',
    name: 'RAG Business Intelligence Bot',
    desc: 'Upload CSV or PDF and query in natural language. ChromaDB vector store, Groq API, Plotly visualizations — instant business insights.',
    tags: ['RAG', 'ChromaDB', 'Groq API', 'Plotly', 'LangChain'],
    link: null,
    stats: null,
    accent: 'var(--muted2)',
    status: 'wip',
  },
  {
    num: '04',
    name: 'Personal Portfolio Website',
    desc: 'This portfolio — built from scratch with React and Vite. Features a rotating 3D crystal, animated particles, scroll reveal effects, and a dark maroon + rose gold design system.',
    tags: ['React', 'Vite', 'CSS 3D', 'Responsive Design'],
    link: 'https://github.com/Almaas211',
    stats: [
      { label: 'Framework', value: 'React + Vite' },
      { label: 'Design', value: 'Custom CSS' },
    ],
    accent: 'var(--gold)',
    status: 'live',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section reveal-section">
      <div className="container">
        <div className="section-eyebrow">Selected Work</div>
        <h2 className="section-title">Projects I have <em>built</em></h2>
        <div className="projects-list">
          {projects.map((p) => (
            <div
              key={p.name}
              className={'project-row' + (p.status === 'wip' ? ' wip' : '')}
            >
              <div className="project-accent-line" style={{ background: p.accent }} />
              <div className="project-num">{p.num}</div>
              <div className="project-body">
                <div className="project-top-row">
                  <h3 className="project-name">{p.name}</h3>
                  <div className="project-actions">
                    {p.status === 'wip' && <span className="badge-wip">In Progress</span>}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="badge-link">
                        View
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-desc">{p.desc}</p>
                {p.stats && (
                  <div className="project-stats">
                    {p.stats.map(s => (
                      <div key={s.label} className="pstat">
                        <div className="pstat-value">{s.value}</div>
                        <div className="pstat-label">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}