import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

export const App: React.FC = () => (
  <div id="top" className="min-h-screen overflow-hidden bg-[#f8f7f2] font-sans text-[#1e2922] selection:bg-[#ccd7c7] selection:text-[#26352b]">
    <Navbar />
    <HeroSection />
    <footer className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-[#e2e0d7] px-5 py-7 text-xs text-[#7b847d] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <span>OUTFIT HANGER · Your whole outfit, together.</span>
      <span>Make getting ready a little easier.</span>
    </footer>
  </div>
);

export default App;
