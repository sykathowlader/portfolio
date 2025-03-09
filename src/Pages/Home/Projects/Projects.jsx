import "./Projects.css";
import Project from "./Project";
import studyBuddy from "../../../assets/project_images/study_buddy/study_buddy.jpeg";
import study_signup from "../../../assets/project_images/study_buddy/signup_page.jpeg";
import study_profile from "../../../assets/project_images/study_buddy/profile_page.jpeg";
import study_study from "../../../assets/project_images/study_buddy/study_page.jpeg";
import study_user_search from "../../../assets/project_images/study_buddy/user_search.jpeg";
import study_chat from "../../../assets/project_images/study_buddy/chat_page.jpeg";
import cityGame from "../../../assets/project_images/city_game/city_game.png";
import airAdmin from "../../../assets/project_images/airvia/admin.png";
import airCustomer from "../../../assets/project_images/airvia/customer_creation.png";
import airReport from "../../../assets/project_images/airvia/generate_report.png";
import airLogin from "../../../assets/project_images/airvia/login.png";
import airManager from "../../../assets/project_images/airvia/manager.png";
import airRefund from "../../../assets/project_images/airvia/refund.png";
import airBlank from "../../../assets/project_images/airvia/selling_blank.png";
import airStock from "../../../assets/project_images/airvia/view_own_stock.png";
import cvCnn from "../../../assets/project_images/computer_vision/cnn.png";
import cvHogMlp from "../../../assets/project_images/computer_vision/hog_mlp.png";
import cvHogSvm from "../../../assets/project_images/computer_vision/hog_svm.png";
import cvPersonal from "../../../assets/project_images/computer_vision/personal.png";

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
          { type: "youtube", src: "-dFA00eyxpI" },
        ]}
        title={"Study Buddy"}
        description={`For my final year project at university, I developed a Flutter application called
            Study Buddy. Designed for university students. This social
            media-inspired app helps students connect and organize in-person
            study sessions. Built using Dart programming language and powered by
            Firebase for backend services, Study Buddy enables users to find
            study partners, create groups, send messages and enhance their academic network
            seamlessly`}
        languageTechnology={["Flutter", "Dart", "Firebase"]}
      ></Project>
      <Project
        title={"Computer Vision - Face Covering Detection Models"}
        linkGitHub={
          "https://github.com/sykathowlader/computer_vision_mask_detection"
        }
        media={[
          {
            type: "image",
            src: cvHogSvm,
          },
          {
            type: "image",
            src: cvHogMlp,
          },
          {
            type: "image",
            src: cvCnn,
          },
          {
            type: "image",
            src: cvPersonal,
          },
          {
            type: "youtube",
            src: "Ko88Wd4Ttqw",
          },
        ]}
        description={"Computer vision"}
        languageTechnology={["OpenCv", "Pandas"]}
      ></Project>
      <Project
        linkGitHub={"https://github.com/sykathowlader/air_via_system"}
        title={"Plane ticket sales system"}
        media={[
          {
            type: "image",
            src: airLogin,
          },
          {
            type: "image",
            src: airCustomer,
          },
          {
            type: "image",
            src: airBlank,
          },
          {
            type: "image",
            src: airRefund,
          },
          {
            type: "image",
            src: airStock,
          },
          {
            type: "image",
            src: airReport,
          },
          {
            type: "image",
            src: airManager,
          },
          {
            type: "image",
            src: airAdmin,
          },
        ]}
        description={`
          In my second year of university, I worked on a group project to build a 
          plane ticket sales system for a fictional travel agency, Air Via Ltd. 
          We developed it from scratch, creating use case and class diagrams, 
          designing the database entity-relationship diagram (ERD), and coding it 
          with Java and JavaFX. I focused on the class diagram and implementation, 
          using MySQL for the database. Our project ranked in the top three of our 
          cohort, meeting all requirements with a sleek, user-friendly GUI.
          `}
        languageTechnology={["JavaFx", "Java", "MySQL"]}
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
        description={`In my first year Java module, I developed a game featuring a main 
          character, Hero, who collects coins while dodging fireballs falling from the sky. 
          The game includes three levels of increasing difficulty and leverages the 
          City Physique Engine for 2D physics (provided by the University), such as collisions and gravity. 
          Despite challenges like debugging NullPointerExceptions, I’m proud of this project, 
          which features an interactive menu, sound effects, and background music.`}
        languageTechnology={["Java"]}
      ></Project>
    </div>
  );
}
