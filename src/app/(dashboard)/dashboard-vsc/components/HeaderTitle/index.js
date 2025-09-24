"use client";

import { usePathname } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

// SCSS
import styles from "./HeaderTitle.module.scss";

// Map segment => label hiển thị
const PATH_LABELS = {
  "dashboard-vsc": "Dashboard",
  "user-management": "Quản lý người dùng",
  "match-management": "Quản lý trận đấu",
  "banner-management": "Quản lý Banner",
};

function HeaderTitle() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const lastSegment = segments[segments.length - 1];
  const pageTitle = lastSegment
    ? PATH_LABELS[lastSegment] ||
      lastSegment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Dashboard";

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{pageTitle}</h2>
      <Breadcrumb />
    </div>
  );
}

export default HeaderTitle;
