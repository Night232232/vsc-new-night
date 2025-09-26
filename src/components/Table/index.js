"use client";

import { Edit, Trash2 } from "lucide-react";
import ToggleSwitch from "../ToggleSwitch";

// SCSS
import styles from "./Table.module.scss";
import Button from "../Button";

function Table({ columns, data, onToggle, onEdit, onDelete }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => {
                if (col.key === "action") {
                  return (
                    <td key={col.key} className={styles.actionCell}>
                      <div className={styles.actionRow}>
                        <ToggleSwitch
                          checked={row.active}
                          onChange={() => onToggle(row.id)}
                        />
                        <Button variant="icon" onClick={() => onEdit(row)}>
                          <Edit size={20} color="var(--primary-dark)" />
                        </Button>
                        <Button variant="icon" onClick={() => onDelete(row.id)}>
                          <Trash2 size={20} color="var(--red-color)" />
                        </Button>
                      </div>
                    </td>
                  );
                }
                return <td key={col.key}>{row[col.key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
