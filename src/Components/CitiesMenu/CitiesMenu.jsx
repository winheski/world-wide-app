import { NavLink } from "react-router-dom";
import styles from "./CitiesMenu.module.css";
export default function CitiesMenu() {
  return (
    <nav className={styles.citiesmenu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="cities">cities</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="countries">countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}
