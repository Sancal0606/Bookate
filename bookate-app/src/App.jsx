import { linearGradient } from "motion/react-client";
import styles from "./App.module.css";
import BookSwap from "./components/Book/BookSwap";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Match from "./components/Match/Match"
import Info from './components/Info/Info'

function App() {
  return (
    <section className={styles.App} id="about">
      <Navbar></Navbar>
      <About></About>
      <BookSwap></BookSwap>
      <Match></Match>
      <Info></Info>
    </section>
  );
}

export default App;
