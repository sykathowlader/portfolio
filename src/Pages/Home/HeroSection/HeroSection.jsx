import "./HeroSection.css";
import profileImage from "../../../assets/img/profile.jpg";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-container">
        {/* Left Side - Profile Image */}
        <div className="hero-image">
          <img src={profileImage} alt="Sykat Howlader" />
        </div>

        {/* Right Side - Text Content */}
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Sykat Howlader</h1>
          <h2 className="hero-role">Full-Stack Developer</h2>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn btn--primary">Projects</button>
            <button className="btn btn--primary">About</button>
          </div>
        </div>
      </div>
    </section>
  );
}
