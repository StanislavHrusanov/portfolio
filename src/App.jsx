import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CertificateDetails from "./components/CertificateDetails";

function App() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/certificates/:certificateTitle"
          element={<CertificateDetails />}
        />
      </Routes>
    </main>
  );
}

export default App;
