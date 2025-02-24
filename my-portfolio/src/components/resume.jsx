import "../styles/resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>My Resume</h2>
      <p>Download my resume to learn more about my experience and skills.</p>
      
      <a href="/Resume.pdf" download="Resume.pdf" className="resume-button">
        Download Resume
      </a>

      
      

    </section>
  );
};

export default Resume;
