import { linearGradient } from "motion/react-client";
import styles from "./App.module.css";
import BookSwap from "./components/Book/BookSwap";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Match from "./components/Match/Match";
import Info from "./components/Info/Info";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";
import { useState } from "react";

function App() {
  const [logIn, SetLogIn] = useState(false);

  return (
    <section className={styles.App} id="about">
      <Navbar isLogin={logIn}></Navbar>
      <About isLogin={logIn}></About>
      {logIn === false ? (
        <LoginSignUp setLogIn={SetLogIn}></LoginSignUp>
      ) : (
        <div>
          <BookSwap></BookSwap>
          <Match></Match>
        </div>
      )}

      <Info></Info>
    </section>
  );
}

export default App;
