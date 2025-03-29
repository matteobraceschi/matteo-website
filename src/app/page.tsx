// src/app/page.tsx

"use client";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import PhotoTimeline from "./sections/PhotoTimeline";
import ProjectsSection from "./sections/Projects";
import ContactSection from "./sections/Contact";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden bg-black scroll-smooth">
      <Navbar />
      <Hero />
      <PhotoTimeline />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
