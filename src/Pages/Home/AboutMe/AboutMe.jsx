import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <h1>About Me</h1>
      <section>
        <div className="description">
          <h2>Get to know me!</h2>
          <p>
            Hi, I’m Sykat Howlader, an aspiring <span>software developer</span>{" "}
            with a strong foundation in <span>full-stack</span> development
            technologies like React, Node.js. I enjoy tackling challenges and
            building efficient, scalable solutions.{" "}
          </p>

          <p>
            I graduated with <span>First Class Honours</span> in Computer
            Science from City, University of London. I've been recognized as one
            of the 6 outstanding students in my entire cohort. My experience
            includes working on web applications, machine learning models, and
            mobile apps, always striving to refine my skills and expand my
            knowledge.
          </p>
          <p>
            Beyond coding, I manage an Amazon FBA <span>business</span>, where I
            analyze sales trends and optimize product listings. I also have an
            interest in Forex trading and stay active through swimming,
            gymnastics, and football.
          </p>
          <p>
            I’m always looking to improve and take on new challenges in software
            development. Let’s connect! 🚀
          </p>
        </div>
        <div className="info">
          <div className="languages">
            <h2>Languages</h2>
            <div className="languages-list">
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>Java</button>
              <button>C ++</button>
              <button>Python</button>
              <button>Dart</button>
              <button>SQL</button>
              <button>R</button>
            </div>
          </div>
          <div className="technologies">
            <h2>Technologies</h2>
            <div className="technologies-list">
              <button>React</button>
              <button>Node.js</button>
              <button>Express.js</button>
              <button>Redux</button>
              <button>jQuery</button>
              <button>PostgreSQL</button>
              <button>Tailwind CSS</button>
              <button>Flutter</button>
              <button>FireBase</button>
              <button>AWS</button>
              <button>Git</button>
              <button>GitHub</button>
              <button>Tableau</button>
              <button>Pandas</button>
              <button>Numpy</button>
              <button>Open CV</button>
              <button>PyTorch</button>
              <button>Scikit-learn</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
