import { linearGradient } from "motion/react-client";
import styles from "./App.module.css";
import BookCard from "./components/BookCard";
import BookSwap from "./components/BookSwap";
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
