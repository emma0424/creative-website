import React from 'react';

const features = [
  { title: 'Shirt and pants', detail: 'Keep the main pieces of a look together.' },
  { title: 'Sock area', detail: 'Give socks a dedicated place with the outfit.' },
  { title: 'Accessory area', detail: 'Gather a small finishing accessory in the same spot.' },
];

export const PricingSection: React.FC = () => (
  <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-24 border-y border-[#e2e0d7] bg-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-[#e4e2d9] bg-[#f2eee5] shadow-[0_25px_75px_-40px_rgba(38,53,43,0.32)]">
        <img
          src="/creative-website/outfit-hanger-product.webp"
          alt="Outfit Hanger concept holding a shirt, pants, socks, and a belt together"
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
        />
      </div>

      <div>
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#71866f]">Outfit Hanger</p>
        <h2 id="pricing-title" className="max-w-xl text-4xl font-extrabold leading-[1.02] tracking-[-0.06em] text-[#1e2922] sm:text-5xl">A complete outfit, together.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#5d675f]">One hanger designed to keep a shirt, pants, socks, and an accessory in one easy-to-find place.</p>

        <div className="mt-7 flex flex-wrap items-end gap-x-3 gap-y-1">
          <span className="text-4xl font-extrabold tracking-[-0.05em] text-[#26352b]">$24.99</span>
          <span className="pb-1 text-sm font-medium text-[#68716a]">per hanger</span>
        </div>

        <ul className="mt-7 grid gap-3 sm:grid-cols-3" aria-label="Product features">
          {features.map((feature) => (
            <li key={feature.title} className="rounded-2xl border border-[#e2e0d7] bg-[#fbfaf7] p-4">
              <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#e8ece4] text-sm font-bold text-[#465b49]" aria-hidden="true">✓</span>
              <h3 className="text-sm font-bold text-[#26352b]">{feature.title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-[#68716a]">{feature.detail}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-xl text-xs leading-5 text-[#778177]">Product concept: final materials, construction, and dimensions are still being defined.</p>
        <a href="#how-it-works" className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#26352b] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#26352b]/15 transition hover:-translate-y-0.5 hover:bg-[#394b3d] focus:outline-none focus:ring-2 focus:ring-[#26352b] focus:ring-offset-2">
          See how it works <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  </section>
);
