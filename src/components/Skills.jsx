import './Skills.css'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'SQL', 'Java'],
  },
  {
    label: 'Libraries',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Matplotlib'],
  },
  {
    label: 'ML & AI',
    skills: ['Machine Learning', 'NLP', 'LLMs', 'Prompt Engineering', 'RAG'],
  },
  {
    label: 'Visualization',
    skills: ['Power BI', 'Plotly', 'Matplotlib', 'Seaborn'],
  },
  {
    label: 'Databases',
    skills: ['MySQL', 'ChromaDB'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'FastAPI', 'Gradio', 'Docker'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section reveal-section">
      <div className="container">
        <div className="section-eyebrow">Capabilities</div>
        <h2 className="section-title">What I bring <em>to the table</em></h2>
        <div className="skills-grid">
          {skillGroups.map(g => (
            <div key={g.label} className="skill-group glass-card">
              <div className="skill-group-label">{g.label}</div>
              <div className="skill-pills">
                {g.skills.map(s => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}