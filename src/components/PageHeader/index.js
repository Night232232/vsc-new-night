"use client";

import { Search } from "lucide-react";
import styles from "./PageHeader.module.scss";

function PageHeader({ title, onSearch, actions }) {
  return (
    <div className={styles.heading}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.actions}>
        {/* Search */}
        <div className={styles.searchWrapper}>
          <Search size={20} color="var(--primary-dark)" />
          {onSearch && (
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className={styles.searchInput}
              onChange={(e) => onSearch(e.target.value)}
            />
          )}
        </div>

        {/* Actions */}
        {actions && actions.map((action, i) => <div key={i}>{action}</div>)}
      </div>
    </div>
  );
}

export default PageHeader;
