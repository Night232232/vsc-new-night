"use client";

// Icons
import { Search } from "lucide-react";

// SCSS
import styles from "./PageHeader.module.scss";

function PageHeader({ title, onSearch, actions }) {
  return (
    <div className={styles.heading}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.actions}>
        {/* Search */}
        <div className={styles.searchWrapper}>
          {onSearch && (
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className={styles.searchInput}
              onChange={(e) => onSearch(e.target.value)}
            />
          )}
          <button className={styles.searchBtn}>
            <Search size={20} color="#fff" />
          </button>
        </div>

        {/* Actions */}
        {actions && actions.map((action, i) => <div key={i}>{action}</div>)}
      </div>
    </div>
  );
}

export default PageHeader;
