import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThreeDPreview = () => {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(previewRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotateY: -15
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto text-center w-full bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-green-400 to-green-500 bg-clip-text text-transparent">
          Experience KineticKicks in 3D
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
          Get a closer look at the revolutionary technology that's changing the way we think about footwear
        </p>

        <div
          ref={previewRef}
          className="relative max-w-4xl mx-auto"
        >
          {/* Placeholder for future Three.js integration */}
          <div
            id="shoe-3d-viewer"
            className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-gray-700 overflow-hidden"
            style={{ aspectRatio: '16/9' }}
          >
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.1),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,136,0.05),transparent_50%)]"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full" style={{
                backgroundImage: `linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full p-4 sm:p-6 lg:p-8">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6 lg:mb-8 animate-pulse">👟</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
                  Explore the Shoe in 3D
                </h3>
                <p className="text-lg sm:text-xl text-green-400 mb-6 sm:mb-8 font-semibold">
                  Coming Soon
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 text-gray-400 text-sm sm:text-base">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>360° Rotation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span>Zoom Controls</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span>Interactive Demo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-3xl blur-xl opacity-50"></div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -top-1 sm:-top-2 -right-3 sm:-right-6 w-4 sm:w-6 h-4 sm:h-6 bg-green-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-3 sm:-bottom-6 -left-1 sm:-left-2 w-3 sm:w-4 h-3 sm:h-4 bg-green-300 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 border-2 border-green-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="mt-8 sm:mt-12">
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Our development team is working on an interactive 3D experience
          </p>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-bold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] text-sm sm:text-base">
            Get Notified When Ready
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreeDPreview;
