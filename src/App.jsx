import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import CertificateDetails from "./pages/CertificateDetails";
import ProjectDetails from "./pages/ProjectDetails";

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
