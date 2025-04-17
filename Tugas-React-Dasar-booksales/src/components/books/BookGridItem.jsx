import React from "react";
import { Link } from "react-router-dom";

export default function BookGridItem({ book }) {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="position-relative" style={{ height: "280px" }}>
        <img
          src={book.image}
          alt={book.title}
          className="w-100 h-100 object-cover"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-light text-primary">{book.year}</span>
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
          <Link
            to={`/book/${book.id}`}
            className="btn btn-outline-primary rounded-pill me-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
