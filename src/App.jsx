import styles from "./App.module.css";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Home />
    </main>
  );
}

export default App;
