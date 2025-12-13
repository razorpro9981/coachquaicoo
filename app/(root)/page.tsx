"use client";

import Navbar from "../components/Navbar";
import EnhancedServices from "../components/Services";
import EnhancedAboutSection from "../components/About";
import EnhancedHeroHeader from "../components/Hero";
import EnhancedLogoCarousel from "../components/Carousel";
import EnhancedQuotesSection from "../components/Testimonials";
import MultiPathCTA from "../components/CTA";
import EnhancedFooter from "../components/Footer";
import FAQSection from "../components/FAQ";

export default function LuxuryHome() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-cream)]">
      {/* <Navbar /> */}
      <EnhancedHeroHeader />
      <EnhancedLogoCarousel />
      <EnhancedAboutSection />
      <EnhancedServices />
      <EnhancedQuotesSection />
      <MultiPathCTA />
      <FAQSection />
      {/* <EnhancedFooter /> */}
    </div>
  );
}
