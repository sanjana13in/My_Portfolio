import "../styles/skills.css";
import htmlCSSJSIcon from "../assets/skills/HTML CSS JS.png";
import PowerBIicon from "../assets/skills/PBI.jpg";
import MysqlIcon from "../assets/skills/Mysql.png";
import PythonIcon from "../assets/skills/Python.jpg";
import MernIcon from "../assets/skills/Mern.png";


const skills = [
  { name: "HTML CSS JS", image: htmlCSSJSIcon },
  { name: "PBI", image: PowerBIicon },
  { name: "Mysql", image: MysqlIcon },
  { name: "Python", image:PythonIcon },
  { name: "Mern stack", image: MernIcon },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
