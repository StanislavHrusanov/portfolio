import { Link } from "react-router-dom";
import styles from "./BackToHomePage.module.css";

export default function BackToHomePage() {
  return (
    <div className={styles.backBtnContainer}>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}
