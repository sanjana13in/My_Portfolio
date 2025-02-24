// src/components/Navbar.jsx
import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">MyPortfolio</h1>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        {["Home", "About", "Projects", "Skills", "Resume", "Contact"].map(
          (item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
