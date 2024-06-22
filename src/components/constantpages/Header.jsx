import "./Header.css"; // Custom styles
import { Link } from "react-router-dom";
import logo from "../../assets/logo_png.png";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/jobseekers">For Job Seekers</Link>
        </li>
        <li className="dropdown">
          <a href="#more">More</a>
          <div className="dropdown-content">
            <Link to="/partnerwithus">Partner with Us</Link>
            <Link to="/referandearn">Refer and Earn</Link>
          </div>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
