
const gameBanners = [
  {
    title: 'Live Casino',
    description: 'Kingbet9 Live Casino brings Australia\'s most immersive gaming experience to your screen. Enjoy Baccarat, Roulette, Blackjack and more with professional live dealers powered by Pragmatic Play, Sexy Baccarat, CT855 Live Casino, Big Gaming — available 24/7.',
    bgImage: 'https://readdy.ai/api/search-image?query=luxury%20live%20casino%20baccarat%20table%20professional%20dealer%20gold%20black%20theme%20elegant%20atmosphere%20cinematic%20wide%20angle%20dramatic%20lighting&width=1200&height=400&seq=banner1&orientation=landscape',
    align: 'left'
  },
  {
    title: 'Online Slots Games',
    description: 'Spin to win with thousands of premium online slots from top providers including JILI, Boongo, Rich Gaming, Joker, ACE333, CQ9, Pegasus, VPower. Kingbet9 Australia delivers the hottest slot titles with massive jackpots, free spins, and bonus rounds — play anytime on mobile or desktop.',
    bgImage: 'https://readdy.ai/api/search-image?query=colorful%20slot%20machine%20reels%20spinning%20gold%20coins%20jackpot%20symbols%20dark%20casino%20background%20dramatic%20lighting%20luxury%20gaming%20cinematic&width=1200&height=400&seq=banner2&orientation=landscape',
    align: 'right'
  },
  {
    title: 'Fishing Games',
    description: 'Dive into action-packed fishing arcade games with stunning graphics and rare bonus features. Top titles include Jackpot Fishing, Circus Jackpot, Fortune Zombie by JILI Gaming, plus exciting options from JILI Slot. Aim, shoot, and reel in massive rewards with every catch.',
    bgImage: 'https://readdy.ai/api/search-image?query=underwater%20fishing%20game%20colorful%20fish%20golden%20coins%20cannons%20dark%20ocean%20background%20dramatic%20lighting%20arcade%20style%20cinematic&width=1200&height=400&seq=banner4&orientation=landscape',
    align: 'left'
  },
];

const GameBanners = () => {
  return (
    <div className="py-10 md:py-12 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-7xl space-y-6 md:space-y-8">
        {gameBanners.map((banner, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden min-h-[220px] md:min-h-[400px] group cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src={banner.bgImage}
                alt={banner.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 md:${banner.align === 'right' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'}`}></div>
            </div>
            <div className="relative z-10 h-full flex items-center p-6 md:p-12">
              <div className={`max-w-2xl w-full ${banner.align === 'right' ? 'md:ml-auto md:text-right text-left' : 'text-left'}`}>
                <h2 className="text-2xl md:text-5xl font-black text-white mb-3 md:mb-4 group-hover:text-yellow-400 transition-colors leading-tight" style={{fontFamily:'Orbitron,sans-serif'}}>
                  {banner.title}
                </h2>
                <p className="text-gray-200 mb-5 md:mb-6 text-xs md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">{banner.description}</p>
                <a
                  href="https://king9aus.net/RFESTERSEO"
                  className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black text-sm md:text-base rounded-md hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Play Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBanners;
