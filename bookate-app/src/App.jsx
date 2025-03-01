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
  const [idUser, SetIdUser] = useState();
  const [userName, SetName] = useState('');
  return (
    <section className={styles.App} id="about">
      <Navbar isLogin={logIn} user = {userName}></Navbar>
      <About isLogin={logIn}></About>
      {logIn === false ? (
        <LoginSignUp setLogIn={SetLogIn} setId={SetIdUser} setUsername = {SetName}></LoginSignUp>
      ) : (
        <div>
          <BookSwap userId={idUser}></BookSwap>
          <Match idUser={idUser}></Match>
        </div>
      )}

      <Info></Info>
    </section>
  );
}

export default App;
