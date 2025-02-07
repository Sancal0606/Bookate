import React from "react";
import styles from "./Info.module.css";
import { getImageUrl } from "../../utils";

const Info = () => {
  return (
    <section id="info" className={styles.container}>
      <div className={styles.content}>
        <img src={getImageUrl("Icon.png")} className={styles.logo}></img>
        <h1 className={styles.text}>Bookate</h1>
      </div>
      <div className={styles.content}>
        <img
          src={getImageUrl("emailIcon.png")}
          className={styles.logoMail}
        ></img>
        <a className={styles.text} href="mailto: carloz1.2.sanchez@gmail.com">carloz1.2.sanchez@gmail.com</a>
      </div>
      <div className={styles.content}>
        <img
          src={getImageUrl("twitter.png")}
          className={styles.logoTwitter}
        ></img>
        <a className={styles.text} href="https://x.com/Carloz1Sanchez">Carloz1Sanchez</a>
      </div>
    </section>
  );
};

export default Info;
