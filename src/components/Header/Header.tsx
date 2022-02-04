import React from 'react';
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
    
  return <div className={styles.header}>
    <h1 className={styles.title}>VIRTUAL COMPANY DATA</h1>
    <div  className={styles.buttons}>
    <NavLink to="/" className={styles.link}>
   <button className={styles.button}>Employees</button>
   </NavLink>
   <NavLink to="/todo" className={styles.link}>
   <button className={styles.button}>Tasks</button>
   </NavLink>
   </div>
  </div>;
}

export default Header;
