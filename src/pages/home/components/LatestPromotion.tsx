import { useMemo, useState } from 'react';
import latestPromo1 from '../../../assets/latest-promo-1.png';
import latestPromo2 from '../../../assets/latest-promo-2.png';
import latestPromo3 from '../../../assets/latest-promo-3.png';

const promotions = [
  {
    badge: 'SLOTS',
    title: 'Slot Daily Unlimited Bonus 9%',
    description: 'Daily play rewards with an unlimited slot bonus rate up to 9%.',
    image: latestPromo1,
  },
  {
    badge: 'NEW MEMBER',
    title: 'Slot Welcome Bonus 100%',
    description: 'New players can claim a 100% slot welcome bonus on first deposit.',
    image: latestPromo2,
  },
  {
    badge: 'REBATE',
    title: 'Rebate Bonus 5%',
    description: 'Daily rebate bonus campaign with returns up to 5% for active players.',
    image: latestPromo3,
  },
];

const LatestPromotion = () => {
  const externalUrl = 'https://king9aus.net/RFESTERSEO';
  const [startIndex, setStartIndex] = useState(0);
  const visiblePromotions = useMemo(() => {
    const list = [...promotions, ...promotions];
    return list.slice(startIndex, startIndex + 3);
  }, [startIndex]);

  const goPrev = () => {
    setStartIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % promotions.length);
  };

  return (
    <section className="py-10 md:py-14 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-5 md:mb-6">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide"
            style={{ fontFamily: 'Orbitron,sans-serif' }}
          >
            LATEST PROMOTIONS
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={goPrev}
              aria-label="Previous promotions"
              className="w-10 h-10 rounded-full border border-yellow-400 bg-[#1a1a1a] text-yellow-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-300 transition-all duration-200 shadow-[0_0_0_1px_rgba(255,215,0,0.2)] flex items-center justify-center cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-2xl leading-none"></i>
            </button>
            <button
              onClick={goNext}
              aria-label="Next promotions"
              className="w-10 h-10 rounded-full border border-yellow-400 bg-[#1a1a1a] text-yellow-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-300 transition-all duration-200 shadow-[0_0_0_1px_rgba(255,215,0,0.2)] flex items-center justify-center cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-2xl leading-none"></i>
            </button>
          </div>
        </div>

        <div className="md:hidden -mx-1 flex gap-3 overflow-x-auto px-1 pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {promotions.map((promo) => (
            <a
              key={`mobile-${promo.title}`}
              href={externalUrl}
              className="block min-w-[86%] snap-center overflow-hidden rounded-xl border border-yellow-400/20 bg-[#0c0c0c] shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
            >
              <div className="relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-auto block"
                />
              </div>

              <div className="p-4">
                <h3 className="text-white font-bold text-base mb-2 leading-tight">{promo.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{promo.description}</p>
                <span className="inline-flex items-center gap-1 text-yellow-400 text-sm font-bold">
                  CLAIM NOW
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-4 md:gap-5">
          {visiblePromotions.map((promo, index) => (
            <a
              key={`${promo.title}-${index}`}
              href={externalUrl}
              className="block overflow-hidden rounded-xl border border-yellow-400/20 bg-[#0c0c0c] shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
            >
              <div className="relative aspect-[5/2]">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover object-center bg-[#080808]"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-yellow-400 text-black text-[11px] font-black tracking-wide">
                  {promo.badge}
                </span>
              </div>

              <div className="p-4 md:p-5">
                <h3 className="text-white font-bold text-lg mb-2 leading-tight">{promo.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{promo.description}</p>
                <span className="inline-flex items-center gap-1 text-yellow-400 text-sm font-bold">
                  CLAIM NOW
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPromotion;
