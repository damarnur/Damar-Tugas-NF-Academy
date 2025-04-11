import React from "react";

export default function BookFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4">
      <h5 className="mb-4 fw-semibold">Categories</h5>

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

      <h5 className="mb-3 fw-semibold">Price Range</h5>
      <div className="mb-4">
        <input
          type="range"
          className="form-range"
          min="0"
          max="100"
          id="priceRange"
        />
        <div className="d-flex justify-content-between">
          <span className="text-secondary small">$0</span>
          <span className="text-secondary small">$100</span>
        </div>
      </div>

      <h5 className="mb-3 fw-semibold">Ratings</h5>
      <div className="d-flex flex-column gap-2">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id={`rating-${star}`}
            />
            <label
              className="form-check-label text-secondary"
              htmlFor={`rating-${star}`}
            >
              {Array(star)
                .fill()
                .map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-warning me-1"></i>
                ))}
              {Array(5 - star)
                .fill()
                .map((_, i) => (
                  <i
                    key={i}
                    className="fa-regular fa-star text-warning me-1"
                  ></i>
                ))}
              <span className="ms-1">& above</span>
            </label>
          </div>
        ))}
      </div>

      <hr className="my-4" />

      <button className="btn btn-primary w-100">Apply Filters</button>
      <button className="btn btn-outline-secondary w-100 mt-2">Reset</button>
    </div>
  );
}
