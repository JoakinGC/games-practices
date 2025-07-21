import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Room Game</h3>
        <ul className="footer-links">
          <li><Link to="/game">games</Link></li>
          <li><Link to="/score">Score</Link></li>
          <li><Link to="/games">Sign in</Link></li>
        </ul>
        <div className="footer-socials">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
        </div>
        <p className="footer-copy">&copy; 2025 Room Game. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
