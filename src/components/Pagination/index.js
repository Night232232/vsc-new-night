"use client";

import { useState } from "react";
import ReactPaginate from "react-paginate";
import CustomSelect from "../CustomSelect";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import styles from "./Pagination.module.scss";

function Pagination({
  total, // tổng số record
  page, // trang hiện tại
  pageCount, // tổng số trang
  onPageChange,
  onPageSizeChange,
}) {
  const [pageSize, setPageSize] = useState(5);

  const handleChange = (e) => {
    const val = Number(e.target.value);
    setPageSize(val);
    if (typeof onPageSizeChange === "function") {
      onPageSizeChange(val);
    }
  };

  return (
    <div className={styles.paggingRow}>
      {/* Show Total Page */}
      <div className={styles.paggingShow}>
        <span className={styles.paggingShowText}>Show</span>

        <CustomSelect
          options={[
            { value: "5", label: "5" },
            { value: "10", label: "10" },
            { value: "20", label: "20" },
          ]}
          value={String(pageSize)}
          onChange={handleChange}
        />

        <span className={styles.paggingShowText}>of</span>
        <span className={styles.paggingShowText}>{total}</span>
        <span className={styles.paggingShowText}>results</span>
      </div>

      {/* Pagging */}
      <div className={styles.wrapper}>
        <button
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          className={styles.pageButton}
        >
          <ChevronsLeft size={16} />
        </button>

        <ReactPaginate
          breakLabel="..."
          nextLabel={<ChevronRight size={16} />}
          previousLabel={<ChevronLeft size={16} />}
          onPageChange={(event) => onPageChange(event.selected + 1)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          forcePage={page - 1}
          containerClassName={styles.pagination}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          previousClassName={styles.pageItem}
          previousLinkClassName={styles.pageLink}
          nextClassName={styles.pageItem}
          nextLinkClassName={styles.pageLink}
          breakClassName={styles.pageItem}
          breakLinkClassName={styles.break}
          activeClassName={styles.active}
          disabledClassName={styles.disabled}
          renderOnZeroPageCount={null}
        />

        <button
          onClick={() => onPageChange(pageCount)}
          disabled={page === pageCount}
          className={styles.pageButton}
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
