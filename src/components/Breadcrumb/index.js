"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// SCSS
import styles from "./Breadcrumb.module.scss";

// Map segment => label hiển thị
const PATH_LABELS = {
  "dashboard-vsc": "Dashboard",
  "user-management": "Quản lý người dùng",
  "match-management": "Quản lý trận đấu",
  "banner-management": "Quản lý Banner",
};

function Breadcrumb({ items }) {
  const pathname = usePathname();

  const crumbs =
    items ||
    pathname
      .split("/")
      .filter(Boolean)
      .map((seg, idx, arr) => ({
        label:
          PATH_LABELS[seg] ||
          seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        href:
          idx < arr.length - 1
            ? "/" + arr.slice(0, idx + 1).join("/")
            : undefined,
      }));

  return (
    <ul className={styles.breadcrumb}>
      {crumbs.map((item, idx) => (
        <li key={idx}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumb;
