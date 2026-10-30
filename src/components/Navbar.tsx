import React from 'react';

const links = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
];

export const Navbar: React.FC = () => (
  <header className="sticky top-0 z-20 border-b border-[#e5e3da] bg-[#f8f7f2]/95 backdrop-blur-md">
    <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
      <a href="#top" aria-label="Outfit Hanger home" className="flex items-center gap-3">
        <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#26352b] text-white">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4.2a2.25 2.25 0 0 0-2.25 2.25c0 .94.58 1.52 1.38 2.02.72.45 1.42.91 1.42 1.83v.8L4.9 15.34a.8.8 0 0 0 .4 1.5h13.4a.8.8 0 0 0 .4-1.5L12.55 11.1" />
          </svg>
        </span>
        <span className="text-xs font-extrabold tracking-[0.13em] text-[#26352b] sm:text-sm">OUTFIT HANGER</span>
      </a>
      <nav aria-label="Main navigation" className="hidden items-center gap-3 sm:flex sm:gap-5 lg:gap-7">
        {links.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-[#5e685f] transition hover:text-[#26352b]">{link.label}</a>)}
      </nav>
      <a href="#pricing" className="rounded-full border border-[#b9c2b5] px-3 py-2.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#26352b] transition hover:border-[#26352b] hover:bg-[#26352b] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#26352b] focus:ring-offset-2 sm:px-5 sm:text-xs sm:tracking-[0.12em]">View price</a>
    </div>
  </header>
);
