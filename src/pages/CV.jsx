import { FaDownload } from 'react-icons/fa';

const CV = () => {
  const experiences = [
    {
      title: "Computational Lithography",
      org: "GlobalFoundries, Bangalore",
      period: "08/2022 - Present",
      desc: "Implementing resolution enhancement techniques for semiconductor fabrication. Edge fragmentation for width adjustments and SRAF placement using rule-based and model-based optimization techniques. Calibrating optical and resist models for print image simulations. Shell scripting, automating the testing process using python."
    },
    {
      title: "Research Scholar",
      org: "CeNSE",
      period: "08/2015 - 08/2022",
      desc: "Project: Nonlinear dynamics and strain engineering of 2D nanoelectromechanical systems (NEMS). Design and implement nano-fabrication processes for NEMS. Setup experimental apparatus to actuate and detect resonance in NEMS using Signal Generators, Lock-In amplifiers, Spectrum Analyzers; design experiments for specific testing; designing PCB and RF circuits."
    },
    {
      title: "Project Assistant",
      org: "IIT, Bombay",
      period: "02/2013 - 12/2013",
      desc: "Study and design of heating, ventilation and air conditioning system."
    },
    {
      title: "Graduate Engineer Trainee",
      org: "Mahindra Navistar Automotives Ltd.",
      period: "08/2012 - 01/2013",
      desc: "Sales and dealer development: Conducting market surveys to understand customer requirements in the LCV segment."
    }
  ];

  const education = [
    { degree: "Ph.D. (Nanoelectromechanical Systems)", org: "Indian Institute of Science, Bangalore", period: "Aug 2022", score: "7/10" },
    { degree: "MTech (Nanotechnology)", org: "Indian Institute of Science, Bangalore", period: "08/2014 - 07/2016", score: "6.4/8" },
    { degree: "BE (Mechanical Engineering)", org: "University of Pune", period: "08/2009 - 07/2012", score: "69%" },
    { degree: "Diploma (Mechanical Engineering)", org: "Government Polytechnic, Pune", period: "08/2006 - 07/2009", score: "86%" },
    { degree: "Machine Learning (MOOC)", org: "Stanford Online", period: "Nov 2019", score: "Certificate Available" }
  ];

  const skills = [
    { category: "Nanofabrication", items: [{name: "Lithography", val: 100}, {name: "Dry/Wet Etching", val: 98}, {name: "Thin-film deposition", val: 90}] },
    { category: "Data Science", items: [{name: "Hypothesis testing", val: 95}, {name: "Model fitting", val: 90}, {name: "Machine Learning", val: 80}] },
    { category: "Programming", items: [{name: "Python", val: 95}, {name: "Matlab", val: 95}, {name: "JavaScript", val: 80}] },
    { category: "Web Development", items: [{name: "HTML, CSS", val: 90}, {name: "D3js", val: 90}, {name: "React, Django", val: 80}] }
  ];

  return (
    <main className="page-wrapper container">
      
      <div className="cv-header">
        <h1 className="cv-title text-gradient">Curriculum Vitae</h1>
        <a href="/SwapnilMore.pdf" className="btn-primary resume-dl" target="_blank" rel="noreferrer">
          <FaDownload /> Download PDF
        </a>
      </div>

      <div className="cv-grid">
        <div className="cv-main-col">
          <section className="cv-section glass-card">
            <h2 className="section-heading">Work Experience</h2>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{exp.title}</h3>
                      <span className="period">{exp.period}</span>
                    </div>
                    <h4>{exp.org}</h4>
                    <p>{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section glass-card">
            <h2 className="section-heading">Education</h2>
            <div className="timeline">
              {education.map((edu, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{edu.degree}</h3>
                      <span className="period">{edu.period}</span>
                    </div>
                    <h4>{edu.org}</h4>
                    <p className="score">Score: {edu.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="cv-side-col">
          <section className="cv-section glass-card">
            <h2 className="section-heading">Skills Profile</h2>
            <div className="skills-container">
              {skills.map((skillGroup, i) => (
                <div className="skill-group" key={i}>
                  <h3>{skillGroup.category}</h3>
                  {skillGroup.items.map((item, j) => (
                    <div className="skill-bar-wrapper" key={j}>
                      <div className="skill-info">
                        <span>{item.name}</span>
                        <span>{item.val}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${item.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section glass-card contact-card">
            <h2 className="section-heading">Contact</h2>
            <p><strong>Phone:</strong> +91 911-399-9596</p>
            <p><strong>Email:</strong> swapnilmore@iisc.ac.in</p>
            <p><strong>Location:</strong> Bangalore, India</p>
          </section>
        </div>
      </div>

      <style>{`
        .cv-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .cv-title {
          font-size: 3rem;
        }

        .cv-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .cv-section {
          padding: 2.5rem;
          margin-bottom: 2rem;
        }

        .section-heading {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 1rem;
        }

        /* Timeline Styles */
        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--glass-border);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -2.35rem;
          top: 0.25rem;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent-cyan);
          border: 3px solid var(--bg-primary);
          box-shadow: 0 0 10px var(--accent-cyan);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .timeline-header h3 {
          font-size: 1.3rem;
          color: var(--text-primary);
        }

        .period {
          font-size: 0.85rem;
          color: var(--accent-cyan);
          background: rgba(34, 211, 238, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-weight: 600;
        }

        .timeline-content h4 {
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-family: 'Inter', sans-serif;
        }

        .timeline-content p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .score {
          display: inline-block;
          margin-top: 0.5rem;
          font-weight: 600;
          color: var(--accent-purple) !important;
        }

        /* Skills Styles */
        .skill-group {
          margin-bottom: 2rem;
        }

        .skill-group h3 {
          font-size: 1.1rem;
          margin-bottom: 1.2rem;
          color: var(--text-primary);
        }

        .skill-bar-wrapper {
          margin-bottom: 1rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .progress-track {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
          border-radius: 4px;
          transition: width 1s ease-in-out;
          position: relative;
        }
        
        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .contact-card p {
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }

        .contact-card strong {
          color: var(--text-primary);
        }

        @media (max-width: 992px) {
          .cv-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};

export default CV;
