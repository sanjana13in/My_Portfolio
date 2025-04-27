import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to <span id="My">Sanjana's</span> Portfolio</h1>
        <p>Data Analyst | SQL | Python | BI Tools</p>
        
        <div className="hero-buttons">
          <a href="#projects" className="cta-btn">View My Work</a>
          <a href="/resume.pdf" className="cta-btn secondary">Download Resume</a>
        </div>

        <div className="hero-socials">
          <a 
            href="https://www.linkedin.com/in/sanjana-tiwari-955246259" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/sanjana13in" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.instagram.com/sanjana19702" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
