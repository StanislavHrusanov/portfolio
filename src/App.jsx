import styles from "./App.module.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Home />
    </main>
  );
}

export default App;
