
import kingbet9Logo from '../../../assets/kingbet9-logo.png';
import paymentMethodsBanner from '../../../assets/payment-methods-banner.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0d0d0d] to-[#000000] border-t border-yellow-400/10">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="sm:col-span-2 md:col-span-1 text-center sm:text-left">
              <div className="mb-4 flex justify-center sm:justify-start">
                <img
                  src={kingbet9Logo}
                  alt="Site logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-md mx-auto sm:mx-0">
                Australia's most trusted online entertainment platform, offering live casino, online slots pokies, and fishing games services.
              </p>
              <div className="flex gap-3 justify-center sm:justify-start">
                <a href="https://king9aus.net/RFESTERSEO" className="w-10 h-10 bg-[#1a1a1a] border border-yellow-400/30 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="https://king9aus.net/RFESTERSEO" className="w-10 h-10 bg-[#1a1a1a] border border-yellow-400/30 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a href="https://king9aus.net/RFESTERSEO" className="w-10 h-10 bg-[#1a1a1a] border border-yellow-400/30 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="https://king9aus.net/RFESTERSEO" className="w-10 h-10 bg-[#1a1a1a] border border-yellow-400/30 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                  <i className="ri-telegram-fill"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h5 className="text-white font-bold mb-4 text-sm">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="https://king9aus.net/RFESTERSEO" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm cursor-pointer">About Us</a></li>
                <li><a href="https://king9aus.net/RFESTERSEO" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm cursor-pointer">Live Casino</a></li>
                <li><a href="https://king9aus.net/RFESTERSEO" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm cursor-pointer">Online Slots</a></li>
                <li><a href="https://king9aus.net/RFESTERSEO" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm cursor-pointer">Promotions</a></li>
                <li><a href="https://king9aus.net/RFESTERSEO" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm cursor-pointer">VIP Members</a></li>
              </ul>
            </div>

            {/* Customer Support */}
            <div className="text-center sm:text-left">
              <h5 className="text-white font-bold mb-4 text-sm">Customer Support</h5>
              <ul className="space-y-2">
                <li><a href="https://king9aus.net/RFESTERSEO" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm cursor-pointer">Help Centre</a></li>
                <li><a href="https://king9aus.net/RFESTERSEO" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm cursor-pointer">Contact Us</a></li>
                <li><a href="https://king9aus.net/RFESTERSEO" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm cursor-pointer">Responsible Gambling</a></li>
                <li><a href="https://king9aus.net/RFESTERSEO" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm cursor-pointer">Terms &amp; Conditions</a></li>
                <li><a href="https://king9aus.net/RFESTERSEO" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm cursor-pointer">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Security & Payments */}
            <div className="sm:col-span-2 md:col-span-1 text-center sm:text-left">
              <h5 className="text-white font-bold mb-4 text-sm">Security &amp; Certifications</h5>
              <div className="grid grid-cols-2 gap-2 mb-4 max-w-[220px] mx-auto sm:mx-0">
                <img src="https://www.md88malaysia.com/images/gaming-curacao.11924b2c.png" alt="Curacao License" className="h-8 mx-auto sm:mx-0 opacity-80 hover:opacity-100 transition-opacity" />
                <img src="https://www.md88malaysia.com/images/cert-1.1cc26ee8.png" alt="BMM Testlabs" className="h-8 mx-auto sm:mx-0 opacity-80 hover:opacity-100 transition-opacity" />
                <img src="https://www.md88malaysia.com/images/cert-2.d03ed428.png" alt="iTech Labs" className="h-8 mx-auto sm:mx-0 opacity-80 hover:opacity-100 transition-opacity" />
                <img src="https://www.md88malaysia.com/images/cert-3.1ba00de8.png" alt="Secure Payouts" className="h-8 mx-auto sm:mx-0 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <h6 className="text-white font-semibold mb-2 text-xs">Payment Methods</h6>
              <div className="flex justify-center sm:justify-start">
                <img
                  src={paymentMethodsBanner}
                  alt="Accepted payment methods"
                  className="w-full max-w-[360px] h-auto rounded-md opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-400/10 py-5 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
            <div className="flex items-center gap-3 md:gap-6 flex-wrap justify-center md:justify-start text-center md:text-left">
              <p>© 2026 Kingbet9 Online Casino. All Rights Reserved.</p>
              <div className="flex items-center gap-1">
                <span>Licensed &amp; Regulated in Australia</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-yellow-400 text-xs">18+ | Responsible Gambling</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
