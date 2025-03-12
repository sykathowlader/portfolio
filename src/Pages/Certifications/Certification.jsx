import { LiaExternalLinkAltSolid } from "react-icons/lia";
import "./Certification.css";

export default function Certification({
  imageUrl,
  link,
  title,
  description,
  skills,
}) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div className="certification-card">
      <div className="certification-image">
        <img src={imageUrl || ""} alt={title || ""} />
      </div>
      <div className="certification-content">
        <h3 className="certification-title" onClick={handleClick}>
          {title || ""}
          {link && (
            <span>
              <LiaExternalLinkAltSolid className="title-svg" />
            </span>
          )}
        </h3>
        <p className="certification-description">{description || ""}</p>
        <div className="certification-skills">
          <h4>Skills Learned:</h4>
          <ul>
            {skills?.map((skill, index) => <li key={index}>{skill}</li>) || ""}
          </ul>
        </div>
      </div>
    </div>
  );
}
