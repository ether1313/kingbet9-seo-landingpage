import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Announcement from './components/Announcement';
import GameCategories from './components/GameCategories';
import LatestPromotion from './components/LatestPromotion';
import VideoSection from './components/VideoSection';
import UpcomingMatches from './components/UpcomingMatches';
import LiveCasino from './components/LiveCasino';
import HotGames from './components/HotGames';
import GameBanners from './components/GameBanners';
import BitcoinSection from './components/BitcoinSection';
import AppDownload from './components/AppDownload';
import Providers from './components/Providers';
import FAQs from './components/FAQs';
import SEOContent from './components/SEOContent';
import Footer from './components/Footer';

const HomePage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0e13] pb-[calc(5.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <Navbar />
      <HeroBanner />
      <Announcement />
      <GameCategories />
      <LatestPromotion />
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 md:py-12">
          <div className="lg:col-span-7">
            <VideoSection />
            <UpcomingMatches />
          </div>
          <div className="lg:col-span-5">
            <LiveCasino />
          </div>
        </div>
      </div>
      <HotGames />
      <GameBanners />
      <BitcoinSection />
      <AppDownload />
      <Providers />
      <FAQs />
      <SEOContent />
      <Footer />
      
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 lg:bottom-8 right-4 md:right-6 lg:right-8 z-50 w-11 h-11 md:w-12 md:h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          <i className="ri-arrow-up-line text-2xl text-black"></i>
        </button>
      )}
    </div>
  );
};

export default HomePage;
