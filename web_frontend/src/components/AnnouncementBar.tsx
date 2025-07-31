"use client";
import React from "react";

// PUBLIC_INTERFACE
/**
 * Displays a prominent announcement bar at the top (from design).
 */
const AnnouncementBar = () => (
  <div className="announcement-bar">
    🚀 Try KAVIA AI Now — Revolutionize your team&apos;s productivity.
    <style jsx>{`
      .announcement-bar {
        width: 100%;
        background: #e94560;
        color: #fff;
        font-weight: 600;
        text-align: center;
        padding: 0.5rem 0;
        letter-spacing: 0.02em;
        font-size: 1.08rem;
      }
    `}</style>
  </div>
);

export default AnnouncementBar;
