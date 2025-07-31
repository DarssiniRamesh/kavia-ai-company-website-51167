"use client";

// PUBLIC_INTERFACE
import React from "react";

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="feature-card">
      <div className="feature-card-icon" aria-hidden="true">{icon}</div>
      <div className="feature-card-title">{title}</div>
      <div className="feature-card-desc">{description}</div>
    </div>
  );
}
