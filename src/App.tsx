import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { JourneySection } from './sections/JourneySection';
import { ToolkitSection } from './sections/ToolkitSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { CloudSection } from './sections/CloudSection';
import { MindsetSection } from './sections/MindsetSection';
import { EducationSection } from './sections/EducationSection';
import { GithubSection } from './sections/GithubSection';
import { ContactSection } from './sections/ContactSection';

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Initial / Page Refresh Preloader */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#080b11] text-slate-300 font-sans selection:bg-amber-500 selection:text-black">
        {/* Fixed Navigation Header */}
        <Header />

        {/* Main Storytelling Sections */}
        <main>
          <HeroSection />
          <AboutSection />
          <JourneySection />
          <ToolkitSection />
          <ProjectsSection />
          <CloudSection />
          <MindsetSection />
          <EducationSection />
          <GithubSection />
          <ContactSection />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
