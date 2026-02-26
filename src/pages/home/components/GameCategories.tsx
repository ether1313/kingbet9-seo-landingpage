
const categories = [
  { name: 'Casino', icon: 'ri-dice-fill' },
  { name: 'Slots', icon: 'ri-coins-fill' },
  { name: 'Live', icon: 'ri-poker-clubs-fill' },
  { name: 'Pokies', icon: 'ri-poker-diamonds-fill' },
];

const GameCategories = () => {
  const externalUrl = 'https://king9aus.net/RFESTERSEO';

  return (
    <div className="md:hidden py-5 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href={externalUrl}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-full min-h-[60px] aspect-square rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-yellow-400/20 group-hover:border-yellow-400/60 group-active:scale-95 flex items-center justify-center transition-all duration-300 shadow-md">
                <i className={`${category.icon} text-yellow-400 text-3xl`}></i>
              </div>
              <span className="text-white text-xs font-bold tracking-wide">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCategories;
