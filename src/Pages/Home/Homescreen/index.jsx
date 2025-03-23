import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import NavBar from "../../../components/NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#projects") {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </>
  );
}
