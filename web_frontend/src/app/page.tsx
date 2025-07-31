"use client";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Hero from "../components/Hero";
import FeatureIntro from "../components/FeatureIntro";
import FeatureGrid from "../components/FeatureGrid";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

// PUBLIC_INTERFACE
export default function Home() {
  return (
    <>
      <Navbar />
      <AnnouncementBar />
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
