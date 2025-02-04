import { linearGradient } from "motion/react-client";
import styles from "./App.module.css";
import BookCard from "./components/BookCard";
import BookSwap from "./components/BookSwap";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <BookSwap></BookSwap>
    </div>
  );
}

export default App;
