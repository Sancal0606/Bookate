import React, { act, useState } from "react";
import styles from "./LoginSignUp.module.css";
import { getImageUrl } from "../../utils";
import { v4 as uuidv4 } from "uuid";
import { header } from "motion/react-client";

const LoginSignUp = ({ setLogIn }) => {
  const [action, setAction] = useState("Login");

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const modifyName = (event) => {
    setName(event.target.value);
  };

  const modifyMail = (event) => {
    setMail(event.target.value);
  };

  const modifyPassword = (event) => {
    setPassword(event.target.value);
  };

  const optionsPost = {
    method: "POST",
    header: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: "TestName",
      mail: "TestMail",
      password: "TestPassword",
    }),
  };

  const handleSubmit = () => {
    if (action === "Sign Up") {
      console.log(optionsPost.body);
    
      fetch("http://localhost:8080/reader/user", optionsPost)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    } else {
      //fetch(`/assets/${path}`)
    }
    setLogIn(true);
  };

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
            <input type="text" placeholder="Name" onChange={modifyName}></input>
          </div>
        )}

        <div className={styles.input}>
          <img src={getImageUrl("email.png")} alt=""></img>
          <input type="email" placeholder="Email" onChange={modifyMail}></input>
        </div>
        <div className={styles.input}>
          <img src={getImageUrl("password.png")} alt=""></img>
          <input
            type="password"
            placeholder="Password"
            onChange={modifyPassword}
          ></input>
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
