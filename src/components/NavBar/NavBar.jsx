import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-home">
          <a href="">Sykat Howlader</a>
        </div>
        <div className="navigation-menu">
          <div className="navigation-menu-buttons">
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
            <div className="navigation-icon-search">hello</div>
            <div className="navigation-icon-dark-mode">world</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
