import book1 from "../../public/book1.jpg";
import book2 from "../../public/book2.jpg";
import book3 from "../../public/book3.jpg";

export default function ProductList() {
  return (
    <div>
      <section className="text-center container">
        <div className="row pb-3">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Selling Book</h1>
            <p className="lead text-body-secondary">
              Explore the stories that have captured hearts and minds. Our
              bestselling collection brings together critically acclaimed
              titles, reader favorites, and chart-topping novels that you won’t
              want to miss. Whether you're looking for an inspiring journey, a
              thrilling adventure, or a moving tale, there's something here for
              every kind of reader. Start your next great read today.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">
                Views
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Other Book
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src={book1} alt="book 1" />
                <div className="card-body">
                  <h4 className="card-title text-start">Timeless Treasures</h4>
                  <p className="card-text text-start">
                    Rediscover the beauty of classic literature with this
                    curated collection of vintage masterpieces. Each page holds
                    stories that have stood the test of time.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={book2} alt="book 2" />
                <div className="card-body">
                  <h4 className="card-title text-start">Moments of Solitude</h4>
                  <p className="card-text text-start">
                    A book for the quiet soul. Perfect for cozy afternoons, this
                    novel invites you to escape into a world of thought, wonder,
                    and introspection.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={book3} alt="book 3" />
                <div className="card-body">
                  <h4 className="card-title text-start">Tabletop Tales</h4>
                  <p className="card-text text-start">
                    Let your imagination wander as you flip through pages filled
                    with intrigue, elegance, and timeless storytelling—all from
                    the comfort of your favorite corner.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={book2} alt="book 4" />
                <div className="card-body">
                  <h4 className="card-title text-start">
                    Whispers from the Past
                  </h4>
                  <p className="card-text text-start">
                    Delve into a story steeped in history and emotion. This
                    novel blends tradition and humanity in a powerful narrative
                    that lingers long after the last page.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={book3} alt="book 5" />
                <div className="card-body">
                  <h4 className="card-title text-start">Heart of the Reader</h4>
                  <p className="card-text text-start">
                    An emotional journey through love, loss, and everything in
                    between. This book speaks to the heart of every reader
                    searching for meaning.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={book1} alt="book 6" />
                <div className="card-body">
                  <h4 className="card-title text-start">Bound by Words</h4>
                  <p className="card-text text-start">
                    Stories that connect generations. This anthology is a
                    celebration of storytelling and the power of words to
                    inspire, comfort, and transform.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={book3} alt="book 7" />
                <div className="card-body">
                  <h4 className="card-title text-start">Evening Escapes</h4>
                  <p className="card-text text-start">
                    Unwind with a captivating tale that pulls you away from the
                    noise of everyday life. Ideal for night readers and dreamers
                    alike.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={book1} alt="book 8" />
                <div className="card-body">
                  <h4 className="card-title text-start">The Quiet Companion</h4>
                  <p className="card-text text-start">
                    A perfect companion for your coffee table or reading nook.
                    This book is for those who find joy in the simple act of
                    reading.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={book2} alt="book 9" />
                <div className="card-body">
                  <h4 className="card-title text-start">The Art of Story</h4>
                  <p className="card-text text-start">
                    A perfect companion for your coffee table or reading nook.
                    This book is for those who find joy in the simple act of
                    reading.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
