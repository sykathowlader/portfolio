import "./NavBar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdBrightness3 } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  // Toggle menu visibility when menu icon is clicked
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation">
      <div className="navigation-container">
        {/* Menu Icon (visible on small screens) */}
        <div className="navigation-left">
          <div className="navigation-menu-icon" onClick={toggleMenu}>
            {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </div>
          <div className="navigation-home">
            <Link to="/">Sykat Howlader</Link>
          </div>
        </div>

        {/* Left Panel Slider for small screens */}
        <div className={`navigation-slider ${menuOpen ? "open" : ""}`}>
          <button>Projects</button>
          <button>Experience</button>
          <button>Education</button>
          <button>More</button>
        </div>

        <div className={`navigation-menu`}>
          <div className={`navigation-menu-buttons ${menuOpen ? "open" : ""}`}>
            <div className="navigation-projects">
              <button>Projects</button>
            </div>
            <div className="navigation-experience">
              <button>Experience</button>
            </div>
            <div className="navigation-education">
              <button>Edication</button>
            </div>
            <div className="navigation-more">
              <button>More</button>
            </div>
          </div>
          <div className="navigation-icons">
            <div className="navigation-icon-search">
              <CiSearch /> {/* React Icons search icon */}
            </div>
            <div className="navigation-icon-dark-mode">
              <MdBrightness3 />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
