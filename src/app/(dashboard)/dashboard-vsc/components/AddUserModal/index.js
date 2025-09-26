"use client";

import { useForm } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";

// Components
import ModalWrapper from "@/components/ModalWrapper";
import Button from "@/components/Button";
import {
  FormField,
  FormLabel,
  FormInput,
  FormSelect,
  FormError,
  ColorRedStar,
} from "@/components/CustomForm";

// SCSS
import styles from "./AddUserModal.module.scss";

function AddUserModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // TODO: Gọi API tạo user ở đây
    reset(); // reset form sau khi submit
  };

  const actions = <Button type="submit">Lưu</Button>;

  return (
    <ModalWrapper trigger={<Button>Thêm người dùng</Button>} title="Thêm mới">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormField>
          <FormLabel htmlFor="addUsername">
            Username <ColorRedStar>✴︎</ColorRedStar>
          </FormLabel>
          <FormInput
            id="addUsername"
            {...register("username", { required: "Username là bắt buộc" })}
          />
          {errors.username && <FormError>{errors.username.message}</FormError>}
        </FormField>

        <FormField>
          <FormLabel htmlFor="addPassword">
            Password <ColorRedStar>✴︎</ColorRedStar>
          </FormLabel>
          <FormInput
            id="addPassword"
            type="password"
            {...register("password", { required: "Password là bắt buộc" })}
          />
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </FormField>

        <FormField>
          <FormLabel htmlFor="addDisplayName">Tên hiển thị</FormLabel>
          <FormInput id="addDisplayName" type="text" />
        </FormField>

        <FormField>
          <FormLabel htmlFor="addRole">
            Vai trò <ColorRedStar>✴︎</ColorRedStar>
          </FormLabel>
          <FormSelect
            id="addRole"
            {...register("role", { required: "Chọn vai trò" })}
          >
            <option value="">-- Chọn vai trò --</option>
            <option value="admin">Admin</option>
            <option value="product">Product</option>
            <option value="qc">QC</option>
            <option value="mkt">MKT</option>
          </FormSelect>

          {errors.role && <FormError>{errors.role.message}</FormError>}
        </FormField>

        <div className={styles.actionsWrapper}>
          <Dialog.Close asChild>
            <Button
              size="small"
              variant="secondary"
              className={styles.cancleBtn}
              onClick={() => reset()}
            >
              Đóng
            </Button>
          </Dialog.Close>
          <Button type="submit" size="small" className={styles.submitBtn}>
            Lưu
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default AddUserModal;
