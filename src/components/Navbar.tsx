import React from 'react';

const links = [
  { label: 'The details', href: '#the-details' },
];

export const Navbar: React.FC = () => (
  <header className="relative z-20 border-b border-zinc-100 bg-white/90 backdrop-blur">
    <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
      <a href="#top" aria-label="Super G home" className="flex items-center gap-3">
        <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-lg font-black text-white">G</span>
        <span className="text-sm font-extrabold tracking-[0.18em] text-zinc-950">SUPER G</span>
      </a>
      <nav aria-label="Main navigation" className="hidden items-center gap-9 sm:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950">{link.label}</a>
        ))}
      </nav>
      <a href="#the-details" className="rounded-full border border-zinc-300 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-zinc-900 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2">Explore</a>
    </div>
  </header>
);
