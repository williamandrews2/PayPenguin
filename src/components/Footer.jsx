import { FaUserCircle, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://www.williamandrews.net"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        aria-label="Portfolio"
      >
        <FaUserCircle />
      </a>
      <a
        href="https://www.linkedin.com/in/william-cs"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/williamandrews2"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
