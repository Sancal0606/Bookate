import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"
const About = ({isLogin}) => {
  return (
    <section className={styles.container} id="about">
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, welcome to BOOKATE</h1>
            <p className={styles.description}>Your page to choose your next book to read</p>
            {isLogin === false?<a className={styles.login} href='#login'>Login</a>:<div/>}
            
        </div>
        <div className={styles.logo}>
          <img className={styles.icon} src={getImageUrl("Icon.png")} alt="Icon"/>
          <img className={styles.shadow} src={getImageUrl("Shadow.png")} alt="Icon"/>
        </div>
        
        <div className={styles.topBlur}/>
    </section>
  )
}

export default About
