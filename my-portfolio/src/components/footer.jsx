// src/components/Footer.jsx
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Sanjana Tiwari. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://github.com/sanjana13in"></a>
        <a href="https://www.linkedin.com/in/sanjana-tiwari-955246259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"></a>
        <a href="https://www.instagram.com/sanjana19702?igsh=MmJwd2FwNmY3MjVz" ></a>
        <a href="mailto:sanjanatiwari025@gmail.com">Email</a>
      </div>
      <button
        className="back-to-top"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        ⬆ Back to Top
      </button>
    </footer>
  );
};

export default Footer;
