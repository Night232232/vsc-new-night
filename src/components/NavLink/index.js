"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./NavLink.module.scss";

export default function NavLink({ href, icon, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? styles.active : styles.navLink}>
      {icon}
      {children}
    </Link>
  );
}
