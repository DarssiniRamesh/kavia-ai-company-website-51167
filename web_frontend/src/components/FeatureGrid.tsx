"use client";

// PUBLIC_INTERFACE
import React from "react";
import FeatureCard from "./FeatureCard";

// Use string unicode values, not JSX elements!
const features = [
  {
    icon: "📦", // CI/CD
    title: "CI/CD Integration",
    description: "Seamless deployment pipelines. Automate, build, and deploy with confidence for rapid iteration."
  },
  {
    icon: "👥", // Collaborative Dev
    title: "Collaborative Dev",
    description: "Built for teams. Real-time code reviews, comments, and merge tracking to boost productivity."
  },
  {
    icon: "🔒", // Enterprise Security
    title: "Enterprise Security",
    description: "Top-tier protection for your code and data. Compliance, auditing, and encryption at every layer."
  },
  {
    icon: "💻", // AI
    title: "AI-Driven Insights",
    description: "Leverage intelligent dashboards and workflow recommendations to optimize every sprint."
  },
  {
    icon: "📶", // API
    title: "API-First Design",
    description: "Query, test, and document APIs natively. Speed up integration and client onboarding dramatically."
  },
  {
    icon: "💬", // Support
    title: "24/7 Support",
    description: "Our global team is here to answer questions and resolve issues—so you never miss a launch."
  }
];

export default function FeatureGrid() {
  return (
    <section className="feature-grid-wrap">
      <div className="feature-grid">
        {features.map((feature, i) =>
          <FeatureCard
            key={i}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        )}
      </div>
    </section>
  );
}
