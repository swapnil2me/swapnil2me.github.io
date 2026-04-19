import { Link, useNavigate } from 'react-router-dom';
import { skillsData } from '../data/skillsData';

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (categoryId) => {
    navigate(`/projects?category=${categoryId}`);
  };

  return (
    <main className="page-wrapper container">
      <section className="hero-section">
        <div className="hero-content glass-card">
          <div className="avatar-container">
            <div className="avatar"></div>
            <div className="avatar-glow"></div>
          </div>
          <div className="about-me">
            <h1 className="greeting">Hi, I'm <span className="text-gradient">Swapnil More</span></h1>
            <h2 className="subtitle">Process Integration Engineer at Lam Research India</h2>
            <div className="bio">
              <p>
                As a Process Integration Engineer, I have extensive experience driving process flow optimizations, defect reduction, and computational modeling across both industrial fabrication and advanced R&D environments. My expertise lies in utilizing powerful EDA and data science tools to solve critical yield and defect challenges in advanced semiconductor architectures.
              </p>
              <p>
                Previously, as a Postdoctoral Researcher at IMEC, Belgium, I demonstrated wafer-level integration of silicon membrane-based microfluidic valves, developed complex deep silicon etch processes, and performed rigorous inline metrology.
              </p>
              <p>
                I hold a Ph.D. from IISc Bengaluru, where I worked extensively on NEMS/MEMS sensor development. Beyond nanofabrication, I am a self-taught programmer in Python, JavaScript, and C++, building automated data pipelines that significantly accelerate processing times.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/cv" className="btn-primary">View My CV</Link>
              <Link to="/projects" className="btn-outline">See Projects</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">The things I am good at</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div 
              className="skill-card glass-card clickable" 
              key={index}
              onClick={() => handleCardClick(skill.id)}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .hero-section {
          margin-top: 2rem;
          margin-bottom: 5rem;
        }

        .hero-content {
          padding: 4rem 3rem;
          display: flex;
          align-items: center;
          gap: 4rem;
          border-radius: 24px;
        }

        .avatar-container {
          position: relative;
          flex-shrink: 0;
        }

        .avatar {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: url('/Imec_Call_Booth.jpeg') center / cover; /* Note: adjust image path if needed */
          border: 4px solid var(--glass-border);
          position: relative;
          z-index: 2;
        }

        .avatar-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.5;
          z-index: 1;
          animation: pulse 4s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.95); }
          100% { opacity: 0.6; transform: scale(1.05); }
        }

        .about-me {
          flex: 1;
        }

        .greeting {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .bio {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          color: rgba(248, 250, 252, 0.8);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          padding: 2.5rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .skill-card.clickable {
          cursor: pointer;
        }

        .skill-icon {
          font-size: 3rem;
          color: var(--accent-cyan);
          background: rgba(34, 211, 238, 0.1);
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
          color: white;
          transform: rotate(5deg) scale(1.1);
        }

        .skill-title {
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .skill-desc {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @media (max-width: 992px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
            padding: 3rem 2rem;
            gap: 3rem;
          }

          .hero-actions {
            justify-content: center;
          }
          
          .avatar {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </main>
  );
};

export default Home;
