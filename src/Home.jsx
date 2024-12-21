import styles from "./Home.module.css";
import profileImg from "./assets/images/profil.jpg";
import cssLogo from "./assets/images/css3-original-wordmark.svg";
import htmlLogo from "./assets/images/html5-original-wordmark.svg";
import jsLogo from "./assets/images/javascript-original.svg";
import tsLogo from "./assets/images/typescript-original.svg";
import reactLogo from "./assets/images/react-original-wordmark.svg";
import reduxLogo from "./assets/images/redux-original.svg";
import nodeJSLogo from "./assets/images/nodejs-original-wordmark.svg";
import expressLogo from "./assets/images/express-original-wordmark.svg";
import mongoDbLogo from "./assets/images/mongodb-original-wordmark.svg";
import mongooseLogo from "./assets/images/mongoose-original.svg";
import gitLogo from "./assets/images/git-original.svg";
import nextJSLogo from "./assets/images/nextjs-original-wordmark.svg";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.title}>
        <div className={styles.profileImg}>
          <img src={profileImg} alt="profileImage" />
        </div>
        <div className={styles.nameAndPosition}>
          <div className={styles.name}>
            <span>I’m</span>
            <h4>Stanislav Hrusanov</h4>
          </div>
          <h3>JavaScript Developer</h3>
        </div>
      </div>
      <div className={styles.about}>
        <h2>About</h2>
        <p>
          Aspiring JavaScript Developer with a strong foundation in web
          development technologies, including JavaScript, HTML5, and CSS3. Eager
          to leverage my knowledge of modern web frameworks like React, along
          with problem-solving skills and passion for coding, to contribute to a
          dynamic development team. Excited to apply my project experience in a
          real-world development environment.
        </p>
      </div>
      <div className={styles.mySkills}>
        <h2>My Skills</h2>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <img src={cssLogo} alt="CSS" />
            <p>CSS3</p>
          </div>
          <div className={styles.skill}>
            <img src={htmlLogo} alt="HTML" />
            <p>HTML5</p>
          </div>
          <div className={styles.skill}>
            <img src={jsLogo} alt="JS" />
            <p>JS</p>
          </div>
          <div className={styles.skill}>
            <img src={tsLogo} alt="TS" />
            <p>TS</p>
          </div>
          <div className={styles.skill}>
            <img src={reactLogo} alt="React" />
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <img src={reduxLogo} alt="Redux" />
            <p>Redux</p>
          </div>
          <div className={styles.skill}>
            <img src={nodeJSLogo} alt="NodeJS" />
            <p>NodeJS</p>
          </div>
          <div className={styles.skill}>
            <img src={expressLogo} alt="Express" />
            <p>Express</p>
          </div>
          <div className={styles.skill}>
            <img src={mongoDbLogo} alt="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <img src={mongooseLogo} alt="Mongoose" />
            <p>Mongoose</p>
          </div>
          <div className={styles.skill}>
            <img src={gitLogo} alt="Git" />
            <p>Git</p>
          </div>
          <div className={styles.skill}>
            <img src={nextJSLogo} alt="NextJS" />
            <p>NextJS</p>
          </div>
        </div>
      </div>
      <div className={styles.education}>
        <h2>Education</h2>
        <div className={styles.courses}>
          <div className={styles.course}>
            <h3>Course Understanding TypeScript</h3>
            <p>Udemy | 04.2024</p>
          </div>
          <div className={styles.course}>
            <h3>Course HTML/CSS</h3>
            <p>Software University | 05.2023 - 07.2023</p>
          </div>
          <div className={styles.course}>
            <h3>Course ReactJS</h3>
            <p>Software University | 03.2023 - 05.2023</p>
          </div>
          <div className={styles.course}>
            <h3>Course JavaScript Back-End</h3>
            <p>Software University | 01.2023 - 03.2023</p>
          </div>
          <div className={styles.course}>
            <h3>Course JavaScript Applications</h3>
            <p>Software University | 11.2022 - 12.2022</p>
          </div>
          <div className={styles.course}>
            <h3>Course JavaScript Advanced</h3>
            <p>Software University | 09.2022 - 11.2022</p>
          </div>
          <div className={styles.course}>
            <h3>Course Programming Fundamentals with JavaScript</h3>
            <p>Software University | 01.2022 - 04.2022</p>
          </div>
          <div className={styles.course}>
            <h3>Course Programming Basics with JavaScript</h3>
            <p>Software University | 09.2021 - 12.2021</p>
          </div>
        </div>
      </div>
    </section>
  );
}
