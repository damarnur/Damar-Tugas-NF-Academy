import React from "react";
import { Link } from "react-router-dom";

export default function BookGridItem({ book }) {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="position-relative" style={{ height: "280px" }}>
        <img
          src={book.cover}
          alt={book.title}
          className="w-100 h-100 object-cover"
          style={{ objectFit: "cover" }}
        />
        {book.isNew && (
          <div className="position-absolute top-0 end-0 bg-primary text-white m-3 py-1 px-2 rounded-pill">
            <small>New</small>
          </div>
        )}
      </div>
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-light text-primary">{book.category}</span>
          <div className="text-warning">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fa-${
                  i < Math.floor(book.rating) ? "solid" : "regular"
                } fa-star small`}
              ></i>
            ))}
            <span className="text-secondary ms-1 small">({book.reviews})</span>
          </div>
        </div>
        <h5 className="card-title fw-semibold mb-1">{book.title}</h5>
        <p className="text-secondary mb-3">by {book.author}</p>
        <p
          className="text-secondary small mb-3 line-clamp-2"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {book.description}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div>
            <span className="fs-5 fw-bold text-primary">
              ${book.price.toFixed(2)}
            </span>
            {book.originalPrice && (
              <del className="text-secondary ms-2 small">
                ${book.originalPrice.toFixed(2)}
              </del>
            )}
          </div>
          <Link
            to={`/book/${book.id}`}
            className="btn btn-primary btn-sm rounded-pill px-3"
          >
            <i className="fa-solid fa-cart-plus me-1"></i> Add
          </Link>
        </div>
      </div>
    </div>
  );
}
