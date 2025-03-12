import Certification from "./Certification";
import "./CertificationPage.css";
import NavBar from "../../components/NavBar/NavBar";
import googleDataFinal from "../../assets/certifications/google_data/google_data.jpeg";
import googleR from "../../assets/certifications/google_data/r_programming.jpeg";
import javascript from "../../assets/certifications/javascript/java_script.jpg";
import aws from "../../assets/certifications/aws/aws.png";
import fullStack from "../../assets/certifications/codecademy/full_stack.png";

export default function CertificationPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="certification-page">
        <h1 className="certifications-title">Explore my certifications</h1>
        <div className="certifications">
          <Certification
            imageUrl={fullStack}
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/5f7e644d833c070013ef47c4"
            }
            title={"Full-Stack Engineer Career Path"}
            description={`I completed the Full-Stack Engineer Path course, a 150-hour program 
            where I gained comprehensive knowledge of front-end and back-end development. 
            The course covered key areas such as HTML, CSS, JavaScript, React, Redux, Node.js, 
            Express.js, PostgreSQL, and API development. I also explored web security 
            fundamentals and revisited data structures and algorithms.`}
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Redux",
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "API development",
              "web securities",
            ]}
          ></Certification>
          <Certification
            imageUrl={javascript}
            link={
              "https://www.udemy.com/certificate/UC-a0707c44-8c85-49cb-a24f-b6bd8abdc573/"
            }
            title={"The Complete JavaScript Course 2025: From Zero to Expert! "}
            description={`I advanced my JavaScript skills with a focus on modern JavaScript 
              (ES6+), OOP, asynchronous programming, and key tools like NPM and Babel. 
              The course strengthened my problem-solving abilities and coding architecture 
              skills, preparing me to tackle real-world development challenges.`}
            skills={["JavaScript"]}
          ></Certification>
          <Certification
            imageUrl={googleDataFinal}
            link={"https://coursera.org/share/04cfa743491971d36de8766749300f9d"}
            title={"Google Data Analytics"}
            description={`Completed Google’s 8-module Data Analytics Professional Certificate, 
              learning to analyze and interpret data from start to finish. 
              Acquired skills to transform raw data into actionable insights using 
              industry-standard tools and techniques.
              `}
            skills={[
              "data cleaning",
              "data analysis",
              "data visualization",
              "SQL",
              "Spreadsheet",
              "Tableau",
            ]}
          ></Certification>
          <Certification
            imageUrl={googleR}
            title={"Data Analysis with R Programming"}
            link={"https://coursera.org/share/c9eccbd8c2eb077b95597e0827cb1913"}
            description={`Completed Google’s 'Data Analysis with R Programming' course, 
              mastering R programming, data analysis, visualization, and R Markdown to 
              transform data into actionable insights.`}
            skills={["R Programming language"]}
          ></Certification>
          <Certification
            imageUrl={aws}
            title={"AWS Academy Cloud Foundations"}
            link={"https://www.credly.com/go/1FcYVjxV"}
            description={`I completed this introductory course that gives an overview
             of AWS and their services`}
            skills={["AWS"]}
          ></Certification>
        </div>
      </div>
    </>
  );
}
