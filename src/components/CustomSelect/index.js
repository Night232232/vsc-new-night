import { ChevronDown } from "lucide-react";

import styles from "./CustomSelect.module.scss";

function CustomSelect({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  icon = <ChevronDown size={16} />,
}) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <select className={styles.select} value={value} onChange={onChange}>
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className={styles.icon}>{icon}</span>
    </div>
  );
}

export default CustomSelect;

// USE
{/* <CustomSelect
  options={[
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
  ]}
  value="10"
  onChange={handleChange}
/>; */}
