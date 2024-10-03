import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Pricing.module.css";
export default function Pricing() {
  return (
    <div className={styles.Pricing}>
      <Navbar />
      <main>
        <div className={styles.container}>
          <h2>
            Simple pricing.<br></br>
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageHolder}> </div>
        </div>
      </main>
    </div>
  );
}
