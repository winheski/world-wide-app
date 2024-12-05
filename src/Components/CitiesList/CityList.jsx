import styles from "./CityList.module.css";

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
export default function CityList({ cities, isLoading }) {
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
