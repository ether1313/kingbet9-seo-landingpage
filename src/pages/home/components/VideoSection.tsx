
const VideoSection = () => {
  return (
    <div>
      <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
        LATEST HIGHLIGHT
      </h2>
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-yellow-400/20 rounded-xl overflow-hidden hover:border-yellow-400/40 transition-all duration-300">
        {/* 16:9 responsive wrapper */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://streamable.com/e/7k99sf"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Latest highlight video"
          />
        </div>
      </div>
      <div className="mt-3 md:mt-4 p-3 md:p-4 bg-gradient-to-r from-[#1a1a1a] to-[#111111] border border-yellow-400/10 rounded-lg">
        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
          Kingbet9 – Australia's Most Trusted Online Casino 2026 | Live Casino Australia | Crypto Casino | Online Slots Pokies | Fishing Games | Bitcoin Casino Australia
        </p>
        <small className="text-gray-500 text-xs mt-1 block">Watch Kingbet9 highlights &amp; game previews</small>
      </div>
    </div>
  );
};

export default VideoSection;
