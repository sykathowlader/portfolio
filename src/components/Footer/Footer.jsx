import Socials from "../socials/Socials";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Sykat Howlader. All rights reserved.
      </p>
      <Socials />
    </footer>
  );
}
