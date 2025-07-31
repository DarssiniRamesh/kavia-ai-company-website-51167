"use client";
import React from "react";

// PUBLIC_INTERFACE
/**
 * Call-to-action section near bottom; encourages conversion.
 */
const CTASection = () => (
  <section className="cta-section" id="contact">
    <div className="cta-wrapper">
      <h2>
        Ready to Transform Your Workflow <span>with AI?</span>
      </h2>
      <a className="cta-button" href="mailto:team@kavia.ai">
        Contact Us
      </a>
      <p className="cta-sub">
        Book a demo or drop your questions — our team will reply within 24 hours.
      </p>
    </div>
    <style jsx>{`
      .cta-section {
        background: linear-gradient(90deg, #e94560 0%, #f75882 100%);
        color: #fff;
        text-align: center;
        padding: 4.2rem 1.4rem 3.5rem 1.4rem;
      }
      .cta-wrapper {
        max-width: 650px;
        margin: 0 auto;
      }
      h2 {
        font-family: "Montserrat", sans-serif;
        font-size: 2.19rem;
        font-weight: 700;
        margin-bottom: 2.15rem;
        letter-spacing: 0.01em;
      }
      h2 span {
        color: #fffbe8;
      }
      .cta-button {
        display: inline-block;
        background: #fff;
        color: #e94560;
        font-size: 1.15rem;
        padding: 1rem 2.2rem;
        border-radius: 2.8rem;
        font-weight: 700;
        letter-spacing: 0.023em;
        margin-bottom: 1.3rem;
        margin-top: 0.8rem;
        text-decoration: none;
        transition: background 0.14s, color 0.14s;
        box-shadow: 0 2px 22px 0 #e9456056;
      }
      .cta-button:hover {
        background: #fffbe8;
        color: #b82c4b;
      }
      .cta-sub {
        color: #fffbe8;
        margin-top: 1.41rem;
        font-size: 1.02rem;
        opacity: 0.87;
      }
    `}</style>
  </section>
);

export default CTASection;
