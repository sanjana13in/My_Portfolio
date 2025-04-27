import "../styles/projects.css";
import RelianceProject from "../assets/projects/RelianceProject.png";
import CapstoneProject from "../assets/projects/CapstoneProject.png";

const projects = [
  { title: "Reliance Smart Sales", description: "A impactful Dashboard of  an analytics", image: RelianceProject, link: "https://github.com/sanjana13in/DataAnalyis_ReliancePBI.git" },
  { title: "Dashboard For Capstone HR Data", description: "An analytics dashboard.", image: CapstoneProject, link: "https://github.com/sanjana13in/PBI_Capstone.git" }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2> <br />
      <div className="project-list">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.image} alt={p.title} className="project-image" />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} className="view-btn">View</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

