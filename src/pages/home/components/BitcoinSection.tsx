
import cryptoBitcoinIcon from '../../../assets/crypto-bitcoin-icon.png';
import cryptoEthereumIcon from '../../../assets/crypto-ethereum-icon.png';
import cryptoUsdtIcon from '../../../assets/crypto-usdt-icon.png';
import bitcoinSectionBg from '../../../assets/bitcoin-section-bg.png';

const BitcoinSection = () => {
  return (
    <div className="py-10 md:py-12 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-4xl font-black text-white mb-4 text-center leading-tight" style={{fontFamily:'Orbitron,sans-serif'}}>
          Kingbet9 - Australia's Top Crypto Gaming Platform
        </h2>
        <p className="text-gray-400 text-center mb-6 md:mb-8 max-w-5xl mx-auto text-sm">
          Kingbet9 is Australia's leading cryptocurrency online casino, supporting Bitcoin, Ethereum, USDT and other mainstream cryptocurrencies for deposits and withdrawals. Fast, secure, and anonymous to protect your privacy.
        </p>
        <a 
          href="https://king9aus.net/RFESTERSEO"
          className="block cursor-pointer group"
        >
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src={bitcoinSectionBg}
              alt="Kingbet9 Bitcoin Casino Australia" 
              className="w-full h-[220px] md:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-yellow-400 font-black text-xl sm:text-2xl md:text-4xl tracking-wide leading-tight" style={{fontFamily:'Orbitron,sans-serif'}}>
                  CRYPTO DEPOSITS ACCEPTED
                </p>
                <p className="text-white text-xs sm:text-sm md:text-base mt-2">Instant Deposits · Fast Withdrawals · Anonymous &amp; Secure</p>
              </div>
            </div>
          </div>
        </a>
        <div className="grid grid-cols-3 gap-2.5 md:gap-4 mt-6 md:mt-8">
          {[
            { icon: cryptoBitcoinIcon, label: 'Bitcoin', desc: 'Fastest Deposits' },
            { icon: cryptoEthereumIcon, label: 'Ethereum', desc: 'Low Fees' },
            { icon: cryptoUsdtIcon, label: 'USDT', desc: 'Stable Coin' },
          ].map((crypto) => (
            <div key={crypto.label} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-yellow-400/20 rounded-lg p-3 md:p-4 text-center hover:border-yellow-400/60 transition-all duration-300 cursor-pointer">
              <img src={crypto.icon} alt={crypto.label} className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 rounded-full" />
              <div className="text-white font-bold text-sm">{crypto.label}</div>
              <div className="text-gray-500 text-[11px] md:text-xs mt-1">{crypto.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BitcoinSection;
