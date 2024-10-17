import Logo from "../../Components/Reusable/Logo/Logo.jsx";
import styles from "./AppPage.module.css";
import CitiesMenu from "../../Components/CitiesMenu/CitiesMenu.jsx";

export default function AppPage() {
  return (
    <div className={styles.AppPage}>
      <div className={styles.menu}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <CitiesMenu />
      </div>
      <div className={styles.mapContainer}> div2</div>
    </div>
  );
}
