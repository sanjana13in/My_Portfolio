// src/components/About.jsx
import React from "react";
import "../styles/about.css";

const AboutPage = () => {
  return (
    <section id="about" className="about">
      <span> <h2>About Me</h2></span>
      <div className="about-content">
        <img
          src="/assets/Sanjana.jpg" 
          alt="Profile of Sanjana Tiwari"
          className="about-image"
        />
        <div className="about-text">
          <p>
            <span id="Myself">Hello! I'm Sanjana Tiwari,</span><br />   I am a detail-oriented Data Analyst with a strong passion for transforming raw data into meaningful insights that drive business decisions. With expertise in data visualization, statistical analysis, and predictive modeling, I specialize in making data-driven recommendations that optimize performance and efficiency.
          </p>
          <p>
              My skill set includes MySQL, Python,Excel, Power BI, and Tableau, enabling me to clean, analyze, and visualize complex datasets effectively. I have experience working with structured and unstructured data, using machine learning techniques, and leveraging automation to streamline reporting processes.


          </p>
          <p>   I thrive on solving complex problems and uncovering hidden patterns within data. Whether it’s improving operational efficiency, identifying trends, or enhancing customer experiences, I am dedicated to delivering data-driven solutions that make an impact.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
