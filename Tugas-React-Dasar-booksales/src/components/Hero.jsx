import book from "/books.jpg";

export default function Hero() {
  return (
    <section className="py-5 mb-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="mb-5">
              <h1 className="display-3 fw-bold mb-4 lh-sm">
                Discover Your Next Favorite Book
              </h1>
              <p className="fs-5 text-secondary mb-5 lh-lg">
                Discover our curated collection of must-read books — from
                bestselling titles that everyone's talking about to exciting new
                releases and timeless classics that continue to inspire
                generations.
              </p>
              <div className="d-flex gap-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-5 py-3 fw-medium"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-5 py-3"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                className="img-fluid rounded-4 shadow-lg"
                src={book}
                alt="Stack of beautiful books"
                style={{ maxHeight: "600px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4 opacity-10"
                style={{ zIndex: -1, transform: "translate(-15px, 15px)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
