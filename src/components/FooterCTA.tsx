import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FooterCTAProps {
  onPreOrderClick?: () => void;
  onSubscribeClick?: (email: string) => void;
}

export default function FooterCTA({ onPreOrderClick, onSubscribeClick }: FooterCTAProps) {
  const [email, setEmail] = useState('');
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const handleSubscribe = () => {
    if (email && onSubscribeClick) {
      onSubscribeClick(email);
      setEmail('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.05),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>
      </div>

      <div ref={contentRef} className="relative max-w-5xl mx-auto text-center w-full bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-green-400 to-green-500 bg-clip-text text-transparent">
            Be Part of the Energy Revolution
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Join thousands of early adopters who are already generating power with every step they take.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
          <button 
            onClick={onPreOrderClick}
            className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-green-600 text-black font-bold text-lg sm:text-xl rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_40px_rgba(0,255,136,0.6)]"
          >
            <span className="relative z-10">Pre-order Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          </button>
          
          <div className="text-gray-400 text-base sm:text-lg">or</div>
          
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-400 text-green-400 font-bold text-base sm:text-lg rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Email Subscription */}
        <div className="max-w-md mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Stay Updated</h3>
          <div className="flex flex-col sm:flex-row gap-3 mb-3 sm:mb-4">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 sm:py-4 bg-gray-900/70 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300 text-sm sm:text-base"
            />
            <button 
              onClick={handleSubscribe}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-bold rounded-xl hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">
            Get exclusive updates on launch date and early bird pricing
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          <div className="group cursor-pointer">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">🔒</div>
            <div className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">Secure Checkout</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">🚚</div>
            <div className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">Free Shipping</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">↩️</div>
            <div className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">30-Day Returns</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">🏆</div>
            <div className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">2-Year Warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
} 