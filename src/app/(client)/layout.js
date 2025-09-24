import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Website VSC",
  description: "Trang chủ người dùng",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        {/* Navbar dùng cho toàn bộ trang */}
        <header style={{ padding: "10px", background: "#f2f2f2" }}>
          <nav>
            <Link href="/">Home</Link> |{" "}
            <Link href="/contact">Contact</Link> |{" "}
            <Link href="/dashboard-vsc">Dashboard</Link>
          </nav>
        </header>

        {/* Nội dung chính của từng page */}
        <main style={{ minHeight: "70vh" }}>{children}</main>

        {/* Footer dùng chung */}
        <footer style={{ padding: "10px", background: "#f2f2f2" }}>
          <p>© 2025 VSC. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
