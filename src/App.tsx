import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyKineticKicks from './components/WhyKineticKicks'
import ThreeDPreview from './components/ThreeDPreview'
import Testimonials from './components/Testimonials'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

function App() {
  const handleExploreClick = () => {
    // Scroll to How It Works section
    const howItWorksSection = document.getElementById('how-it-works')
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handlePreOrderClick = () => {
    // Handle pre-order logic
    console.log('Pre-order clicked')
    alert('Pre-order functionality coming soon!')
  }

  const handleSubscribeClick = (email: string) => {
    // Handle email subscription
    console.log('Subscribe clicked with email:', email)
    alert(`Thank you for subscribing with ${email}!`)
  }

  return (
    <div className="relative bg-black text-white font-['Sora',sans-serif] overflow-x-hidden">
      {/* Simple modern background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
        
        {/* Subtle accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-green-400/5"></div>
        
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Simple floating dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-2 h-2 bg-green-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        <div id="hero" className="pt-16">
          <Hero onExploreClick={handleExploreClick} />
        </div>
        <div id="how-it-works" data-section="how-it-works" className="scroll-mt-16">
          <HowItWorks />
        </div>
        <div id="features" className="scroll-mt-16">
          <WhyKineticKicks />
        </div>
        <div id="innovation" className="scroll-mt-16">
          <ThreeDPreview />
        </div>
        <div id="research" className="scroll-mt-16">
          <Testimonials />
        </div>
        <FooterCTA 
          onPreOrderClick={handlePreOrderClick}
          onSubscribeClick={handleSubscribeClick}
        />
        <Footer />
      </div>

      {/* Simple background animations */}
      <style>{`
        @keyframes simplePulse {
          0%, 100% { 
            opacity: 0.1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.3;
            transform: scale(1.2);
          }
        }
        
        @keyframes simpleFloat {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default App
