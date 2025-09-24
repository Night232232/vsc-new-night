import { Settings, Bell } from "lucide-react";

// Component Parent
import Button from "@/components/Button";

// Component Child
import HeaderTitle from "../HeaderTitle";
import AccountInfo from "../AccountInfo";

// SCSS
import styles from "./AdminHeader.module.scss";

function AdminHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <HeaderTitle />

        {/* Info User */}
        <div className={styles.headerUser}>
          <Button variant="secondary">
            <Settings size={20} color={"var(--primary-dark)"} />
          </Button>
          <Button variant="secondary">
            <Bell size={20} color={"var(--primary-dark)"} />
          </Button>
          <AccountInfo />
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
