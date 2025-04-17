import React from "react";
import { Link } from "react-router-dom";

export default function BookListItem({ book }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="row g-0">
        <div className="col-md-3 col-lg-2">
          <div className="position-relative h-100">
            <img
              src={book.image}
              alt={book.title}
              className="img-fluid h-100"
              style={{ objectFit: "cover", maxHeight: "200px", width: "100%" }}
            />
          </div>
        </div>
        <div className="col-md-9 col-lg-10">
          <div className="card-body p-4 h-100 d-flex flex-column">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-light text-primary">{book.year}</span>
            </div>

            <h4 className="card-title fw-semibold mb-1">{book.title}</h4>
            <p className="text-secondary mb-2">by {book.author}</p>

            <p className="text-secondary mb-3">{book.description}</p>

            <div className="d-flex justify-content-between align-items-center mt-auto">
              <div>
                <Link
                  to={`/book/${book.id}`}
                  className="btn btn-outline-primary rounded-pill me-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
