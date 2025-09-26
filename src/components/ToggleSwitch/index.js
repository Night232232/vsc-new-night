"use client";

// SCSS
import styles from "./ToggleSwitch.module.scss";

function ToggleSwitch({ checked, onChange }) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.slider}></span>
    </label>
  );
}

export default ToggleSwitch;
