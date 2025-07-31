"use client";
import React from "react";

// PUBLIC_INTERFACE
/**
 * Minimal footer for KAVIA AI website.
 */
const Footer = () => (
  <footer className="footer-root">
    <div className="footer-content">
      <div className="footer-logo">KAVIA AI</div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} KAVIA AI &ndash; All rights reserved.
      </div>
      <div className="footer-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="mailto:team@kavia.ai">Contact</a>
      </div>
    </div>
    <style jsx>{`
      .footer-root {
        background: #1a1a2e;
        padding: 2.7rem 0 1.2rem 0;
        color: #cacad1;
        font-size: 1.02rem;
        text-align: center;
      }
      .footer-content {
        max-width: 650px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        gap: 1.4rem;
        align-items: center;
        flex-wrap: wrap;
      }
      .footer-logo {
        font-family: "Montserrat", sans-serif;
        font-size: 1.12rem;
        font-weight: 700;
        color: #e94560;
      }
      .footer-copy {
        font-size: 0.97rem;
        opacity: 0.85;
      }
      .footer-links a {
        color: #cacad1;
        margin-left: 1.33rem;
        text-decoration: none;
        opacity: 0.9;
        transition: color 0.12s;
        font-weight: 500;
      }
      .footer-links a:hover {
        color: #e94560;
        opacity: 1;
      }
      .footer-links {
        min-width: 120px;
      }
      @media (max-width: 700px) {
        .footer-content {
          flex-direction: column;
          gap: 1.04rem;
        }
        .footer-links {
          margin-top: 0.08rem;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
