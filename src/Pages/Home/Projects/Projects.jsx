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
import govee1 from "../../../assets/project_images/govee/govee1.png";
import govee2 from "../../../assets/project_images/govee/govee2.png";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <Project
        linkGitHub={"https://github.com/sykathowlader/govee_light_app"}
        media={[
          {
            type: "image",
            src: govee1,
          },
          { type: "image", src: govee2 },
        ]}
        title={"Smart Led light control app"}
        description={`Developed a full-stack web application to control Govee Smart LED lights, integrating a React frontend 
          with a Node.js and Express backend via the Govee API. Users can select from five colors, red, blue, green, yellow, 
          and orange, each triggering a unique audio track that reflects the emotion conveyed by that color, such as 
          intensity for red or calmness for blue. The frontend, built with React, features a responsive grid of color boxes 
          and a turn-off button, leveraging state management to handle color selection, API requests, and audio playback in a 
          seamless loop. The backend uses Express to handle POST requests, simultaneously updating two LED devices with RGB 
          values or turning them off, all powered by asynchronous fetch calls to the Govee API. Sensitive data, including 
          API keys, device MAC addresses, and model numbers, are securely stored in an .env file and accessed via 
          the dotenv package. Deployed the backend on Render and the frontend on Vercel, utilizing environment 
          variables for flexible API routing between local and production environments.`}
        languageTechnology={[
          "React",
          "Node.js",
          "Express",
          "JavaScript",
          "CSS",
          "HTML",
        ]}
        externalLink={
          "https://govee-light-app-sykathowladers-projects.vercel.app/"
        }
      ></Project>
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
        description={`For my Computer Vision module coursework, I developed and evaluated three 
          machine learning models to predict face mask usage from images. The project involved 
          classifying faces into three categories: no mask, correctly worn mask, and improperly 
          worn mask. I implemented a Support Vector Machine (SVM) and Multi-layer Perceptron (MLP) 
          using HOG feature descriptors, alongside a Convolutional Neural Network (CNN). 
          Technologies used included Python, OpenCV for preprocessing, scikit-learn 
          for SVM and MLP, and PyTorch for the CNN. The CNN achieved the highest accuracy at 92%, though all models faced challenges with class imbalance.`}
        languageTechnology={["Python", "OpenCv", "Scikit-learn", "PyTorch"]}
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
