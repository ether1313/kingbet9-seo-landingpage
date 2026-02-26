
import { useState, useRef } from 'react';
import liveCasinoPragmatic from '../../../assets/live-casino-pragmatic.png';
import liveCasinoSexyBaccarat from '../../../assets/live-casino-sexy-baccarat.png';

const casinoGames = [
  {
    image: liveCasinoPragmatic,
    title: 'Live Baccarat',
    provider: 'Pragmatic Play'
  },
  {
    image: liveCasinoSexyBaccarat,
    title: 'Live Roulette',
    provider: 'Sexy Baccarat'
  },
  {
    image: 'https://readdy.ai/api/search-image?query=blackjack%20casino%20table%20cards%20gold%20chips%20professional%20dealer%20luxury%20dark%20atmosphere%20premium%20live%20casino%20cinematic%20dramatic%20lighting%20elegant&width=700&height=400&seq=casino3&orientation=landscape',
    title: 'Live Blackjack',
    provider: 'CT855 Live Casino'
  },
];

const LiveCasino = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const externalUrl = 'https://king9aus.net/RFESTERSEO';

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % casinoGames.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + casinoGames.length) % casinoGames.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 md:mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          LIVE CASINO
        </h2>
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
          {/* Dot indicators */}
          <div className="flex items-center gap-1.5">
            {casinoGames.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="cursor-pointer transition-all duration-300 p-0 m-0 border-0 flex-none appearance-none"
                style={{
                  width: i === currentSlide ? '16px' : '8px',
                  height: '6px',
                  minWidth: '0',
                  minHeight: '0',
                  maxWidth: i === currentSlide ? '16px' : '8px',
                  maxHeight: '6px',
                  lineHeight: '0',
                  borderRadius: '9999px',
                  backgroundColor: i === currentSlide ? '#facc15' : '#4b5563',
                }}
              />
            ))}
          </div>
          {/* Arrow buttons – larger on mobile */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-9 md:h-9 bg-[#1a1a1a] border border-yellow-400/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors group active:scale-95"
            >
              <i className="ri-arrow-left-s-line text-yellow-400 text-lg group-hover:text-black"></i>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-9 md:h-9 bg-[#1a1a1a] border border-yellow-400/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors group active:scale-95"
            >
              <i className="ri-arrow-right-s-line text-yellow-400 text-lg group-hover:text-black"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative overflow-hidden rounded-xl border border-yellow-400/20"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {casinoGames.map((game, index) => (
            <a key={index} href={externalUrl} className="w-full flex-shrink-0 relative group cursor-pointer block">
              {/* Mobile: h-44, Desktop: h-64 */}
              <div className="w-full h-44 md:h-64 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-5">
                <p className="text-yellow-400 text-[10px] md:text-xs font-semibold mb-0.5">{game.provider}</p>
                <h3 className="text-white font-bold text-sm md:text-lg">{game.title}</h3>
              </div>
              {/* Play button on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 bg-yellow-400/90 rounded-full flex items-center justify-center">
                  <i className="ri-play-fill text-black text-2xl ml-1"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveCasino;
