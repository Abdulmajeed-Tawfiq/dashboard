import Link from "next/link";
import styles from "./ui/home/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Dashboard!</h1>
      <p className={styles.subtitle}>
        Manage your products, users, transactions, and settings.
      </p>
      <nav className={styles.nav}>
        <Link href="/dashboard" className={styles.navItem}>
          Go to Dashboeard
        </Link>
      </nav>
    </div>
  );
}
