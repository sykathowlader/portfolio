import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <h1>About Me</h1>
      <section>
        <div className="description">
          <h2>Get to know me!</h2>
          <p>
            Hi, I am Sykat Howlader, an aspiring <span>Data Scientist</span> and{" "}
            <span>AI Engineer</span> with a strong foundation in{" "}
            <span>full-stack</span> development technologies like React and
            Node.js. I enjoy tackling challenges and building intelligent,
            data-driven solutions.
          </p>

          <p>
            I graduated with <span>First Class Honours</span> in Computer
            Science from City, University of London, and was recognized as one
            of the
            <span> top six students</span> in my cohort. My experience includes
            working on <span>machine learning models</span>, web applications,
            and mobile apps, always striving to refine my skills and expand my
            knowledge in <span>AI</span> and <span>data science</span>.
          </p>

          <p>
            Beyond coding, I manage my own{" "}
            <span>skincare e-commerce store</span>, where I analyze sales trends
            and optimize performance. I also have an interest in{" "}
            <span>Forex trading</span> and stay active through swimming,
            gymnastics, and football.
          </p>

          <p>
            I’m passionate about <span>data science</span>, <span>AI</span>, and
            continuous learning—always ready to take on new challenges. Let’s
            connect! 🚀
          </p>
        </div>
        <div className="info">
          <div className="languages">
            <h2>Languages</h2>
            <div className="languages-list">
              <button>Python</button>
              <button>SQL</button>
              <button>R</button>
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>PHP</button>
              <button>Java</button>
              <button>C#</button>
              <button>Dart</button>
            </div>
          </div>
          <div className="technologies">
            <h2>Technologies</h2>
            <div className="technologies-list">
              <button>Pandas</button>
              <button>Numpy</button>
              <button>Matplotlib</button>
              <button>Seaborn</button>
              <button>Tableau</button>
              <button>Open CV</button>
              <button>PyTorch</button>
              <button>Scikit-learn</button>
              <button>React</button>
              <button>Node.js</button>
              <button>Express.js</button>
              <button>Redux</button>
              <button>jQuery</button>
              <button>Bootstrap</button>
              <button>PostgreSQL</button>
              <button>Flutter</button>
              <button>FireBase</button>
              <button>AWS</button>
              <button>Git</button>
              <button>GitHub</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
