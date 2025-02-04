import { linearGradient } from "motion/react-client";
import styles from "./App.module.css";
import BookSwap from "./components/Book/BookSwap";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <About></About>
      <BookSwap></BookSwap>
    </div>
  );
}

export default App;
