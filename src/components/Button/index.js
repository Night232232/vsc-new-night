import clsx from "clsx";
import styles from "./Button.module.scss";

export default function Button({
  children,
  variant = "primary", // primary, secondary, outline
  size = "md", // sm, md, lg
  as: Component = "button", // button, a, div
  className,
  ...props
}) {
  return (
    <Component
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
