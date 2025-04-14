import React from "react";
import BookGridItem from "./BookGridItem";
import BookListItem from "./BookListItem";
import BookPagination from "./BookPagination";

export default function BookList({
  books,
  viewMode,
  currentPage,
  totalPages,
  onPageChange,
  totalBooks,
}) {
  if (books.length === 0) {
    return (
      <div className="text-center py-5">
        <i className="fa-solid fa-book-open fa-3x text-secondary mb-3"></i>
        <h4 className="mb-2">No books found</h4>
        <p className="text-secondary">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div>
      {viewMode === "grid" ? (
        <div className="row g-4">
          {books.map((book) => (
            <div key={book.id} className="col-lg-4 col-md-6">
              <BookGridItem book={book} />
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex flex-column gap-4">
          {books.map((book) => (
            <BookListItem key={book.id} book={book} />
          ))}
        </div>
      )}

      {totalBooks > 0 && (
        <BookPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}
