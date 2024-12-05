import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Reusable/Button/Button";
import styles from "./Homepage.module.css";
export default function Homepage() {
  return (
    <>
      <div className={styles.Homepage}>
        <Navbar />
        <main>
          <section>
            <h1>
              You travel the world. <br></br>WorldWise keeps track of your
              adventures.
            </h1>
            <h2>
              A world map that tracks your footsteps into every city you can
              think of. Never forget your wonderful<br></br> experiences, and
              show your friends how you have wandered the world.
            </h2>
            <Button url={"AppPage/cities"} text="START TRACKING NOW" />
          </section>
        </main>
      </div>
    </>
  );
}
