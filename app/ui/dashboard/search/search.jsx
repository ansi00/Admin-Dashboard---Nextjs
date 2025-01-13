import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

export default function Search({ placeHolder }) {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeHolder} className={styles.input} />
    </div>
  );
}
