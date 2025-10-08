import Certification from "./Certification";
import "./CertificationPage.css";
import googleDataFinal from "../../assets/certifications/google_data/google_data.jpeg";
import googleR from "../../assets/certifications/google_data/r_programming.jpeg";
import javascript from "../../assets/certifications/javascript/java_script.jpg";
import aws from "../../assets/certifications/aws/aws.png";
import fullStack from "../../assets/certifications/codecademy/full_stack.png";
import jQueryImg from "../../assets/certifications/codecademy/jQuery.png";
import pythonImg from "../../assets/certifications/codecademy/python3.png";
import phpImg from "../../assets/certifications/codecademy/php.png";
import BootstrapImg from "../../assets/certifications/codecademy/bootstrap.png";
import javaImg from "../../assets/certifications/codecademy/java.png";
import cSharpImg from "../../assets/certifications/codecademy/c_sharp.png";
import pandasImg from "../../assets/certifications/codecademy/pandas.png";
import vizImg from "../../assets/certifications/codecademy/viz.png";
import numpyImg from "../../assets/certifications/codecademy/numpy.png";
import r_language from "../../assets/certifications/codecademy/r_language.png";

export default function CertificationPage() {
  return (
    <>
      <div className="certification-page">
        <h1 className="certifications-title">Explore my certifications</h1>
        <div className="certifications">
          <Certification
            title={"Analyze Data with R"}
            imageUrl={r_language}
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/5ea997e832f098001378ca08"
            }
            description={`Completed a comprehensive Data Analysis with R Programming course, 
              gaining hands-on experience in data manipulation, cleaning, aggregation, and joining tables. 
              Proficient in statistical analysis, hypothesis testing, and creating insightful visualizations with ggplot2.`}
            skills={[
              "R Programming language",
              "Data Analysis",
              "data manipulation",
              "data cleaning",
              "data visualization",
              "ggplot2",
            ]}
          ></Certification>
          <Certification
            title={"Visualize Data with Python: Matplotlib & Seaborn"}
            imageUrl={vizImg}
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/a5aaf73bec9640739ee69976d4a75704"
            }
            description={`Completed a practical course on data visualization using Matplotlib 
              and Seaborn, learning to create line charts, bar charts, histograms, heatmaps, and scatter 
              plots to explore and communicate insights from datasets effectively.`}
            skills={["Matplotlib", "Seaborn", "Data Visualization"]}
          ></Certification>
          <Certification
            title={"Learn Statistics with NumPy"}
            imageUrl={numpyImg}
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/43135f7494712f4c3b1ced1a55be7be1"
            }
            description={`Completed a comprehensive course on statistics using NumPy, 
            covering descriptive statistics, probability distributions, hypothesis testing, 
            and data visualization techniques to analyze and interpret data effectively.`}
            skills={["NumPy", "Statistics"]}
          ></Certification>
          <Certification
            title={"Learn Data Analysis with Pandas"}
            imageUrl={pandasImg}
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/95dd3ed417d7d6c449afffc6401b310a"
            }
            description={`Completed a hands-on course covering data cleaning, transformation, and 
            visualization using Pandas. Gained practical experience with dataframes, filtering, grouping, 
            merging, and statistical analysis to draw insights from real-world datasets.`}
            skills={["Pandas", "Data Analysis"]}
          ></Certification>

          <Certification
            title={"Learn C#"}
            imageUrl={cSharpImg}
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/65f0ff88f4fc58e0536b3b51648dff24"
            }
            description={`I have completed the Learn C# course, covering key concepts such as
               data types, conditionals, loops, methods, object-oriented principles, and LINQ.`}
            skills={["C#"]}
          ></Certification>
          <Certification
            imageUrl={javaImg}
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/d3f89367b558583e361640f778191345"
            }
            title={"Learn Java"}
            description={`I have completed the Learn Java course, which covered essential 
              concepts such as object-oriented programming, conditionals, loops, arrays, 
              string methods, encapsulation, inheritance, polymorphism, and debugging. `}
            skills={["Java", "Object oriented programming"]}
          ></Certification>
          <Certification
            title={"Learn Bootstrap"}
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/0595479d03627a8cb816b069000e4d06"
            }
            imageUrl={BootstrapImg}
            description={`I have completed the Learn Bootstrap course, which provided in-depth 
              knowledge of one of the most popular front-end frameworks. The course covered 
              essential concepts such as using the grid system, utilities, and components to 
              quickly design and style responsive websites.`}
            skills={["Bootstrap", "CSS"]}
          ></Certification>
          <Certification
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/9b7bcc38d0ed49f593228763cbfd51e3"
            }
            imageUrl={phpImg}
            description={`I have completed the Learn PHP course, which provided a solid 
              foundation in PHP programming. The course covered essential concepts such as
              variables, strings, numbers, functions, conditionals, arrays, loops, and 
              object-oriented programming. It also explored integrating PHP with HTML, 
              form handling, and validation.`}
            title={"Learn PHP"}
            skills={["PHP"]}
          ></Certification>
          <Certification
            imageUrl={pythonImg}
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/6c152bd262967f8c941c9707ed636bda"
            }
            description={`I have completed the Learn Python 3 course, which provided 
            a strong foundation in Python 3.12. The course covered key concepts such 
            as control flow, loops, functions, modules, file handling, and object-oriented 
            programming.`}
            title={"Learn Python 3"}
            skills={["Python"]}
          ></Certification>
          <Certification
            imageUrl={jQueryImg}
            link={
              "https://www.codecademy.com/profiles/SykatHowlader/certificates/0becf7c1cd2bd715f24331dddd23425a"
            }
            title={"Learn jQuery"}
            description={
              "I completed the jQuery course offered by Codecademy, mastering effects, event handling, style manipulation, and DOM traversal to create dynamic and interactive web pages."
            }
            skills={["jQuery"]}
          ></Certification>
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
