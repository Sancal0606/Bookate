import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

const Navbar = ({ isLogin, user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.mainTitle} href="/">
        <div className={styles.title}>Bookate</div>
        <img className={styles.icon} src={getImageUrl("Icon.png")}></img>
        <div className={styles.title}>{user}</div>
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("closeIcon.png")
              : getImageUrl("menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        ></img>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          {isLogin === false ? (
            <li>
              <a href="#login">Log In</a>
            </li>
          ) : (
            <div className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
              <li>
                <a href="#books">Books</a>
              </li>
              <li>
                <a href="#match">Match</a>
              </li>
            </div>
          )}
          <li>
            <a href="#info">Info</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
