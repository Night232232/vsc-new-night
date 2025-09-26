import styles from "./CustomForm.module.scss";

function FormField({ children }) {
  return <div className={styles.formField}>{children}</div>;
}

function FormLabel({ children, ...props }) {
  return (
    <label {...props} className={styles.label}>
      {children}
    </label>
  );
}

function FormSelect({ name, id, value, onChange, children, ...props }) {
  return (
    <div className={styles.selectWrapper}>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={styles.select}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

function FormInput({ type = "text", ...props }) {
  return <input type={type} {...props} className={styles.input} />;
}

function FormError({ children, ...props }) {
  return (
    <p className={styles.formError} {...props}>
      {children}
    </p>
  );
}

function ColorRedStar({ children, ...props }) {
  return (
    <span className={styles.colorRedStar} {...props}>
      {children}
    </span>
  );
}

export { FormField, FormLabel, FormInput, FormSelect, FormError, ColorRedStar };
