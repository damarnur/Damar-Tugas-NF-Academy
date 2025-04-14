import { useState } from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";
import ContactHero from "../components/contact/ContactHero";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleFormSubmit = async (formData) => {
    setIsLoading(true);

    // Simulate API call
    try {
      // In a real app, you would send the form data to your backend here
      console.log("Form data submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormSubmitted(true);
      setIsLoading(false);

      // Reset form submission status after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);

      return {
        success: true,
        message: "Your message has been sent successfully!",
      };
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsLoading(false);
      return {
        success: false,
        message: "There was an error sending your message. Please try again.",
      };
    }
  };

  return (
    <div>
      <ContactHero />

      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <h2 className="mb-4 fw-bold">Get in Touch</h2>
              <p className="text-secondary mb-5">
                We'd love to hear from you! Fill out the form below and we'll
                get back to you as soon as possible.
              </p>

              <ContactForm
                onSubmit={handleFormSubmit}
                isLoading={isLoading}
                formSubmitted={formSubmitted}
              />
            </div>

            <div className="col-lg-4 ps-lg-5">
              <ContactInfo />
            </div>
          </div>

          <div className="mt-5 pt-4">
            <h3 className="mb-4 fw-bold">Our Location</h3>
            <ContactMap />
          </div>
        </div>
      </section>
    </div>
  );
}
