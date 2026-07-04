import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section reveal-section">
      <div className="container about-inner">
        <div className="about-left">
          <div className="section-eyebrow">About Me</div>
          <h2 className="section-title">Who I <em>am</em></h2>
        </div>
        <div className="about-right">
          <p className="about-para">
            I'm a B.E. Artificial Intelligence and Data Science graduate from SIES Graduate
            School of Technology, Navi Mumbai, passionate about building intelligent,
            data-driven solutions.
          </p>
          <p className="about-para">
            Through three internships and multiple hands-on projects, I have gained practical
            experience in Machine Learning, Data Analytics, Python, SQL, Power BI, and FastAPI.
            I enjoy transforming raw data into meaningful insights, developing predictive models,
            and creating AI-powered applications that solve real-world problems.
          </p>
          <p className="about-para">
            I'm currently seeking full-time opportunities as a Machine Learning Engineer,
            AI Engineer, Data Analyst, or Python Developer — where I can continue learning
            while contributing to impactful products.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-dot" />
              Based in Navi Mumbai, open to relocate
            </div>
            <div className="highlight-item">
              <span className="highlight-dot" />
              Available immediately
            </div>
            <div className="highlight-item">
              <span className="highlight-dot" />
              Open to remote and hybrid roles
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}