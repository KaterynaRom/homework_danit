import styles from './Header.module.scss'
import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>grocery store</h1>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink exact className={styles.navLink} activeClassName={styles.active} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={styles.navLink} activeClassName={styles.active} to="/cart">Cart</NavLink>
          </li>
          <li>
            <NavLink className={styles.navLink} activeClassName={styles.active} to="/favourite">Favourites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;