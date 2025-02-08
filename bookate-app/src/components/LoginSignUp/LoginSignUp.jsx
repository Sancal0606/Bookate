import React, { act, useState } from "react";
import styles from "./LoginSignUp.module.css";
import { getImageUrl } from "../../utils";

const LoginSignUp = ({setLogIn}) => {
  const [action, setAction] = useState("Login");

    const handleSubmit = () =>
    {
        setLogIn(true);
    }

  return (
    <section className={styles.container} id="login">
      <div className={styles.header}>
        <div className={styles.text}>{action}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className={styles.input}>
            <img src={getImageUrl("person.png")} alt=""></img>
            <input type="text" placeholder="Name"></input>
          </div>
        )}

        <div className={styles.input}>
          <img src={getImageUrl("email.png")} alt=""></img>
          <input type="email" placeholder="Email"></input>
        </div>
        <div className={styles.input}>
          <img src={getImageUrl("password.png")} alt=""></img>
          <input type="password" placeholder="Password"></input>
        </div>
      </div>
      {action === "Login" ? (
        <div className={styles.forgot_password}>
          Are you new?{" "}
          <span
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Create an Account!
          </span>
        </div>
      ) : (
        <div className={styles.forgot_password}>
          Already a member?{" "}
          <span
            onClick={() => {
              setAction("Login");
            }}
          >
            Log In!
          </span>
        </div>
      )}
      <div className={styles.submit} onClick={handleSubmit}>
        {action === "Login" ? "Log In" : "Create Account"}
      </div>
    </section>
  );
};

export default LoginSignUp;
