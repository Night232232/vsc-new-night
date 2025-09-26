"use client";

import { useEffect, useState } from "react";

// Icons
import { Home, Users, Trophy, ImageIcon } from "lucide-react";

import AdminLogo from "../AdminLogo";
import NavLink from "@/components/NavLink";

// SCSS
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
  const [shrinkedTablet, setShrinkedTablet] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsTablet(window.innerWidth <= 992); // lg breakpoint
      setShrinkedTablet(window.innerWidth <= 992); // mặc định thu gọn khi Tablet
    };
    checkSize();
    window.addEventListener("resize", checkSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <aside
      className={styles.navbar}
      {...(isTablet && {
        onMouseEnter: () => setShrinkedTablet(false),
        onMouseLeave: () => setShrinkedTablet(true),
      })}
    >
      <AdminLogo />
      <nav className={styles.navbarInner}>
        <ul className={styles.navbarList}>
          {navbarItems &&
            navbarItems.map((item) => (
              <li key={item.path}>
                <NavLink href={item.path} icon={item.icon} shrinkedTablet={shrinkedTablet}>
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
