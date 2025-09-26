import Link from "next/link";
import Image from "next/image";

// SCSS
import styles from "./AdminLogo.module.scss";

export default function AdminLogo() {
  return (
    <div className={styles.adminLogo}>
      <Link href="/dashboard-vsc" className={styles.adminLogoLink}>
        <Image
          src="/images/logo-admin.png"
          alt="Logo Admin VSC"
          width={24}
          height={24}
        />
        <span className={styles.adminLogoPrefix}>Admin</span>
        <span className={styles.adminLogoText}>VSC</span>
      </Link>
    </div>
  );
}
