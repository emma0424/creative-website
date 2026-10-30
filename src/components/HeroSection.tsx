import React from 'react';

const routines = [
  {
    label: 'School',
    title: 'Make the early start easier.',
    copy: 'Choose a full look the night before. Keep the top, bottoms, socks, and small extras together, ready to grab.',
    pieces: ['Top', 'Bottoms', 'Socks', 'Extras'],
  },
  {
    label: 'Work',
    title: 'Start the day organized.',
    copy: 'Bring tomorrow’s work outfit into one place, so the pieces you need are easy to find when morning comes.',
    pieces: ['Workwear', 'Pants', 'Socks', 'Accessories'],
  },
  {
    label: 'Everyday',
    title: 'One less thing to figure out.',
    copy: 'Plan what you’ll wear for errands, activities, or a busy day at home—and keep the whole outfit together.',
    pieces: ['Shirt', 'Pants', 'Socks', 'More'],
  },
];

const benefits = [
  {
    number: '01',
    title: 'Save time',
    copy: 'Keep the pieces for one outfit together instead of searching for them one by one.',
  },
  {
    number: '02',
    title: 'Stay organized',
    copy: 'Give shirts, pants, socks, and accessories one shared place in your closet.',
  },
  {
    number: '03',
    title: 'Feel less rushed',
    copy: 'Decide on your outfit ahead of time and make busy mornings feel more manageable.',
  },
];

