
import { useState, useEffect } from 'react';
import kingbet9Logo from '../../../assets/kingbet9-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const externalUrl = 'https://king9aus.net/RFESTERSEO';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a] shadow-[0_2px_20px_rgba(255,215,0,0.15)]' : 'bg-transparent'}`}>
        <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
          <div className="flex items-center justify-between py-3 md:py-4">
            <a href="/" className="flex-shrink-0">
              <img
                src={kingbet9Logo}
                alt="Kingbet9 logo"
                className="h-9 md:h-12 w-auto object-contain"
              />
            </a>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden md:flex gap-3">
                <a
                  href={externalUrl}
                  className="px-6 py-2 bg-transparent border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold text-sm"
                >
                  LOGIN
                </a>
                <a
                  href={externalUrl}
                  className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-md hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
                >
                  REGISTER
                </a>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 bg-[#1a1a1a] border border-yellow-400/20 rounded-md cursor-pointer hover:border-yellow-400/60 transition-colors">
                <span className="text-lg">🇦🇺</span>
                <span className="text-white text-sm hidden sm:inline">English</span>
                <i className="ri-arrow-down-s-line text-yellow-400"></i>
              </div>
            </div>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="flex md:hidden justify-center gap-2 pb-2.5">
            <a
              href={externalUrl}
              className="flex-1 max-w-[170px] px-4 py-2.5 text-center bg-transparent border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold text-sm"
            >
              LOGIN
            </a>
            <a
              href={externalUrl}
              className="flex-1 max-w-[170px] px-4 py-2.5 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-md hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
            >
              REGISTER
            </a>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="hidden lg:block fixed top-[88px] md:top-[72px] left-0 right-0 z-40 bg-[#111111] border-t border-yellow-400/20 border-b border-b-yellow-400/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between py-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center gap-2 text-white cursor-pointer"
            >
              <div className="flex flex-col gap-1">
                <span className="w-6 h-0.5 bg-yellow-400"></span>
                <span className="w-6 h-0.5 bg-yellow-400"></span>
                <span className="w-6 h-0.5 bg-yellow-400"></span>
              </div>
              <span className="text-sm text-yellow-400 font-semibold">Menu</span>
            </button>

            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a href={externalUrl} className="text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer">
                  <i className="ri-home-4-fill text-xl"></i>
                </a>
              </li>
              <li><a href={externalUrl} className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-medium">LIVE CASINO</a></li>
              <li><a href={externalUrl} className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-medium">SLOTS</a></li>
              <li><a href={externalUrl} className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-medium">FISHING</a></li>
              <li><a href={externalUrl} className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-medium">DOWNLOAD APP</a></li>
              <li><a href={externalUrl} className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-medium">HOW TO REGISTER</a></li>
              <li><a href={externalUrl} className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-medium">VIP</a></li>
              <li className="relative group">
                <button className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-1 cursor-pointer font-medium">
                  MORE
                  <i className="ri-arrow-down-s-line"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] border border-yellow-400/20 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[220px]">
                  <a href={externalUrl} className="block px-4 py-2 text-gray-300 hover:bg-[#252525] hover:text-yellow-400 transition-colors cursor-pointer">NEWS</a>
                  <a href={externalUrl} className="block px-4 py-2 text-gray-300 hover:bg-[#252525] hover:text-yellow-400 transition-colors cursor-pointer">BLOG</a>
                  <a href={externalUrl} className="block px-4 py-2 text-gray-300 hover:bg-[#252525] hover:text-yellow-400 transition-colors cursor-pointer">PROMOTIONS</a>
                  <a href={externalUrl} className="block px-4 py-2 text-gray-300 hover:bg-[#252525] hover:text-yellow-400 transition-colors cursor-pointer">BETTING SITE AUSTRALIA</a>
                  <a href={externalUrl} className="block px-4 py-2 text-gray-300 hover:bg-[#252525] hover:text-yellow-400 transition-colors cursor-pointer">CRYPTO</a>
                  <a href={externalUrl} className="block px-4 py-2 text-gray-300 hover:bg-[#252525] hover:text-yellow-400 transition-colors cursor-pointer">E-WALLET</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#111111] border-t border-yellow-400/20 z-40 pb-[max(env(safe-area-inset-bottom),0.35rem)]">
        <div className="flex items-center justify-around pt-1.5 pb-1.5">
          <a href={externalUrl} className="flex flex-col items-center gap-1 p-2 cursor-pointer group">
            <i className="ri-home-4-line text-yellow-400 text-xl group-hover:text-yellow-300"></i>
            <span className="text-yellow-400 text-xs font-medium group-hover:text-yellow-300">Home</span>
          </a>
          <a href={externalUrl} className="flex flex-col items-center gap-1 p-2 cursor-pointer group">
            <i className="ri-football-line text-gray-400 text-xl group-hover:text-yellow-400"></i>
            <span className="text-gray-400 text-xs font-medium group-hover:text-yellow-400">Live</span>
          </a>
          <a href={externalUrl} className="flex flex-col items-center gap-1 p-2 cursor-pointer group">
            <i className="ri-dice-line text-gray-400 text-xl group-hover:text-yellow-400"></i>
            <span className="text-gray-400 text-xs font-medium group-hover:text-yellow-400">Casino</span>
          </a>
          <a href={externalUrl} className="flex flex-col items-center gap-1 p-2 cursor-pointer group">
            <i className="ri-coins-line text-gray-400 text-xl group-hover:text-yellow-400"></i>
            <span className="text-gray-400 text-xs font-medium group-hover:text-yellow-400">Slot</span>
          </a>
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="flex flex-col items-center gap-1 p-2 cursor-pointer group"
          >
            <i className="ri-menu-line text-gray-400 text-xl group-hover:text-yellow-400"></i>
            <span className="text-gray-400 text-xs font-medium group-hover:text-yellow-400">More</span>
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#050505] z-50 lg:hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-yellow-400/20">
              <img
                src={kingbet9Logo}
                alt="Kingbet9 logo"
                className="h-9 md:h-10 w-auto object-contain"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400/10 hover:bg-yellow-400/20 transition-colors"
              >
                <i className="ri-close-line text-yellow-400 text-2xl"></i>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="space-y-2">
                {[
                  { label: 'HOME', href: externalUrl, icon: 'ri-home-4-fill' },
                  { label: 'LIVE CASINO', href: externalUrl, icon: 'ri-dice-fill' },
                  { label: 'ONLINE SLOTS', href: externalUrl, icon: 'ri-poker-clubs-line' },
                  { label: 'FISHING GAMES', href: externalUrl, icon: 'ri-coins-fill' },
                  { label: 'CRYPTO CASINO', href: externalUrl, icon: 'ri-bit-coin-fill' },
                  { label: 'VIP PROGRAM', href: externalUrl, icon: 'ri-vip-crown-fill' },
                  { label: 'PROMOTIONS', href: externalUrl, icon: 'ri-gift-fill' },
                  { label: 'DOWNLOAD APP', href: externalUrl, icon: 'ri-smartphone-fill' },
                  { label: 'HOW TO REGISTER', href: externalUrl, icon: 'ri-user-add-fill' },
                  { label: 'NEWS & BLOG', href: externalUrl, icon: 'ri-news-fill' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 py-3.5 px-4 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5 rounded-lg transition-all duration-300 cursor-pointer group"
                  >
                    <i className={`${item.icon} text-2xl text-yellow-400/60 group-hover:text-yellow-400`}></i>
                    <span className="font-medium text-base md:text-lg">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="p-4 md:p-6 border-t border-yellow-400/20">
              <div className="flex gap-3">
                <a
                  href={externalUrl}
                  className="flex-1 py-3 bg-transparent border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold text-center"
                >
                  LOGIN
                </a>
                <a
                  href={externalUrl}
                  className="flex-1 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                >
                  JOIN NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
