import Link from "next/link";

// SCSS
import styles from "./AdminLogo.module.scss";

// Icon

export default function AdminLogo() {
  return (
    <div className={styles.adminLogo}>
      <Link href="/dashboard-vsc">
        <span className={styles.adminLogoPrefix}>Admin</span>
        <span className={styles.adminLogoText}>VSC</span>
      </Link>
    </div>
  );
}
