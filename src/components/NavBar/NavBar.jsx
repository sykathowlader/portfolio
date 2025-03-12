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

  const moveToTopPage = () => {
    window.scrollTo(0, 0); // Scrolls to top immediately
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
            <Link to="/" onClick={moveToTopPage}>
              Sykat Howlader
            </Link>
          </div>
        </div>

        {/* Left Panel Slider for small screens */}
        <div className={`navigation-slider ${menuOpen ? "open" : ""}`}>
          <Link to="/#projects" onClick={toggleMenu}>
            <button>Projects</button>
          </Link>

          <Link to="/education" onClick={[moveToTopPage, toggleMenu]}>
            <button>Education</button>
          </Link>
          <Link to="/certifications" onClick={moveToTopPage}>
            <button>Certifications</button>
          </Link>
        </div>

        <div className={`navigation-menu`}>
          <div className={`navigation-menu-buttons ${menuOpen ? "open" : ""}`}>
            <div className="navigation-projects">
              <Link to="/#projects">
                <button>Projects</button>
              </Link>
            </div>

            <div className="navigation-education">
              <Link to="/education" onClick={moveToTopPage}>
                <button>Education</button>
              </Link>
            </div>
            <Link to="/certifications" onClick={moveToTopPage}>
              <button>Certifications</button>
            </Link>
          </div>
          {/*  <div className="navigation-icons">
            
            <div className="navigation-icon-dark-mode">
              <MdBrightness3 />
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
