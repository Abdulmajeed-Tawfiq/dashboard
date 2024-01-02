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
      <div className={styles.note}>
        <p>
          <span>note:</span> this is just a Front-End Project, so the data
          isn&apos;t real and you can&apos;t edit or Delete users or product
          because their is no server in the project.
        </p>
        <p>
          the project is made just to showcase my skills on next.js and other
          Front-End technology.
        </p>
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
