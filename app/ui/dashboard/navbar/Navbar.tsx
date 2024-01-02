"use client";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} className={styles.svg} />
          <MdNotifications size={20} className={styles.svg} />
          <MdPublic size={20} className={styles.svg} />
        </div>
      </div>
    </div>
  );
}
