import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div
        onClick={() => setIsNavToggled(!isNavToggled)}
        className={styles.menu}
      >
        &#9776;
      </div>
      {isNavToggled && (
        <nav className={styles.navMobile}>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#certificates">Certificates</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      )}
      <nav className={styles.nav}>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#certificates">Certificates</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
