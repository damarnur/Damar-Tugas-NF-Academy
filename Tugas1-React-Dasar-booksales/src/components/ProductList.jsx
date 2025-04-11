import book1 from "../../public/book1.jpg";
import book2 from "../../public/book2.jpg";
import book3 from "../../public/book3.jpg";

export default function ProductList() {
  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="row mb-5 text-center">
          <div className="col-lg-8 mx-auto">
            <span className="text-primary fw-semibold mb-3 d-block">
              Curated Selection
            </span>
            <h2 className="display-5 fw-bold mb-4">Best Selling Books</h2>
            <p
              className="fs-5 text-secondary mb-5 lh-lg mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Explore the stories that have captured hearts and minds. Our
              bestselling collection brings together critically acclaimed titles
              and reader favorites.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-primary px-4 py-2">Browse All</button>
              <button className="btn btn-outline-secondary px-4 py-2">
                New Arrivals
              </button>
            </div>
          </div>
        </div>

        <div className="row g-5">
          {/* First row of books */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 h-100">
              <img
                src={book1}
                alt="Timeless Treasures"
                className="card-img-top rounded-4 shadow-sm"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body px-0 pt-4">
                <h3 className="card-title fw-semibold mb-3">
                  Timeless Treasures
                </h3>
                <p className="card-text text-secondary mb-4">
                  Rediscover the beauty of classic literature with this curated
                  collection of vintage masterpieces.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-link text-primary p-0 text-decoration-none">
                    Read more
                  </button>
                  <span className="text-secondary fs-sm">9 min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card border-0 h-100">
              <img
                src={book2}
                alt="Moments of Solitude"
                className="card-img-top rounded-4 shadow-sm"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body px-0 pt-4">
                <h3 className="card-title fw-semibold mb-3">
                  Moments of Solitude
                </h3>
                <p className="card-text text-secondary mb-4">
                  A book for the quiet soul. Perfect for cozy afternoons and
                  escaping into a world of thought.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-link text-primary p-0 text-decoration-none">
                    Read more
                  </button>
                  <span className="text-secondary fs-sm">9 min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card border-0 h-100">
              <img
                src={book3}
                alt="Tabletop Tales"
                className="card-img-top rounded-4 shadow-sm"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body px-0 pt-4">
                <h3 className="card-title fw-semibold mb-3">Tabletop Tales</h3>
                <p className="card-text text-secondary mb-4">
                  Let your imagination wander as you flip through pages filled
                  with intrigue and elegance.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-link text-primary p-0 text-decoration-none">
                    Read more
                  </button>
                  <span className="text-secondary fs-sm">9 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second row of featured books */}
          <div className="col-12 text-center mt-5 mb-5">
            <h3 className="fs-4 text-secondary fw-semibold mb-5">
              Recommended For You
            </h3>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card border-0 h-100">
              <img
                src={book2}
                alt="Whispers from the Past"
                className="card-img-top rounded-4 shadow-sm"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body px-0 pt-4">
                <h3 className="card-title fw-semibold mb-3">
                  Whispers from the Past
                </h3>
                <p className="card-text text-secondary mb-4">
                  Delve into a story steeped in history and emotion that lingers
                  long after the last page.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-link text-primary p-0 text-decoration-none">
                    Read more
                  </button>
                  <span className="text-secondary fs-sm">9 min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card border-0 h-100">
              <img
                src={book3}
                alt="Heart of the Reader"
                className="card-img-top rounded-4 shadow-sm"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body px-0 pt-4">
                <h3 className="card-title fw-semibold mb-3">
                  Heart of the Reader
                </h3>
                <p className="card-text text-secondary mb-4">
                  An emotional journey through love, loss, and everything in
                  between that speaks to every reader.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-link text-primary p-0 text-decoration-none">
                    Read more
                  </button>
                  <span className="text-secondary fs-sm">9 min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card border-0 h-100">
              <img
                src={book1}
                alt="Bound by Words"
                className="card-img-top rounded-4 shadow-sm"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body px-0 pt-4">
                <h3 className="card-title fw-semibold mb-3">Bound by Words</h3>
                <p className="card-text text-secondary mb-4">
                  Stories that connect generations and celebrate the power of
                  words to inspire and transform.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-link text-primary p-0 text-decoration-none">
                    Read more
                  </button>
                  <span className="text-secondary fs-sm">9 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
