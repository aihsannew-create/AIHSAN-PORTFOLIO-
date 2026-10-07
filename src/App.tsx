/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import AmbientBackdrop from './components/AmbientBackdrop';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060608] text-[#f4f4f6] selection:bg-blue-600 selection:text-white">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Subtle Background Canvas */}
      <AmbientBackdrop />

      {/* Sticky Floating Glass Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Clean, Focused Main Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Landing */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. Featured Live Work (Projects) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. Services / Specialization (What I Build) */}
        <Services onOpenContact={handleOpenContact} />

        {/* 4. About AIHSAN & Skills */}
        <About onOpenContact={handleOpenContact} />

        {/* 5. Contact / Hire Me */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Specs Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
