import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../assets/logo.png";

function Navigation() {
  return (
    <>
      <div className="nav">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="links">
          <Link to="/projects">projects</Link>
          <Link to="/gallery">gallery</Link>
          <Link to="/contact">contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
