import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Reusable/Logo/Logo.jsx";
export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <ul>
          <NavLink
            to={"/pricing"}
            className={styles.item}
            activeClassName={styles.active}
          >
            Pricing
          </NavLink>
          <NavLink
            to={"/product"}
            className={styles.item}
            activeClassName={styles.active}
          >
            Product
          </NavLink>
          <NavLink
            to={"/login"}
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
