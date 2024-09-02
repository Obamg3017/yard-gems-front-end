import { Link } from "react-router-dom";
import "./footer.css";

const Footer = ({ isLandingPage }) => {
  return (
    <footer className={isLandingPage ? "footer landing-page-footer" : "footer"}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/map">View Map</Link>
        </li>
      </ul>
      <ul>
        <li>
          Site Created By:
        </li>
        <li>
          Jonathan Coffen  
        </li>
        <li>
          Olorunfemi Bamgbose
        </li>
        <li>
          Rosevelt Foushee
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
