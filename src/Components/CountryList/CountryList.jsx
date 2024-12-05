import styles from "./CountryList.module.css";
export default function CountryList({ countries, isLoading }) {
  return (
    <section className={styles.countrylist}>
      <ul>
        {countries.map((country) => {
          return (
            <li key={country.id}>
              <div className={styles.countryinfo}>
                <span>{`${country.emoji} ${country.country}`}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
