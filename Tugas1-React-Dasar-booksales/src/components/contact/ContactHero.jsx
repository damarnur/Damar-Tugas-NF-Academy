export default function ContactHero() {
  return (
    <section className="bg-light py-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-5 fw-bold mb-4">Contact Us</h1>
            <p className="lead text-secondary mb-4">
              Get in touch with our team for any questions, feedback, or support
              needs. We're here to help you with your literary journey.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#contact-form" className="btn btn-primary px-4 py-2">
                Send Message
              </a>
              <a
                href="tel:+1234567890"
                className="btn btn-outline-primary px-4 py-2"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
