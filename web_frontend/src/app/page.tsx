import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureIntro from "../components/FeatureIntro";
import FeatureGrid from "../components/FeatureGrid";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import AnnouncementBar from "../components/AnnouncementBar";

// PUBLIC_INTERFACE
/**
 * Homepage for the KAVIA AI company website
 * Precise structure, layout, and styles from provided design notes.
 * Integrates custom and modular sections as per pixel-perfect requirements.
 */
export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <FeatureIntro />
        <FeatureGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
