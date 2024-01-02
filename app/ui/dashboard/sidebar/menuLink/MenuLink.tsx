"use client";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function MenuLink({
  item,
}: {
  item: { title: string; path: string; icon: ReactNode };
}) {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
}
