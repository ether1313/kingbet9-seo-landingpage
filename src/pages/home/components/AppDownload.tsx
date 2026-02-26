
import appScreen from '../../../assets/app-screen.png';

const AppDownload = () => {
  const externalUrl = 'https://king9aus.net/RFESTERSEO';

  return (
    <div id="app-download" className="py-8 md:py-12 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative bg-gradient-to-r from-[#1a1a1a] to-[#111111] border border-yellow-400/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://readdy.ai/api/search-image?query=mobile%20phone%20casino%20app%20dark%20background%20gold%20abstract%20pattern%20luxury%20texture%20subtle%20design&width=1200&height=500&seq=appbg1&orientation=landscape"
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center p-6 md:p-12">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="w-48 md:w-72 aspect-[9/19] rounded-[2rem] overflow-hidden">
                <img
                  src={appScreen}
                  alt="Kingbet9 App"
                  className="w-full h-full object-cover object-center scale-[1.08]"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4">
                <span className="text-yellow-400 text-xs font-bold tracking-widest">AUSTRALIA'S #1 APP</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-2" style={{fontFamily:'Orbitron,sans-serif'}}>
                KINGBET9 APP
              </h2>
              <h3 className="text-lg md:text-2xl text-yellow-400 font-bold mb-4">Download Now – Ultimate Experience!</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Play Kingbet9 anytime, anywhere! Available for iOS and Android, enjoy smooth live casino, sports betting and slot gaming experience.
              </p>
              <div className="flex flex-row gap-2.5 md:gap-4 justify-center md:justify-start">
                <a
                  href={externalUrl}
                  className="flex-1 md:flex-none flex items-center gap-2 md:gap-3 px-3 md:px-6 py-3 bg-black border-2 border-yellow-400/50 rounded-xl hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 cursor-pointer group"
                >
                  <i className="ri-apple-fill text-white text-lg md:text-2xl group-hover:text-yellow-400 transition-colors"></i>
                  <div className="text-left">
                    <div className="text-gray-400 text-[11px] md:text-xs">Download on the</div>
                    <div className="text-white font-bold text-base md:text-sm">App Store</div>
                  </div>
                </a>
                <a
                  href={externalUrl}
                  className="flex-1 md:flex-none flex items-center gap-2 md:gap-3 px-3 md:px-6 py-3 bg-black border-2 border-yellow-400/50 rounded-xl hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 cursor-pointer group"
                >
                  <i className="ri-android-fill text-white text-lg md:text-2xl group-hover:text-yellow-400 transition-colors"></i>
                  <div className="text-left">
                    <div className="text-gray-400 text-[11px] md:text-xs">Get it on</div>
                    <div className="text-white font-bold text-base md:text-sm">Google Play</div>
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-4 md:gap-6 mt-6 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-yellow-400 font-black text-lg md:text-xl">4.9★</div>
                  <div className="text-gray-500 text-xs">App Store</div>
                </div>
                <div className="w-px h-6 md:h-8 bg-yellow-400/20"></div>
                <div className="text-center">
                  <div className="text-yellow-400 font-black text-lg md:text-xl">500K+</div>
                  <div className="text-gray-500 text-xs">Downloads</div>
                </div>
                <div className="w-px h-6 md:h-8 bg-yellow-400/20"></div>
                <div className="text-center">
                  <div className="text-yellow-400 font-black text-lg md:text-xl">24/7</div>
                  <div className="text-gray-500 text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
