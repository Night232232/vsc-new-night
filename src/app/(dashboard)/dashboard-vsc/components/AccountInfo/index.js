import Image from "next/image";

// SCSS
import styles from "./AccountInfo.module.scss";

function AccountInfo({ avatarSrc, fullName, role }) {
  return (
    <div className={styles.accountInfo}>
      <div className={styles.avatar}>
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={`${fullName} avatar`}
            width={40}
            height={40}
            className={styles.avatarImg}
          />
        ) : (
          <div className={styles.avatarPlaceholder}>👤</div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{fullName || "Full Name"}</div>
        <div className={styles.role}>{role || "Role"}</div>
      </div>
    </div>
  );
}

export default AccountInfo;
