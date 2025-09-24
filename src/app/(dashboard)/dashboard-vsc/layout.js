// Internal
import Navbar from "./components/Navbar";
import AdminHeader from "./components/AdminHeader";

// SCSS
import "@/app/global.scss";
import styles from "./Layout.module.scss";

export const metadata = {
  title: "Admin VSC",
  description: "Khu vực quản trị",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <div className={styles.wrapper}>
          {/* Navbar */}
          <Navbar />

          {/* Content */}
          <section className={styles.content}>
            <AdminHeader />

            <main className={styles.mainContent}>{children}</main>
          </section>
        </div>
      </body>
    </html>
  );
}
