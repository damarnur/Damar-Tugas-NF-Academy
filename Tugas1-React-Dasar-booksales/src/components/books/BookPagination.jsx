import React from "react";

export default function BookPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  // Generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first and last page
      // Show current page and neighbors
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if at edges
      if (currentPage <= 2) {
        endPage = 4;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3;
      }

      // Always add page 1
      pageNumbers.push(1);

      // Add dots if necessary
      if (startPage > 2) {
        pageNumbers.push("...");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add dots if necessary
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }

      // Always add last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Book pagination"
      className="mt-5 d-flex justify-content-center"
    >
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <i className="fa-solid fa-chevron-left small"></i>
          </button>
        </li>

        {getPageNumbers().map((page, index) => (
          <li
            key={index}
            className={`page-item ${page === currentPage ? "active" : ""} ${
              page === "..." ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => page !== "..." && onPageChange(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <i className="fa-solid fa-chevron-right small"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}
