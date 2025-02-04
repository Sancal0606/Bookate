import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"
const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, welcome to BOOKATE</h1>
            <p className={styles.description}>Your page to choose your next book to read</p>
            <a className={styles.login} href=''>Login</a>
        </div>
        <img className={styles.logo} src={getImageUrl("Icon.png")} alt="Icon"/>
        <div className={styles.topBlur}/>
    </section>
  )
}

export default About
