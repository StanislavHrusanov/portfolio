import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Projects</Link>
        </li>
        <li>
          <Link>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
