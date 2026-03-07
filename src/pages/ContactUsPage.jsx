import React, { useRef, useEffect, useState } from "react";
import "./ContactUsPage.css";
import emailjs from "@emailjs/browser";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const ContactUsPage = () => {
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });
  const form = useRef();

  useEffect(() => {
    emailjs.init("Gz2b6Jodlf8Q9I0wn");
  }, []);

  useEffect(() => {
    if (!toast.show) return;
    const timer = setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 4000);
    return () => clearTimeout(timer);
  }, [toast.show]);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form submitted, sending email...");

    emailjs
      .sendForm(
        "service_x0gepyf",
        "template_m5sdo4l",
        form.current,
        "Gz2b6Jodlf8Q9I0wn"
      )
      .then(() => {
        console.log("Email sent successfully!");
        setToast({ show: true, type: "success", message: "Message sent successfully!" });
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email send failed:", error);
        setToast({ show: true, type: "error", message: "Something went wrong!" });
      });
  };

  return (
    <>
    <Header/>
    <section className="contact-section">

      <div className="contact-container">

        <h2 className="contact-title">
          Let's Build Your Dream Website
        </h2>

        <p className="contact-subtitle">
          Tell us about your project and we will get back to you shortly.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <div className="form-row">

            <div className="form-group">
              <input type="text" name="first_name" required />
              <label>First Name</label>
            </div>

            <div className="form-group">
              <input type="text" name="last_name" required />
              <label>Last Name</label>
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <input type="email" name="email" required />
              <label>Email</label>
            </div>

            <div className="form-group">
              <input type="tel" name="phone" required />
              <label>Phone</label>
            </div>

          </div>

          <div className="form-group textarea">
            <textarea name="message" rows="5" required></textarea>
            <label>Message</label>
          </div>

          <div className="robot-check">
            <input type="checkbox" required />
            <span>I'm not a robot</span>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

        </form>

        {toast.show && (
          <div className={`toast ${toast.type}`}>
            <div className="toast-body">
              <span className="toast-icon" aria-hidden="true">
                {toast.type === "success" ? "✓" : "✕"}
              </span>
              <span className="toast-message">{toast.message}</span>
            </div>
            <button
              type="button"
              className="toast-close"
              onClick={() => setToast((prev) => ({ ...prev, show: false }))}
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        )}

      </div>

    </section>
    <Footer/>
    </>
  );
};

export default ContactUsPage;