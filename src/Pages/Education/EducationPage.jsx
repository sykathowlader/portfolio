import "./EducationPage.css";

import volta from "../../assets/project_images/education/volta.png";
import city from "../../assets/project_images/education/city.png";

export default function () {
  return (
    <div className="education-page">
      <div className="education-container">
        <h1 className="education-title">My Education</h1>

        <div className="education-card">
          <img
            src={city}
            alt="City, University of London Logo"
            className="education-logo"
          />
          <div className="education-details">
            <h2>City, University of London</h2>
            <p className="degree">BSc Computer Science (First Class Honours)</p>
            <p className="location">London, United Kingdom</p>
            <p className="period">2021 - 2024</p>
            <p className="edu-des">
              My university experience provided me with a strong foundation in
              both theoretical concepts and practical applications, providing me
              with the skills to tackle complex problems effectively.
            </p>

            <ul className="highlights">
              <li>Specialized in Java, Python, Artificial Intelligence</li>
              <li>Key Focus: Data Structures, Algorithms</li>
            </ul>
          </div>
        </div>
        <div className="education-card">
          <img
            src={volta}
            alt="Liceo Scientifico Alessandro Volta Logo"
            className="education-logo"
          />
          <div className="education-details">
            <h2>Liceo Scientifico Alessandro Volta</h2>

            <p className="degree">High School Diploma</p>
            <p className="location">Milan, Italy</p>
            <p className="period">2015 - 2020</p>
            <p className="edu-des">
              I attended a prestigious high school in Milan, where I developed a
              strong foundation across a variety of subjects. This experience
              expanded my critical thinking and problem-solving abilities.
            </p>
            <ul className="highlights">
              <li>
                Main Subjects include: Mathematics, Physics, Biology, Chemistry
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
