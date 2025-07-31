"use client";
import React from "react";

// PUBLIC_INTERFACE
/**
 * Above-the-fold hero section: main headline, subtitle, CTA.
 */
const Hero = () => (
  <section className="hero-root">
    <div className="hero-content">
      <h1>
        AI-Powered <span>KAVIA AI</span>
        <br /> For Smarter Business
      </h1>
      <p>
        Unlock unparalleled productivity, insights, and automation for your entire team.<br />
        Experience the future of work with KAVIA AI now.
      </p>
      <a className="hero-cta" href="#contact">
        Get Started
      </a>
    </div>
    <div className="hero-bg" />
    <style jsx>{`
      .hero-root {
        position: relative;
        background: #16213e;
        color: #fff;
        min-height: 64vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .hero-content {
        z-index: 2;
        position: relative;
        padding: 5.2rem 1.3rem 3.2rem 1.3rem;
        max-width: 680px;
        text-align: center;
      }
      .hero-content h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 2.75rem;
        line-height: 1.17;
        font-weight: 800;
        margin: 0;
        margin-bottom: 1.13rem;
        letter-spacing: 0.02em;
      }
      .hero-content h1 span {
        color: #e94560;
      }
      .hero-content p {
        margin: 0 0 2.1rem 0;
        font-size: 1.25rem;
        line-height: 1.6;
        color: #eeeeee;
        font-weight: 400;
      }
      .hero-cta {
        padding: 0.9rem 2.6rem;
        font-size: 1.17rem;
        border-radius: 2.4rem;
        background: #e94560;
        color: #fff;
        font-weight: 700;
        text-decoration: none;
        box-shadow: 0 4px 28px 0 #e9456066;
        transition: background 0.14s;
        letter-spacing: 0.02em;
      }
      .hero-cta:hover {
        background: #b82c4b;
      }
      .hero-bg {
        position: absolute;
        inset: 0;
        z-index: 1;
        background: radial-gradient(circle 620px at 56% 85%, #e9456099 0%, #16213e 78%);
        opacity: 0.46;
      }
      @media (max-width: 600px) {
        .hero-content h1 {
          font-size: 2.1rem;
        }
        .hero-content {
          padding-top: 3rem;
          padding-bottom: 2.1rem;
        }
      }
    `}</style>
  </section>
);

export default Hero;
