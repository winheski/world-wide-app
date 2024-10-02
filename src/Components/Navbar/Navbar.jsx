import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../Reusable/Button/Button";
export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link to={"/"} className={styles.logoContainer}>
          <img src="/icon.png" alt="Logo" className={styles.logo} />
          <span>WorldWide</span>
        </Link>

        <ul>
          <Link to={"/Pricing"} className={styles.item}>
            Pricing
          </Link>
          <Link to={"/Product"} className={styles.item}>
            Product
          </Link>
          <Button url={"/Login"} text={"Login"} />
        </ul>
      </nav>
    </>
  );
}
