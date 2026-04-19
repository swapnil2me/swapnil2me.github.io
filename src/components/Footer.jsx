import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <Link to="/">About me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/cv">CV</Link>
        </div>
        <div className="social-icons">
          <a href="https://github.com/swapnil2me" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/swapnilkmore" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/pawlinS_roMe" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Swapnil More. Built with modern web tech.
        </div>
      </div>

      <style>{`
        .footer {
          margin-top: 4rem;
          padding: 3rem 0;
          border-top: 1px solid var(--glass-border);
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(8px);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .footer-links a:hover {
          color: var(--accent-purple);
        }

        .social-icons {
          display: flex;
          gap: 1.5rem;
          font-size: 1.5rem;
        }

        .social-icons a {
          color: var(--text-secondary);
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-icons a:hover {
          color: var(--accent-cyan);
          transform: translateY(-3px);
        }

        .copyright {
          color: var(--text-secondary);
          font-size: 0.875rem;
          opacity: 0.7;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
