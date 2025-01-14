import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import profileImg from "../assets/images/profil.jpg";
import skillsCollection from "../data/skills.json";
import coursesCollection from "../data/courses.json";
import certificatesCollection from "../data/certificates.json";
import projectsCollection from "../data/projects.json";
import NavBar from "./NavBar";

export default function Home() {
  const [skills, setSkills] = useState([]);
  const [courses, setCourses] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setSkills(skillsCollection);
    setCourses(coursesCollection);
    setCertificates(certificatesCollection);
    setProjects(projectsCollection);
  }, []);

  return (
    <section className={styles.home}>
      <NavBar />
      <div id="about" className={styles.about}>
        <div className={styles.profileImg}>
          <img src={profileImg} alt="profileImage" />
        </div>
        <div className={styles.nameAndPosition}>
          <div className={styles.name}>
            <span>I’m</span>
            <h4>Stanislav Hrusanov</h4>
          </div>
          <h3>JavaScript Developer</h3>
          <p>
            A developer with strong foundation in web development technologies,
            including JavaScript, HTML5, and CSS3. Eager to leverage my
            knowledge of modern web frameworks like React, along with
            problem-solving skills and passion for coding, to contribute to a
            dynamic development team. Also having a solid experience with
            NodeJS, ExpressJS and Handlebars in building multipage applications
            and RESTful API. Excited to apply my project experience in a
            real-world development environment.
          </p>
        </div>
      </div>

      <div id="skills" className={styles.mySkills}>
        <h2>My Skills</h2>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skill}>
              <img src={`/images/logos/${skill.logo}`} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="education" className={styles.education}>
        <h2>Education</h2>
        <div className={styles.courses}>
          {courses.map((course) => (
            <div key={course.name} className={styles.course}>
              <h3>{course.name}</h3>
              <p>{course.info}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="certificates" className={styles.certificates}>
        <h2>Certificates</h2>
        <div className={styles.certificatesContainer}>
          {certificates.map((certificate) => (
            <Link
              to={`/certificates/${certificate.title}`}
              key={certificate.title}
              className={styles.certificate}
            >
              <img
                src={`/images/certificates/${certificate.images[0]}`}
                alt={certificate.title}
              />
              <p>{certificate.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div id="projects" className={styles.myProjects}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link
              to={`/projects/${project.title}`}
              key={project.title}
              className={styles.project}
            >
              <img
                src={`/images/projects/${project.image}`}
                alt={project.title}
              />
              <p>{project.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div id="contacts" className={styles.contacts}>
        <h2>Contacts</h2>
        <div className={styles.emailAndPhone}>
          <div>
            <img src="/images/logos/mail.svg" alt="" />
            <span>stanislavhrusanov1987@abv.bg</span>
          </div>
          <div>
            <img src="/images/logos/phone.svg" alt="" />
            <span>+359884090995</span>
          </div>
        </div>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/stanislav-hrusanov-72670a2bb/">
            <img src="/images/logos/linkedin.svg" alt="" />
          </a>
          <a href="https://github.com/StanislavHrusanov">
            <img src="/images/logos/github.svg" alt="" />
          </a>
          <a href="https://www.facebook.com/stanislav.hrusanov">
            <img src="/images/logos/facebook.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
