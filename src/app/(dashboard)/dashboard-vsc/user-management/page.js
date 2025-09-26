"use client";

import { useState } from "react";

// Components
import Wrapper from "@/components/Wrapper";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import AddUserModal from "../components/AddUserModal";

// SCSS
import styles from "./UserManagement.module.scss";

function AdminUserManagement() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [data, setData] = useState([
    {
      id: 1,
      username: "Wiwo",
      password: "wiwoteam",
      role: "Product",
      created: "24/09/2025 | 08:53",
      displayName: "Win",
      active: true,
    },
    {
      id: 2,
      username: "Namo",
      password: "manophopho",
      role: "BLV",
      created: "24/09/2025 | 08:53",
      displayName: "Win",
      active: false,
    },
    {
      id: 3,
      username: "Hieu",
      password: "hieuteam",
      role: "QC",
      created: "24/09/2025 | 09:10",
      displayName: "Hieu",
      active: false,
    },
    {
      id: 4,
      username: "Lan",
      password: "lanteam",
      role: "MKT",
      created: "24/09/2025 | 09:25",
      displayName: "Lan",
      active: false,
    },
    {
      id: 5,
      username: "An",
      password: "anteam",
      role: "BLV",
      created: "24/09/2025 | 09:45",
      displayName: "An",
      active: true,
    },
    {
      id: 6,
      username: "Binh",
      password: "binhteam",
      role: "Product",
      created: "24/09/2025 | 10:05",
      displayName: "Binh",
      active: false,
    },
    {
      id: 7,
      username: "Cuong",
      password: "cuongteam",
      role: "QC",
      created: "24/09/2025 | 10:25",
      displayName: "Cuong",
      active: false,
    },
    {
      id: 8,
      username: "Duyen",
      password: "duyenteam",
      role: "MKT",
      created: "24/09/2025 | 10:45",
      displayName: "Duyen",
      active: true,
    },
    {
      id: 9,
      username: "Hanh",
      password: "hanhteam",
      role: "BLV",
      created: "24/09/2025 | 11:05",
      displayName: "Hanh",
      active: true,
    },
    {
      id: 10,
      username: "Khanh",
      password: "khanhteam",
      role: "Product",
      created: "24/09/2025 | 11:25",
      displayName: "Khanh",
      active: true,
    },
    {
      id: 11,
      username: "Wiwo",
      password: "wiwoteam",
      role: "Product",
      created: "24/09/2025 | 08:53",
      displayName: "Win",
      active: false,
    },
    {
      id: 12,
      username: "Namo",
      password: "manophopho",
      role: "BLV",
      created: "24/09/2025 | 08:53",
      displayName: "Win",
      active: false,
    },
    {
      id: 13,
      username: "Hieu",
      password: "hieuteam",
      role: "QC",
      created: "24/09/2025 | 09:10",
      displayName: "Hieu",
      active: true,
    },
    {
      id: 14,
      username: "Lan",
      password: "lanteam",
      role: "MKT",
      created: "24/09/2025 | 09:25",
      displayName: "Lan",
      active: true,
    },
    {
      id: 15,
      username: "An",
      password: "anteam",
      role: "BLV",
      created: "24/09/2025 | 09:45",
      displayName: "An",
      active: true,
    },
    {
      id: 16,
      username: "Binh",
      password: "binhteam",
      role: "Product",
      created: "24/09/2025 | 10:05",
      displayName: "Binh",
      active: true,
    },
    {
      id: 17,
      username: "Cuong",
      password: "cuongteam",
      role: "QC",
      created: "24/09/2025 | 10:25",
      displayName: "Cuong",
      active: true,
    },
    {
      id: 18,
      username: "Duyen",
      password: "duyenteam",
      role: "MKT",
      created: "24/09/2025 | 10:45",
      displayName: "Duyen",
      active: false,
    },
    {
      id: 19,
      username: "Hanh",
      password: "hanhteam",
      role: "BLV",
      created: "24/09/2025 | 11:05",
      displayName: "Hanh",
      active: false,
    },
    {
      id: 20,
      username: "Khanh",
      password: "khanhteam",
      role: "Product",
      created: "24/09/2025 | 11:25",
      displayName: "Khanh",
      active: false,
    },
  ]);

  const columns = [
    { key: "id", label: "ID" },
    { key: "username", label: "User name" },
    { key: "password", label: "Password" },
    { key: "role", label: "Role" },
    { key: "created", label: "Day created" },
    { key: "displayName", label: "Tên hiển thị" },
    { key: "action", label: "Action" },
  ];

  // Handlers cho cột action
  const handleToggle = (id) => {
    setData((prev) =>
      prev.map((u) => (u.id === id ? { ...u, active: !u.active } : u))
    );
  };

  const handleEdit = (user) => {
    console.log("Edit user:", user);
    // có thể mở modal chỉnh sửa ở đây
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((u) => u.id !== id));
  };

  const total = data.length;

  // Tính toán dữ liệu cho trang hiện tại
  const pageCount = Math.ceil(data.length / pageSize);
  const currentItems = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Wrapper>
      <PageHeader
        title="Danh sách người dùng"
        onSearch={(q) => console.log("Search:", q)}
        actions={[
          // <Button variant="secondary" key="filter">
          //   <Filter size={20} color="var(--primary-dark)" />
          // </Button>,
          <AddUserModal />,
        ]}
      />
      <Table
        columns={columns}
        data={currentItems}
        onToggle={handleToggle}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Pagination
        total={total}
        page={page}
        pageCount={pageCount}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </Wrapper>
  );
}

export default AdminUserManagement;
