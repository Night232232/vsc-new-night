"use client";

import * as Dialog from "@radix-ui/react-dialog";

// Icons
import { X } from "lucide-react";

// SCSS
import styles from "./ModalWrapper.module.scss";

function ModalWrapper({
  trigger, // Nút hoặc component để mở modal
  title, // Tiêu đề modal
  description, // Mô tả modal
  children, // Nội dung động (form, text, button…)
  actions, // Khu vực button ở cuối modal
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.content}
          aria-describedby={description ? undefined : undefined}
        >
          {title && (
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          )}
          {description && (
            <Dialog.Description className={styles.description}>
              {description}
            </Dialog.Description>
          )}

          <div className={styles.body}>{children}</div>

          {actions && <div className={styles.actions}>{actions}</div>}

          <Dialog.Close asChild>
            <button className={styles.closeBtn} aria-label="Close">
              <X size={20} color="var(--grey-dark)" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ModalWrapper;
