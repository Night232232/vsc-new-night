// SCSS
import "@/app/global.scss";
// import styles from "./Layout.module.scss";

export const metadata = {
  title: "Vuasanco",
  description: "Trang chủ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
