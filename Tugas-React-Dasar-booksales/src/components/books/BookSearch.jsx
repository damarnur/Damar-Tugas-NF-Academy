import React, { useState } from "react";

export default function BookSearch({
  onSearch,
  viewMode,
  onViewModeChange,
  totalBooks,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="mb-4">
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
        <div className="mb-3 mb-md-0">
          <h5 className="fw-semibold mb-1">Browse Books</h5>
          <p className="text-secondary m-0">{totalBooks} books found</p>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div
            className="btn-group me-2"
            role="group"
            aria-label="View options"
          >
            <button
              type="button"
              className={`btn btn-sm ${
                viewMode === "grid" ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => onViewModeChange("grid")}
            >
              <i className="fa-solid fa-grip me-1"></i> Grid
            </button>
            <button
              type="button"
              className={`btn btn-sm ${
                viewMode === "list" ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => onViewModeChange("list")}
            >
              <i className="fa-solid fa-list me-1"></i> List
            </button>
          </div>

          <select
            className="form-select form-select-sm"
            style={{ width: "auto" }}
          >
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="position-relative mb-4">
        <input
          type="search"
          className="form-control form-control-lg ps-4 rounded-pill"
          placeholder="Search by title, author or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary position-absolute end-0 top-0 bottom-0 rounded-pill px-4"
          style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
        >
          <i className="fa-solid fa-search"></i>
        </button>
      </form>

      <div className="d-flex flex-wrap gap-2 mb-4">
        <span className="fw-medium me-2">Popular:</span>
        {["Fiction", "Business", "Self-Help", "Fantasy", "Biography"].map(
          (tag) => (
            <button
              key={tag}
              className="btn btn-sm btn-outline-secondary rounded-pill"
              onClick={() => onSearch(tag)}
            >
              {tag}
            </button>
          )
        )}
      </div>
    </div>
  );
}
