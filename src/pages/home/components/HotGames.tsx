
import hotGame1 from '../../../assets/hot-game-1.png';
import hotGame2 from '../../../assets/hot-game-2.png';
import hotGame3 from '../../../assets/hot-game-3.png';
import hotGame4 from '../../../assets/hot-game-4.png';
import hotGame5 from '../../../assets/hot-game-5.png';
import hotGame6 from '../../../assets/hot-game-6.png';
import hotGame7 from '../../../assets/hot-game-7.png';
import hotGame8 from '../../../assets/hot-game-8.png';
import hotGame9 from '../../../assets/hot-game-9.png';
import hotGame10 from '../../../assets/hot-game-10.png';

const games = [
  { image: hotGame1, title: 'Fortune Coins 2', provider: 'Boongo' },
  { image: hotGame2, title: 'Night City', provider: 'JILI' },
  { image: hotGame3, title: 'Boxing King', provider: 'JILI' },
  { image: hotGame4, title: 'Fortune Meow', provider: 'Rich Gaming' },
  { image: hotGame5, title: 'Crown Strike', provider: 'Boongo' },
  { image: hotGame6, title: 'Circus Joker 4096', provider: 'Boongo' },
  { image: hotGame7, title: 'Bank Fever 3', provider: 'Rich Gaming' },
  { image: hotGame8, title: 'Mafia Empire', provider: 'Rich Gaming' },
  { image: hotGame9, title: '3 Royal Coins', provider: 'Boongo' },
  { image: hotGame10, title: 'Forge of Vulcan', provider: 'Boongo' }
];

const HotGames = () => {
  const externalUrl = 'https://king9aus.net/RFESTERSEO';

  return (
    <div className="py-10 md:py-12 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-white" style={{fontFamily:'Orbitron,sans-serif'}}>HOT GAMES</h2>
          <a 
            href="https://king9aus.net/RFESTERSEO"
            className="text-yellow-400 text-sm flex items-center gap-1 hover:text-yellow-300 transition-colors cursor-pointer whitespace-nowrap font-medium"
          >
            More Games
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-4" data-product-shop>
          {games.map((game, index) => (
            <a 
              key={index}
              href={externalUrl}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-yellow-400/20 rounded-lg overflow-hidden hover:border-yellow-400/60 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-1.5 md:p-3">
                <h3 className="text-white font-bold text-[11px] md:text-sm mb-1 group-hover:text-yellow-400 transition-colors leading-tight">{game.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-[10px] md:text-xs truncate">{game.provider}</span>
                  <div className="flex items-center gap-1 shrink-0 ml-1">
                    <i className="ri-star-fill text-yellow-400 text-[10px] md:text-xs"></i>
                    <span className="text-yellow-400 text-[10px] md:text-xs font-bold">HOT</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotGames;
