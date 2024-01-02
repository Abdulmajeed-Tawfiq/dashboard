import { ReactNode } from "react";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";
import styles from "../ui/dashboard/dashboard.module.css";
import Footer from "../ui/dashboard/footer/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <aside className={styles.menu}>
        <Sidebar />
      </aside>
      <div className={styles.content}>
        <nav>
          <Navbar />
        </nav>
        {children}
        <Footer />
      </div>
    </div>
  );
}
