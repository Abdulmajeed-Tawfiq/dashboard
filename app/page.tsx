import Link from "next/link";
import styles from "./ui/home/home.module.css";
import Footer from "./ui/dashboard/footer/footer";

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
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
