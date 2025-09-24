"use client";

import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export default function Pagination({ page, pageCount, onPageChange }) {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => onPageChange(1)}
        disabled={page === 1}
        className={styles.pageLink}
      >
        ≪
      </button>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
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
        className={styles.pageLink}
      >
        ≫
      </button>
    </div>
  );
}
