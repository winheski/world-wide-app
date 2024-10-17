import styles from "./CityList.module.css";
export default function CityList() {
  return (
    <section className={styles.citylist}>
      <ul>
        <li>
          <div className={styles.cityinfo}>
            <span>BR Curitiba</span>
            <span className={styles.citydate}>(October 17, 2024)</span>
          </div>
          <div className={styles.buttoncontainer}>
            <button className={styles.button}> &#10006;</button>
          </div>
        </li>
        <li>
          <span className={styles.cityinfo}>US Denver</span>
          <span className={styles.citydate}>(October 1st, 2024)</span>
        </li>
      </ul>
    </section>
  );
}
