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
          <h5 className="fw-semibold mb-1">Katalog Buku</h5>
          <p className="text-secondary m-0">{totalBooks} Buku Ditemukan</p>
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
        </div>
      </div>

      <form onSubmit={handleSubmit} className="position-relative mb-4">
        <input
          type="search"
          className="form-control form-control-lg ps-4 rounded-pill"
          placeholder="Cari Berdasarkan judul, penulis, atau kata kunci..."
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
    </div>
  );
}
