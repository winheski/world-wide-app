import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          to={"/"}
          className={styles.logoContainer}
          activeClassName={styles.active}
        >
          <img src="/icon.png" alt="Logo" className={styles.logo} />
          <span>WorldWide</span>
        </NavLink>

        <ul>
          <NavLink
            to={"/Pricing"}
            className={styles.item}
            activeClassName={styles.active}
          >
            Pricing
          </NavLink>
          <NavLink
            to={"/Product"}
            className={styles.item}
            activeClassName={styles.active}
          >
            Product
          </NavLink>
          <NavLink
            to={"/Login"}
            className={styles.item}
            activeClassName={styles.active}
          >
            Login
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
