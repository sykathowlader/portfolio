import HeroSection from "../HeroSection/HeroSection";
import NavBar from "../../../components/NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </>
  );
}
