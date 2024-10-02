import { Link } from "react-router-dom";
import styles from "./Button.module.css";
export default function Button({ url, text }) {
  return (
    <div className={styles.customButton}>
      <Link to={url}>{text}</Link>
    </div>
  );
}
