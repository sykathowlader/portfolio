import "./Socials.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Socials() {
  return (
    <div className="socials">
      <a
        href="https://github.com/sykathowlader"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="github-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/sykat-howlader"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="linkedin-icon" />
      </a>
      <a
        href="mailto:sykat12@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <MdEmail className="email-icon" />
      </a>
    </div>
  );
}
