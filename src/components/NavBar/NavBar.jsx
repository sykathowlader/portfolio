import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { MdBrightness3 } from "react-icons/md";
import { TbBrightnessUp } from "react-icons/tb";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme(); // Access theme context

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll to top of the page
  const moveToTopPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
    if (menuOpen) toggleMenu();
  };

  // Handle hash change when route changes
  useEffect(() => {
    if (location.hash === "#projects") {
      scrollToProjects();
    }
  }, [location]);

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
          <Link to="/#projects" onClick={scrollToProjects}>
            <button>Projects</button>
          </Link>
          <Link
            to="/education"
            onClick={() => {
              moveToTopPage();
              toggleMenu();
            }}
          >
            <button>Education</button>
          </Link>
          <Link
            to="/certifications"
            onClick={() => {
              moveToTopPage();
              toggleMenu();
            }}
          >
            <button>Certifications</button>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navigation-menu">
          <div className={`navigation-menu-buttons ${menuOpen ? "open" : ""}`}>
            <div className="navigation-projects">
              <Link to="/#projects" onClick={scrollToProjects}>
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

          <div className="navigation-icon-dark-mode" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <TbBrightnessUp size={30} />
            ) : (
              <MdBrightness3 size={30} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
