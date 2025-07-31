"use client";

// PUBLIC_INTERFACE
import React from "react";

export default function CTASection() {
  return (
    <section className="cta-section">
      <h2 className="cta-headline">
        Inspect. Plan. <span className="accent-bold">Build.</span>
      </h2>
      <div className="cta-subtitle">
        Unlock the power of next-level software delivery—see KAVIA AI in action today.
      </div>
      <a href="/request-access" className="cta-btn">Request Access</a>
    </section>
  );
}
