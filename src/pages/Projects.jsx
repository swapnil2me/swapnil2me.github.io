import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useSearchParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { skillsData } from '../data/skillsData';

const Projects = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const filteredProjects = categoryFilter 
    ? projectsData.filter(p => p.categories && p.categories.includes(categoryFilter))
    : projectsData;

  const currentCategory = categoryFilter 
    ? skillsData.find(s => s.id === categoryFilter)?.title 
    : null;

  const getTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'publication': return 'var(--accent-cyan)';
      case 'code': return '#10b981'; // green accent
      default: return 'var(--text-secondary)';
    }
  };

  return (
    <main className="page-wrapper container">
      <div className="projects-header">
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          {currentCategory ? `Projects tagged with: ${currentCategory}` : "Recent Work"}
        </h2>
        {categoryFilter && (
          <Link to="/projects" className="btn-outline clear-filter-btn">
            Show All Projects
          </Link>
        )}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card glass-card" key={index}>
            <div className="project-decoration" style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}></div>
            
            <div className="project-content">
              <span className="project-type" style={{ color: getTypeColor(project.type) }}>
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
        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .clear-filter-btn {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
        }

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
