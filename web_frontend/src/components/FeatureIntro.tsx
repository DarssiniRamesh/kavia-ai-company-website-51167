"use client";
import React from "react";

// PUBLIC_INTERFACE
/**
 * Brief introduction to KAVIA AI features below Hero section.
 */
const FeatureIntro = () => (
  <section className="feature-intro">
    <p className="intro">
      <b>KAVIA AI</b> transforms the way your company works—automatic answers, knowledge management, secure data, and communication workflows in one AI-native platform.
    </p>
    <style jsx>{`
      .feature-intro {
        background: #fff;
        color: #22223b;
        text-align: center;
        padding: 2.15rem 0 0.5rem 0;
      }
      .intro {
        max-width: 600px;
        margin: 0 auto;
        font-size: 1.11rem;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        line-height: 1.75;
      }
    `}</style>
  </section>
);

export default FeatureIntro;
