import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./components/Home";
import CertificateDetails from "./components/CertificateDetails";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/certificates/:certificateTitle"
          element={<CertificateDetails />}
        />
        <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
      </Routes>
    </main>
  );
}

export default App;
