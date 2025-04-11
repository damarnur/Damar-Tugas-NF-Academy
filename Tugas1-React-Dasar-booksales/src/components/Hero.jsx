import book from "../../public/books.jpg";

export default function Hero() {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 d-grid gap-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Discover Your Next Favorite Book
          </h1>
          <p className="lead">
            Discover our curated collection of must-read books — from
            bestselling titles that everyone’s talking about, to exciting new
            releases fresh off the press, and timeless literary classics that
            continue to inspire generations. Dive into stories that will
            captivate your imagination, stir your emotions, and expand your
            horizons.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >
              Buy Now
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Detail
            </button>
          </div>
        </div>
        {/* <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> */}
        <div className="col-lg-4 mb-4">
          <img className="rounded-lg-3" src={book} alt="" width="450" />
        </div>
      </div>
    </div>
  );
}