export const HeroSection: React.FC = () => {
  const [activeRoutine, setActiveRoutine] = React.useState(0);
  const routine = routines[activeRoutine];

  return (
    <main>
      <section className="relative mx-auto grid min-h-[calc(100svh-84px)] max-w-7xl items-center gap-8 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 lg:px-12 lg:py-12">
        <div className="relative z-10 max-w-xl">
          <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#d8ddd3] bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#59675d]">
            <span className="h-2 w-2 rounded-full bg-[#82977f]" /> One place for the whole outfit
          </p>
          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.065em] text-[#1e2922] sm:text-6xl lg:text-7xl xl:text-[5.1rem]">
            Get ready with <span className="text-[#71866f]">less stress.</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#56615a] sm:text-xl">
            Outfit Hanger keeps your shirt, pants, socks, and accessories together on one hanger—so your complete look is ready when you are.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5 text-xs font-semibold text-[#354239] sm:text-sm">
            <span className="rounded-full bg-[#e8ece4] px-4 py-2.5">A complete outfit, together</span>
            <span className="rounded-full bg-[#e8ece4] px-4 py-2.5">Made for busy days</span>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#pricing" className="group inline-flex items-center gap-4 rounded-full bg-[#26352b] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#26352b]/15 transition hover:-translate-y-0.5 hover:bg-[#394b3d] focus:outline-none focus:ring-2 focus:ring-[#26352b] focus:ring-offset-2">
              View pricing <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#how-it-works" className="group inline-flex items-center gap-4 rounded-full bg-[#26352b] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#26352b]/15 transition hover:-translate-y-0.5 hover:bg-[#394b3d] focus:outline-none focus:ring-2 focus:ring-[#26352b] focus:ring-offset-2">
              See how it works
              <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#benefits" className="text-sm font-semibold text-[#39483e] underline decoration-[#aeb9aa] underline-offset-4 transition hover:text-[#71866f]">Explore the benefits</a>
          </div>
          <p className="mt-5 text-xs tracking-wide text-[#7b847d]">One hanger. Your whole outfit. A calmer start.</p>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div aria-hidden="true" className="absolute -right-3 top-10 h-32 w-32 rounded-full bg-[#dbe4d5] blur-3xl sm:right-5" />
          <div aria-hidden="true" className="absolute -bottom-5 left-0 h-36 w-36 rounded-full bg-[#efe4d0] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#e4e2d9] bg-[#f2eee5] shadow-[0_30px_90px_-45px_rgba(38,53,43,0.35)]">
            <img
              src="/creative-website/outfit-hanger-product.webp"
              alt="The Outfit Hanger holding a shirt, pants, a pair of socks, and a belt together"
              className="aspect-[4/5] w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-md backdrop-blur sm:bottom-7 sm:left-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8ece4] text-[#465b49]" aria-hidden="true">✓</span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#778177]">Outfit ready</span>
                <span className="mt-0.5 block text-sm font-semibold text-[#26352b]">Everything in one place</span>
              </span>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -right-3 top-1/4 hidden rounded-full border border-[#d8ddd3] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#617261] shadow-md sm:block">Shirt · pants · more</div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 border-y border-[#e2e0d7] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#71866f]">One hanger, ready to go</p>
            <h2 className="max-w-md text-3xl font-bold leading-tight tracking-[-0.05em] text-[#1e2922] sm:text-4xl">Plan for the kind of day ahead.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#68716a]">Pick a routine to see how one place for your outfit can make getting ready feel simpler.</p>
            <div role="tablist" aria-label="Choose a daily routine" className="mt-7 flex flex-wrap gap-2">
              {routines.map((item, index) => (
                <button
                  key={item.label}
                  id={`routine-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeRoutine === index}
                  aria-controls="routine-panel"
                  onClick={() => setActiveRoutine(index)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#71866f] focus:ring-offset-2 ${activeRoutine === index ? 'bg-[#26352b] text-white' : 'bg-[#f2f3ef] text-[#536057] hover:bg-[#e6eae3]'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <article id="routine-panel" role="tabpanel" aria-labelledby={`routine-tab-${activeRoutine}`} className="rounded-[1.75rem] bg-[#f3f2ed] p-6 sm:p-9 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#879285]">{routine.label} routine</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#26352b] sm:text-3xl">{routine.title}</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#5d675f]">{routine.copy}</p>
            <div className="mt-7 border-t border-[#dcddd4] pt-5">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#828b81]">Keep together</p>
              <div className="flex flex-wrap gap-2">
                {routine.pieces.map((piece) => <span key={piece} className="rounded-lg border border-[#d8ddd3] bg-white px-3 py-2 text-xs font-semibold text-[#48564b]">{piece}</span>)}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="benefits" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#71866f]">Why Outfit Hanger</p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.05em] text-[#1e2922] sm:text-4xl">A little more order for everyday life.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#68716a]">Designed around what matters on a busy morning: convenience, organization, and time.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.number} className="group rounded-2xl border border-[#e2e0d7] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#c7d0c2] hover:shadow-lg hover:shadow-[#26352b]/5 sm:p-7">
              <p className="mb-8 text-xs font-bold tracking-[0.18em] text-[#9ba397]">{item.number}</p>
              <h3 className="text-xl font-bold tracking-tight text-[#26352b]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#667067]">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="who-its-for" className="scroll-mt-24 border-y border-[#e2e0d7] bg-[#ecefe8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#71866f]">Made for real mornings</p>
            <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-[-0.05em] text-[#1e2922] sm:text-4xl">For full calendars and busy closets.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-[#515d54]">Whether you’re heading to class, getting ready for work, or helping kids start their day, Outfit Hanger gives the full look one easy place to live.</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {['Students', 'Working people', 'Parents', 'Busy households'].map((audience) => <span key={audience} className="rounded-full border border-[#cdd5c8] bg-white/70 px-4 py-2 text-xs font-semibold text-[#4a5a4d]">{audience}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="rounded-[2rem] bg-[#26352b] px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c5d0c2]">Our mission</p>
            <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.035em] sm:text-3xl">Make getting ready easier, faster, more organized, and less stressful.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#e0e6dd]">Whatever you’re wearing or wherever you’re going, keep a complete outfit together in one place.</p>
          </div>
          <a href="#top" className="mt-7 inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#26352b] transition hover:bg-[#e8ece4] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#26352b] lg:mt-0">Start with tomorrow <span aria-hidden="true">↑</span></a>
        </div>
      </section>
    </main>
  );
};
