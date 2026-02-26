
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I claim the new player welcome bonus?',
    answer: 'Kingbet9 offers Australian new players up to AUD $500 with a 100% welcome bonus. Simply complete registration and make your first deposit to automatically receive it. The bonus will be credited immediately after your deposit and can be used for all slot games products.'
  },
  {
    question: 'What is the registration and gaming process at Kingbet9?',
    answer: 'Registration is very simple: 1) Click the "Register" button and fill in basic information; 2) Verify your phone number; 3) Choose a deposit method to fund your account; 4) Select your favorite games to start playing. The entire process takes just a few minutes.'
  },
  {
    question: 'Is online casino gaming safe in Australia?',
    answer: 'Kingbet9 holds proper gaming licenses and uses SSL encryption technology to protect your personal information and fund security. Our games are provided by internationally renowned suppliers and certified by third-party agencies to ensure fairness. We also support responsible gambling and provide various self-protection tools for players.'
  },
  {
    question: 'What is Kingbet9\'s legal status in Australia?',
    answer: 'Kingbet9 strictly complies with relevant Australian laws and regulations and holds overseas gaming operation licenses. We provide legal online entertainment services for adult Australian players (18+ years old) and strictly implement anti-money laundering and customer identity verification policies.'
  },
  {
    question: 'What deposit and withdrawal methods are supported?',
    answer: 'Kingbet9 supports multiple convenient deposit and withdrawal methods: bank transfers, credit/debit cards, e-wallets and cryptocurrencies (Bitcoin, Ethereum, USDT). Deposits are instant, and withdrawals are usually processed within 24 hours.'
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-8 md:py-12 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4" style={{fontFamily:'Orbitron,sans-serif'}}>
            KINGBET9 FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Check answers to the most common questions from Australian players. For other inquiries, please contact our 24/7 customer service team anytime.
          </p>
        </div>
        <div className="space-y-3 md:space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-r from-[#1a1a1a] to-[#111111] border border-yellow-400/20 rounded-lg overflow-hidden hover:border-yellow-400/40 transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 md:px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-black/30 transition-colors"
              >
                <span className="text-white font-bold pr-4 text-sm md:text-base">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center">
                  <i className={`ri-arrow-${openIndex === index ? 'up' : 'down'}-s-line text-yellow-400 text-lg`}></i>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-6">
                  <div className="pt-4 border-t border-yellow-400/10">
                    <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <a 
            href="https://king9aus.net/RFESTERSEO"
            className="inline-block px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black text-base md:text-lg rounded-md hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Join Kingbet9 Now
          </a>
          <p className="text-gray-500 text-xs mt-3">18+ | Responsible Gaming | Terms & Conditions Apply</p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
