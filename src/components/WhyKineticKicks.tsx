import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyKineticKicks = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(cards, 
      {
        opacity: 0,
        y: 60,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const features = [
    {
      icon: "💰",
      title: "Cost-Saving",
      description: "Reduce your electricity bills by generating power with every step you take."
    },
    {
      icon: "🌱",
      title: "Eco-Friendly",
      description: "Clean, renewable energy source that helps reduce your carbon footprint."
    },
    {
      icon: "⚡",
      title: "Off-Grid Charging",
      description: "Stay powered anywhere, anytime. Perfect for outdoor adventures and emergencies."
    },
    {
      icon: "👟",
      title: "Stylish Tech",
      description: "Cutting-edge design meets comfort. Fashion-forward shoes with hidden superpowers."
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto w-full bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-green-400 to-green-500 bg-clip-text text-transparent">
            Why KineticKicks?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
            Revolutionary footwear technology that transforms every step into sustainable energy
          </p>
        </div>

        <div className="bento-grid max-w-6xl mx-auto">
          {/* Large feature card */}
          <div
            ref={(el) => { cardsRef.current[0] = el; }}
            className="bento-item bento-large group relative backdrop-blur-sm transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center text-center sm:text-left">
              <div className="text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center sm:justify-start">
                {features[0].icon}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                {features[0].title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {features[0].description}
              </p>
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">50%</div>
                <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">Average savings on energy bills</div>
              </div>
            </div>
          </div>

          {/* Medium feature cards */}
          <div
            ref={(el) => { cardsRef.current[1] = el; }}
            className="bento-item bento-wide group relative backdrop-blur-sm transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center text-center">
              <div className="text-3xl sm:text-4xl lg:text-6xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {features[1].icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                {features[1].title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Small feature cards */}
          <div
            ref={(el) => { cardsRef.current[2] = el; }}
            className="bento-item bento-small group relative backdrop-blur-sm transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center text-center">
              <div className="text-2xl sm:text-3xl lg:text-5xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {features[2].icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">
                {features[2].title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {features[2].description}
              </p>
            </div>
          </div>

          <div
            ref={(el) => { cardsRef.current[3] = el; }}
            className="bento-item bento-small group relative backdrop-blur-sm transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center text-center">
              <div className="text-2xl sm:text-3xl lg:text-5xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {features[3].icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">
                {features[3].title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {features[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* Additional stats section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
              50W
            </div>
            <div className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Power Output per Hour
            </div>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
              24/7
            </div>
            <div className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Energy Generation
            </div>
          </div>
          <div className="group sm:col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
              100%
            </div>
            <div className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Sustainable Energy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKineticKicks;
