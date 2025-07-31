"use client";
import React from "react";

// PUBLIC_INTERFACE
/**
 * Navigation bar for KAVIA AI website.
 */
const Navbar = () => (
  <nav className="nav-root">
    <div className="nav-content">
      <div className="nav-logo">KAVIA AI</div>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    <style jsx>{`
      .nav-root {
        width: 100%;
        background: #1a1a2e;
        color: #fff;
        padding: 0.6rem 0;
        box-shadow: 0 1px 8px 0 rgba(24, 40, 60, 0.045);
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .nav-content {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .nav-logo {
        font-size: 2rem;
        font-weight: 700;
        color: #e94560;
        letter-spacing: 0.06em;
        font-family: "Montserrat", sans-serif;
      }
      .nav-links a {
        color: #fff;
        text-decoration: none;
        margin-left: 2.3rem;
        font-size: 1.09rem;
        font-weight: 500;
        opacity: 0.9;
        transition: color 0.14s;
      }
      .nav-links a:hover {
        color: #e94560;
        opacity: 1;
      }
      @media (max-width: 700px) {
        .nav-content {
          flex-direction: column;
          gap: 0.7rem;
        }
        .nav-links {
          margin-top: 0.4rem;
        }
      }
    `}</style>
  </nav>
);

export default Navbar;
