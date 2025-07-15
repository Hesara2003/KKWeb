import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(footerRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900/50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              KineticKicks
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Revolutionary footwear that transforms every step into sustainable energy. 
              Join the future of wearable technology and clean energy generation.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl sm:text-2xl">
                📱
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl sm:text-2xl">
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl sm:text-2xl">
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl sm:text-2xl">
                💼
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">Specifications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">Pre-order</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2025 KineticKicks. All rights reserved. Powering the future, one step at a time.
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-center">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-center">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-center">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Energy indicator */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-green-400/10 rounded-full border border-green-400/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs sm:text-sm font-medium">
              This website is powered by renewable energy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
