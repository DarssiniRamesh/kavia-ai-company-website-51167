"use client";
import React from "react";

// PUBLIC_INTERFACE
/**
 * Card for a single feature, used in the feature grid.
 */
const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <style jsx>{`
      .feature-card {
        background: #16213e;
        color: #fff;
        padding: 2.3rem 1.3rem 2.1rem 1.3rem;
        border-radius: 2rem;
        width: 295px;
        box-shadow: 0 2px 28px 0 #18283c17;
        text-align: center;
        min-height: 238px;
        transition: transform 0.12s;
      }
      .feature-card:hover {
        transform: translateY(-6px) scale(1.012);
      }
      .feature-icon {
        font-size: 2.7rem;
        margin-bottom: 1.12rem;
      }
      h3 {
        margin: 0 0 1.01rem 0;
        font-size: 1.38rem;
        font-weight: 700;
        letter-spacing: 0.012em;
        font-family: "Montserrat", sans-serif;
      }
      p {
        color: #ebe7f4;
        margin: 0;
        font-size: 1.06rem;
        line-height: 1.61;
        font-weight: 400;
      }
    `}</style>
  </div>
);

export default FeatureCard;
