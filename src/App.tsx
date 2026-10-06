import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

export const App: React.FC = () => (
  <div id="top" className="min-h-screen overflow-hidden bg-white font-sans text-zinc-950 selection:bg-[#4285F4]/20">
    <Navbar />
    <HeroSection />
    <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <span>SUPER G · Everyday essentials</span>
      <span>Comfort and style, on repeat.</span>
    </footer>
  </div>
);

export default App;
