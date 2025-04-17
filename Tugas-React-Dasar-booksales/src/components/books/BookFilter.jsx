import React from "react";

export default function BookFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4">
      <h5 className="mb-4 fw-semibold">Tahun Terbit</h5>

      <div className="d-flex flex-column gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`btn text-start px-3 py-2 rounded-3 ${
              activeCategory === category
                ? "btn-primary"
                : "btn-outline-light text-secondary"
            }`}
          >
            {category}
            {activeCategory === category && (
              <i className="fa-solid fa-check ms-2"></i>
            )}
          </button>
        ))}
      </div>

      <hr className="my-4" />

      <button className="btn btn-primary w-100">Apply Filters</button>
      <button className="btn btn-outline-secondary w-100 mt-2">Reset</button>
    </div>
  );
}
