import "./Projects.css";
import Project from "./Project";
import studyBuddy from "../../../assets/project_images/study_buddy/study_buddy.jpeg";
import study_signup from "../../../assets/project_images/study_buddy/signup_page.jpeg";
import study_profile from "../../../assets/project_images/study_buddy/profile_page.jpeg";
import study_study from "../../../assets/project_images/study_buddy/study_page.jpeg";
import study_user_search from "../../../assets/project_images/study_buddy/user_search.jpeg";
import study_chat from "../../../assets/project_images/study_buddy/chat_page.jpeg";
import cityGame from "../../../assets/project_images/city_game/city_game.png";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <Project
        linkGitHub={"https://github.com/sykathowlader/study_buddy_fl"}
        media={[
          { type: "image", src: studyBuddy },
          { type: "image", src: study_signup },
          { type: "image", src: study_profile },
          { type: "image", src: study_study },
          { type: "image", src: study_user_search },
          { type: "image", src: study_chat },
        ]}
        title={"Study Buddy"}
        description={`For my final year project, I developed a Flutter application called
            Study Buddy. Designed for university students. This social
            media-inspired app helps students connect and organize in-person
            study sessions. Built using Dart programming language and powered by
            Firebase for backend services, Study Buddy enables users to find
            study partners, create groups, and enhance their academic network
            seamlessly`}
        languageTechnology={["Flutter", "Dart", "Firebase"]}
      ></Project>
      <Project
        linkGitHub={"https://github.com/sykathowlader/java_platform_game"}
        media={[
          {
            type: "image",
            src: cityGame,
          },
          {
            type: "youtube",
            src: "fHp4y3ACM6c",
          },
        ]}
        title={"Java Platform Game"}
        description={`In my year 1 for the Java module, I developed a game where the main character, 
          called Hero, collects coins while avoiding fireballs falling from the sky. 
          The game features three levels with increasing difficulty and uses the City 
          Physique Engine for 2D physics like collisions and gravity. Despite challenges 
          like debugging NullPointerExceptions, I'm proud of this project that includes 
          an interactive menu, sound effects, and background music.`}
        languageTechnology={["Java"]}
      ></Project>
    </div>
  );
}
