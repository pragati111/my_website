import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "How much does it cost to build a website?",
    answer:
      "The cost depends on the type of website, number of pages, and features you need. We offer affordable plans based on your requirements.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 1–3 weeks depending on the complexity and content.",
  },
  {
    question: "Do I need technical knowledge to manage my website?",
    answer:
      "No. We design websites that are easy to manage. We can also guide you on how to update content.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes. All our websites are fully responsive and work smoothly on mobiles, tablets, and desktops.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. If you already have a website, we can redesign it to make it modern, faster, and more professional.",
  },
  {
    question: "Will my website be custom designed?",
    answer:
      "Yes. We create unique and professional designs based on your brand and business needs.",
  },
  {
    question: "Can I request changes during the design process?",
    answer:
      "Yes. We include revision rounds so you can request changes before the website is finalized.",
  },
  {
    question: "Do you provide support after the website is completed?",
    answer:
      "Yes. We provide support to help you with any issues after the website is launched.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <h2 className="faq-title">
        Frequently Asked <span>Questions</span>
      </h2>

      <p className="faq-subtitle">
        Everything you need to know before getting your website built.
      </p>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}>
               +
              </span>
            </div>

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default FAQ;