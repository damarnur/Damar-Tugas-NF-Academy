import React from "react";
import { Link } from "react-router-dom";

export default function BookListItem({ book }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="row g-0">
        <div className="col-md-3 col-lg-2">
          <div className="position-relative h-100">
            <img
              src={book.cover}
              alt={book.title}
              className="img-fluid h-100"
              style={{ objectFit: "cover", maxHeight: "200px", width: "100%" }}
            />
            {book.isNew && (
              <div className="position-absolute top-0 end-0 bg-primary text-white m-2 py-1 px-2 rounded-pill">
                <small>New</small>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-9 col-lg-10">
          <div className="card-body p-4 h-100 d-flex flex-column">
            <div className="d-flex justify-content-between mb-2">
              <span className="badge bg-light text-primary">
                {book.category}
              </span>
              <div className="text-warning">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa-${
                      i < Math.floor(book.rating) ? "solid" : "regular"
                    } fa-star`}
                  ></i>
                ))}
                <span className="text-secondary ms-1">({book.reviews})</span>
              </div>
            </div>

            <h4 className="card-title fw-semibold mb-1">{book.title}</h4>
            <p className="text-secondary mb-2">by {book.author}</p>

            <p className="text-secondary mb-3">{book.description}</p>

            <div className="d-flex justify-content-between align-items-center mt-auto">
              <div>
                <span className="fs-5 fw-bold text-primary">
                  ${book.price.toFixed(2)}
                </span>
                {book.originalPrice && (
                  <del className="text-secondary ms-2">
                    ${book.originalPrice.toFixed(2)}
                  </del>
                )}
              </div>
              <div>
                <Link
                  to={`/book/${book.id}`}
                  className="btn btn-outline-primary rounded-pill me-2"
                >
                  View Details
                </Link>
                <button className="btn btn-primary rounded-pill">
                  <i className="fa-solid fa-cart-plus me-1"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
