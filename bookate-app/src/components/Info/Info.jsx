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
        <h1 className={styles.text}>carloz1.2.sanchez@gmail.com</h1>
      </div>
      <div className={styles.content}>
        <img
          src={getImageUrl("twitter.png")}
          className={styles.logoTwitter}
        ></img>
        <h1 className={styles.text}>Carloz1Sanchez</h1>
      </div>
    </section>
  );
};

export default Info;
