import './Stats.css'

const stats = [
  { value: '3', label: 'Internships' },
  { value: '3+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: 'Open', label: 'For Work' },
]

export default function Stats() {
  return (
    <div className="stats-bar">
      <div className="container stats-inner">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}