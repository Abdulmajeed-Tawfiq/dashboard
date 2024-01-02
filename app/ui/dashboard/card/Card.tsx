import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.text}>
        <span className={styles.title}>Total Users</span> <br />
        <span className={styles.number}>10.273</span>
        <span className={styles.detail}>12% more than pre week</span>
      </div>
    </div>
  );
}
