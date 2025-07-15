import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface HeroProps {
  onExploreClick?: () => void;
}

const Hero = ({ onExploreClick }: HeroProps) => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Simple entrance animations
    const tl = gsap.timeline();
    
    tl.fromTo(headlineRef.current, 
      { 
        y: 50, 
        opacity: 0
      },
      { 
        y: 0, 
        opacity: 1,
        duration: 1, 
        ease: 'power2.out' 
      }
    )
    .fromTo(subheadlineRef.current, 
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power2.out' 
      }, '-=0.5'
    )
    .fromTo(buttonRef.current, 
      { 
        y: 20, 
        opacity: 0
      },
      { 
        y: 0, 
        opacity: 1,
        duration: 0.6, 
        ease: 'power2.out' 
      }, '-=0.4'
    );
  }, []);

  const handleScroll = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('how-it-works');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Simple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.1),transparent_70%)]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Brand badge */}
        <div className="mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-green-400/10 border border-green-400/20 rounded-full inline-block">
          <span className="text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Innovation Showcase</span>
        </div>

        {/* Main heading */}
        <h1
          ref={headlineRef}
          className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-6 sm:mb-8"
        >
          <span className="block bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
            KINETIC
          </span>
          <span className="block bg-gradient-to-r from-green-400 via-green-300 to-green-400 bg-clip-text text-transparent -mt-2 sm:-mt-4">
            KICKS
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subheadlineRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          Exploring the future of <span className="text-green-400 font-semibold">wearable energy harvesting</span>. 
          A groundbreaking concept that turns human movement into sustainable power.
        </p>

        {/* CTA buttons */}
        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
          <button 
            onClick={handleScroll}
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-green-400 text-black font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:bg-green-300 hover:scale-105"
          >
            Explore the Innovation
          </button>
          
          <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 border-green-400/50 text-green-400 font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:border-green-400 hover:bg-green-400/10">
            View Research
          </button>
        </div>

        {/* Simple stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-2xl sm:max-w-4xl mx-auto px-4 sm:px-0">
          <div className="text-center p-4 bg-gray-900/20 rounded-xl border border-gray-700/50">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">50W</div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Theoretical Output</div>
          </div>
          <div className="text-center p-4 bg-gray-900/20 rounded-xl border border-gray-700/50">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">85%</div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Energy Efficiency</div>
          </div>
          <div className="text-center p-4 bg-gray-900/20 rounded-xl border border-gray-700/50 sm:col-span-2 lg:col-span-1">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Clean Energy</div>
          </div>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="text-green-400 text-xs mb-2 opacity-70">Scroll Down</div>
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-green-400/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-green-400 rounded-full mt-1.5 sm:mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
