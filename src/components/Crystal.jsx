import './Crystal.css'

export default function Crystal() {
  return (
    <div className="crystal-scene">
      <div className="crystal-glow-outer" />
      <div className="crystal-wrapper">
        <div className="crystal">
          <div className="crystal-face face-front" />
          <div className="crystal-face face-back" />
          <div className="crystal-face face-left" />
          <div className="crystal-face face-right" />
          <div className="crystal-face face-top" />
          <div className="crystal-face face-bottom" />
          <div className="crystal-face face-tl" />
          <div className="crystal-face face-tr" />
          <div className="crystal-face face-bl" />
          <div className="crystal-face face-br" />
        </div>
      </div>
      <div className="crystal-shadow" />
      <div className="crystal-ring ring-1" />
      <div className="crystal-ring ring-2" />
    </div>
  )
}