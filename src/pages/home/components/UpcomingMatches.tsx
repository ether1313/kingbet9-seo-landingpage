
import bonusFrame from '../../../assets/bonus-frame.png';

const bonusItems = [
  'Daily Rollover Rebate 0.9%',
  'Golden Egg Bonus AUD ?',
  'Daily Easy Step Free AUD 100',
  'Unlimited Random Bonus AUD ?',
  'Free 365 Days Bonus AUD ?',
  'Weekly Commission 5%',
];

const UpcomingMatches = () => {
  const externalUrl = 'https://king9aus.net/RFESTERSEO';

  return (
    <div className="mt-10 md:mt-12 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          HOT PROMOTIONS BONUS
        </h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-2">
        {bonusItems.map((title) => (
          <a
            key={title}
            href={externalUrl}
            className="relative flex items-center justify-center"
          >
            <img
              src={bonusFrame}
              alt="Bonus frame"
              className="w-full max-w-[110px] md:max-w-[120px] h-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 flex items-center justify-center p-2 md:p-2">
              <h3
                className="text-center text-yellow-400 font-black text-[11px] md:text-xs leading-tight max-w-[70%] whitespace-normal break-words drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMatches;
