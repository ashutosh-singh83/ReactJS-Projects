import React from "react";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <img src="/images/logo.png" alt="logo image" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
