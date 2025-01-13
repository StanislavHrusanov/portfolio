import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsCollection from "../data/projects.json";

import styles from "./ProjectDetails.module.css";
import BackToHomePage from "./BackToHomePage";

export default function ProjectDetails() {
  const [project, setProject] = useState({});
  const { projectTitle } = useParams();

  useEffect(() => {
    const projectDetails = projectsCollection.find(
      (p) => p.title === projectTitle
    );
    setProject(projectDetails);
  }, [projectTitle]);

  return (
    <div className={styles.projectDetailsPage}>
      <BackToHomePage />
      <div className={styles.projectContainer}>
        <img src={`/images/projects/${project.image}`} alt="" />
        <div className={styles.projectInfo}>
          <h3>{project.title}</h3>
          <p>{project.info}</p>
          {project.hostedAt && <a href={project.hostedAt}>Check It Online</a>}
          <a href={project.gitHub}>Go to GitHub Repository</a>
        </div>
      </div>
    </div>
  );
}
