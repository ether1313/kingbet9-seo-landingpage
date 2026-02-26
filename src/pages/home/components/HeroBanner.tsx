
import { useState, useEffect } from 'react';
import heroBanner1 from '../../../assets/hero-banner-1.png';
import heroBanner2 from '../../../assets/hero-banner-2.png';
import heroBanner3 from '../../../assets/hero-banner-3.png';

const bannerSlides = [
  {
    bg: heroBanner1,
  },
  {
    bg: heroBanner2,
  },
  {
    bg: heroBanner3,
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-[130px] md:pt-[148px]">
      <div className="relative overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
          >
            <div className="relative w-full h-[200px] sm:h-[320px] md:h-[440px]">
              <img
                src={slide.bg}
                alt={`Hero banner ${index + 1}`}
                className="w-full h-full object-fill object-top"
              />
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="hidden md:flex absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 gap-2 z-10">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? 'bg-yellow-400 w-6 sm:w-8' : 'bg-white/40 w-2'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
