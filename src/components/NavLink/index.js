"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./NavLink.module.scss";

export default function NavLink({ href, icon, children, shrinkedTablet }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? styles.active : styles.navLink} ${
        shrinkedTablet ? styles.shrinkedTablet : ""
      }`}
    >
      {icon}
      <span className={styles.textItem}>{children}</span>
    </Link>
  );
}
