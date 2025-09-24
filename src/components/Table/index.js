"use client";
import { useState } from "react";
import styles from "./Table.module.scss";

export default function Table({ columns, data }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const allSelected = data.length > 0 && selectedIds.length === data.length;

  const handleCheckAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(data.map((item) => item.id));
    }
  };

  const handleCheckRow = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.checkboxCell}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleCheckAll}
              />
              <span className={styles.checkmark}></span>
            </label>
          </th>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className={styles.checkboxCell}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(row.id)}
                  onChange={() => handleCheckRow(row.id)}
                />
                <span className={styles.checkmark}></span>
              </label>
            </td>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
