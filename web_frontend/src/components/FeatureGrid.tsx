"use client";
import React from "react";
import FeatureCard from "./FeatureCard";

// PUBLIC_INTERFACE
/**
 * Section showing three main features in a horizontal grid (with cards).
 */
const featureList = [
  {
    icon: "🤖",
    title: "Smart Q&A",
    desc: "Instant, precise answers to all team questions using your company data and docs.",
  },
  {
    icon: "🔒",
    title: "Secure AI Engine",
    desc: "Enterprise-grade privacy, role-based access, and knowledge boundaries ensured.",
  },
  {
    icon: "⚡",
    title: "Automation Hub",
    desc: "Automate tasks and notifications with easy-to-configure AI-driven workflows.",
  },
];

const FeatureGrid = () => (
  <section className="feature-grid-root" id="features">
    <div className="feature-grid">
      {featureList.map((f) => (
        <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
      ))}
    </div>
    <style jsx>{`
      .feature-grid-root {
        background: #fff;
        padding: 2.3rem 0 2.9rem 0;
      }
      .feature-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.8rem;
        max-width: 950px;
        margin: 0 auto;
      }
      @media (max-width: 900px) {
        .feature-grid {
          flex-direction: column;
          align-items: center;
        }
      }
    `}</style>
  </section>
);

export default FeatureGrid;
