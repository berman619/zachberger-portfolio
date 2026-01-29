import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

function Footer() {
  const resumePdfPath = "/files/Zach Berger Resume_2026.pdf"; // make sure this matches /public/files

  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://linkedin.com/in/zachhberger"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a
          href="mailto:zachhberger@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>

        <a
          href={resumePdfPath}
          target="_blank"
          rel="noreferrer"
          aria-label="Download resume PDF"
          title="Download resume"
        >
          <FontAwesomeIcon icon={faFileArrowDown} size="2x" />
        </a>
      </div>

      <div className="footer-meta">
        © {new Date().getFullYear()} Zach Berger
      </div>
    </footer>
  );
}

export default Footer;
