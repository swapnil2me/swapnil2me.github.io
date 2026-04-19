import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Strain engineering of 2D NEMS",
      desc: "Demonstration of a clean method to tune strain on Graphene NEMS",
      link: "https://iopscience.iop.org/article/10.1088/1361-6439/abe20b",
      color: "var(--accent-cyan)",
      type: "publication"
    },
    {
      title: "2D NEMS on flexible substrates",
      desc: "Fabrication method for realizing 2D NEMS on flexible substrates.",
      link: "https://link.springer.com/chapter/10.1007/978-3-319-97604-4_8",
      color: "#f59e0b",
      type: "publication"
    },
    {
      title: "Nonlinear dynamics of NEMS",
      desc: "Leveraging nonlinear behavior of NEMS for ultrasensitive charge detection.",
      link: "https://aip.scitation.org/doi/10.1063/5.0031890",
      color: "var(--accent-purple)",
      type: "publication"
    },
    {
      title: "Instrument control dashboard",
      desc: "Webapp to control and monitor the scientific experiments at NEMS-Lab",
      github: "https://github.com/swapnil2me/Dashboard_PyInstr",
      color: "#10b981",
      type: "code"
    },
    {
      title: "ChatLab",
      desc: "A smart chatbot that simulates basic quantum circuits and solves nonlinear differential equations on the fly.",
      github: "https://github.com/swapnil2me/chatlab",
      demo: "https://airyzoka.github.io/chatLab/index",
      color: "#ec4899",
      type: "code"
    },
    {
      title: "Ethereum DAPPS",
      desc: "A simple payments app and its extension to rent out IoTs on Ganache test net.",
      github: "https://github.com/swapnil2me/eth_payment_app",
      demo: "https://github.com/swapnil2me/eth_rent_contract",
      color: "#6366f1",
      type: "code"
    }
  ];

  return (
    <main className="page-wrapper container">
      <h2 className="section-title">Recent Work</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card glass-card" key={index}>
            <div className="project-decoration" style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}></div>
            
            <div className="project-content">
              <span className="project-type" style={{ color: project.color }}>
                {project.type.toUpperCase()}
              </span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    Read Paper <FaExternalLinkAlt />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                    View Demo <FaExternalLinkAlt />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    Source Code <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          position: relative;
          overflow: hidden;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-decoration {
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 150px;
          opacity: 0.15;
          border-radius: 0 0 0 100%;
          transition: all 0.5s ease;
        }

        .project-card:hover .project-decoration {
          opacity: 0.3;
          transform: scale(1.2);
        }

        .project-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-type {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .project-desc {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .project-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: auto;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border: 1px solid var(--glass-border);
          border-radius: 6px;
          background: rgba(255,255,255,0.05);
        }

        .project-link:hover {
          background: rgba(255,255,255,0.1);
          border-color: var(--accent-cyan);
          text-shadow: none;
        }
      `}</style>
    </main>
  );
};

export default Projects;
