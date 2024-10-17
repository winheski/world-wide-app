import { useState } from "react";
import styles from "./CityList.module.css";
import { useEffect } from "react";
export default function CityList() {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    try {
      fetch("http://localhost:9000/cities")
        .then((res) => res.json())
        .then((data) => setCities(data));
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  function dateFormatter(date) {
    const data = new Date(date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return `(${data.toLocaleDateString("en-US", options)})`;
  }
  return (
    <>
      <section className={styles.citylist}>
        <ul>
          {cities.map((city) => {
            return (
              <li key={city.id}>
                <div className={styles.cityinfo}>
                  <span>{`${city.emoji} ${city.cityName}`}</span>
                  <span className={styles.citydate}>
                    {dateFormatter(city.date)}
                  </span>
                </div>
                <div className={styles.buttoncontainer}>
                  <button className={styles.button}> &#10006;</button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <footer className={styles.citylistfooter}>
        © Copyright 2024 by WorldWise Inc.
      </footer>
    </>
  );
}
