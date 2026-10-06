import React from 'react';

const details = [
  {
    number: '01',
    title: 'Comfort, built into the everyday',
    copy: 'An easy, comfortable layer for slow mornings, campus days, and everything after.',
  },
  {
    number: '02',
    title: 'Sleek from every angle',
    copy: 'A clean black silhouette and a bold embroidered G make a simple outfit feel considered.',
  },
  {
    number: '03',
    title: 'Your go-to, on repeat',
    copy: 'Throw it on with denim, joggers, or your favorite everyday essentials.',
  },
];

export const HeroSection: React.FC = () => (
  <>
    <main>
      <section className="relative mx-auto grid min-h-[calc(100svh-88px)] max-w-7xl items-center gap-8 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-12 lg:pb-20 lg:pt-8">
        <div className="relative z-10 order-2 max-w-xl lg:order-1">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">
            <span className="h-px w-8 bg-zinc-400" /> The everyday icon
          </p>
          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.065em] text-zinc-950 sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Black Super <span className="inline-block">G</span> Hoodie<span className="text-[#4285F4]">.</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-zinc-600 sm:text-xl">
            Comfortable and sleek, made for day-to-day use. Meet the layer that makes getting dressed feel effortless.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-zinc-700">
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2">Everyday comfort</span>
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2">Clean, easy style</span>
          </div>
          <a href="#the-details" className="group mt-10 inline-flex items-center gap-4 rounded-full bg-zinc-950 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-zinc-950/10 transition hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2">
            Meet your new favorite
            <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="mt-4 text-xs tracking-wide text-zinc-400">A comfortable layer. A sharper everyday look.</p>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[620px] lg:order-2">
          <div className="absolute -right-2 top-10 h-24 w-24 rounded-full bg-[#FBBC05]/20 blur-2xl sm:right-8" />
          <div className="absolute -bottom-2 left-4 h-32 w-32 rounded-full bg-[#34A853]/15 blur-3xl sm:left-12" />
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-[0_30px_90px_-45px_rgba(24,24,27,0.28)]">
            <img
              src="/creative-website/black-super-g-hoodie.png"
              alt="Black Super G Hoodie with a bold multicolor embroidered G logo on the chest"
              className="aspect-square w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700 shadow-sm backdrop-blur sm:bottom-7 sm:left-7">
              Comfort meets clean style
            </div>
          </div>
          <div aria-hidden="true" className="absolute -right-3 top-1/3 hidden h-14 w-14 items-center justify-center rounded-full bg-zinc-950 text-xl font-black text-white shadow-xl sm:flex">G</div>
        </div>
      </section>

      <section id="the-details" className="scroll-mt-8 border-y border-zinc-200 bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-11 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Why you’ll wear it</p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.05em] text-zinc-950 sm:text-4xl">One easy choice. Every day.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-zinc-500">The Black Super G Hoodie brings comfort and a sleek, versatile look into your daily rotation.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {details.map((item) => (
              <article key={item.number} className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7">
                <p className="mb-8 text-xs font-bold tracking-[0.18em] text-zinc-400">{item.number}</p>
                <h3 className="text-xl font-bold tracking-tight text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-zinc-950 px-6 py-7 text-white sm:flex-row sm:items-center sm:px-9 sm:py-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Black Super G Hoodie</p>
              <p className="mt-2 text-2xl font-bold tracking-tight">Make comfort your everyday uniform.</p>
            </div>
            <a href="#top" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950">
              Back to the hoodie <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  </>
);
