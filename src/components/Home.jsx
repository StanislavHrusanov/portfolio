import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import profileImg from "../assets/images/profil.jpg";
import skillsCollection from "../data/skills.json";
import coursesCollection from "../data/courses.json";
import certificatesCollection from "../data/certificates.json";

export default function Home() {
  const [skills, setSkills] = useState([]);
  const [courses, setCourses] = useState([]);
  const [certificates, setCertificates] = useState([]);
  console.log(skills);

  useEffect(() => {
    setSkills(skillsCollection);
    setCourses(coursesCollection);
    setCertificates(certificatesCollection);
  }, []);

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
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skill}>
              <img
                src={`../../public/images/logos/${skill.logo}`}
                alt={skill.name}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.education}>
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
      <div className={styles.certificates}>
        <h2>Certificates</h2>
        <div className={styles.certificatesContainer}>
          {certificates.map((certificate) => (
            <div key={certificate.title} className={styles.certificate}>
              <img
                src={`../../public/images/certificates/${certificate.images[0]}`}
                alt=""
              />
              <Link>
                <p>{certificate.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
