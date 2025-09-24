import AdminLogo from "../AdminLogo";
import NavLink from "@/components/NavLink";
import { Home, Users, Trophy, ImageIcon } from "lucide-react";

import styles from "./navbar.module.scss";

const navbarItems = [
  {
    label: "Dasboard",
    path: "/dashboard-vsc",
    icon: <Home size={20} />,
  },
  {
    label: "Quản lý người dùng",
    path: "/dashboard-vsc/user-management",
    icon: <Users size={20} />,
  },
  {
    label: "Quản lý trận đấu",
    path: "/dashboard-vsc/match-management",
    icon: <Trophy size={20} />,
  },
  {
    label: "Quản lý Banner",
    path: "/dashboard-vsc/banner-management",
    icon: <ImageIcon size={20} />,
  },
];

function Navbar() {
  return (
    <aside className={styles.navbar}>
      <AdminLogo />
      <nav className={styles.navbarInner}>
        <ul className={styles.navbarList}>
          {navbarItems &&
            navbarItems.map((item) => (
              <li key={item.path}>
                <NavLink href={item.path} icon={item.icon}>
                  {item.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
