import { Link } from 'react-router-dom';
import { FaFlask, FaCogs, FaLaptopCode, FaCode } from 'react-icons/fa';

const Home = () => {
  const skills = [
    {
      title: "Nanotechnology",
      desc: "I fabricate nanoelectromechanical systems (NEMS) using class 100 cleanroom at NNFC.",
      icon: <FaFlask />,
      link: "http://www.cense.iisc.ac.in/anaik/research/"
    },
    {
      title: "Machine Design",
      desc: "I design machines that behave!",
      icon: <FaCogs />,
      link: "#"
    },
    {
      title: "Data Science",
      desc: "Data science plays a crucial role in extracting useful information from scientific experiments on NEMS. Hypothesis testing and model fitting is a day-to-day activity.",
      icon: <FaLaptopCode />,
      link: "http://www.cense.iisc.ac.in/anaik/"
    },
    {
      title: "Full-stack developer",
      desc: "I design and control experiments on NEMS over the internet.",
      icon: <FaCode />,
      link: "#"
    }
  ];

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
            <h2 className="subtitle">Ph.D. student at IISc, Bangalore</h2>
            <div className="bio">
              <p>
                I have been working on nonlinear dynamics of Nano Electromechanical Systems (NEMS) for the last six years. My research work mainly focuses on developing nanoelectromechanical sensors with strain tunability, where I have studied the effect of strain on linear and nonlinear dynamics, mode coupling, dynamic range, limit of detection, and quality factor of resonant sensors.
              </p>
              <p>
                I have extensive experience in fabricating 2D material-based devices in a class 100 cleanroom, using various tools such as e-beam, photolithography, and wet/dry etching techniques. In addition, I have expertise in characterizing fabricated devices using SEM, AFM, and RF electrical characterization techniques.
              </p>
              <p>
                Beyond nanotechnology, I have developed a keen interest in computer science. I am a self-taught programmer in Python, JavaScript, and C++. I use these skills primarily in instrument control and data analysis of my experiments on NEMS.
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
          {skills.map((skill, index) => (
            <div className="skill-card glass-card" key={index}>
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
          background: url('/InRome.jpg') center / cover; /* Note: adjust image path if needed */
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
