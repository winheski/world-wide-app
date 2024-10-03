import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <NavLink to={"/"} className={styles.Logo}>
      <img src="/icon.png" alt="Logo" className={styles.logo} />
      <span>WorldWide</span>
    </NavLink>
  );
}
