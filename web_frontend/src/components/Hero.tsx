"use client";

// PUBLIC_INTERFACE
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="pre-headline">Reimagining Software</div>
        <h1 className="main-headline">
          Product <span className="accent-bold">Development</span>
        </h1>
        <div className="hero-image-wrapper">
          {/* Use Next.js Image for performance */}
          <Image
            src="/hero-placeholder.svg"
            alt="Hero Illustration"
            className="hero-image"
            width={600}
            height={320}
            style={{
              borderRadius: "1rem",
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.32)"
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
