import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const testimonialsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const testimonials = testimonialsRef.current;
    
    gsap.fromTo(testimonials,
      {
        opacity: 0,
        y: 60,
        rotateX: 15
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.2,
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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Environmental Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e99e15?w=150&h=150&fit=crop&crop=face",
      quote: "KineticKicks have completely changed how I think about sustainable technology. I generate enough power during my daily commute to charge my phone and smartwatch!",
      rating: 5,
      fullReview: "The integration of piezoelectric technology into everyday footwear is brilliant. I've been using KineticKicks for 6 months now, and the energy output is consistent and reliable. The comfort level is outstanding, and I love the fact that I'm contributing to sustainable energy just by walking."
    },
    {
      name: "Marcus Rodriguez",
      role: "Trail Runner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Perfect for long-distance trails where power sources are scarce. The comfort is incredible, and knowing I'm generating clean energy makes every step meaningful.",
      rating: 5,
      fullReview: "As someone who spends hours on mountain trails, having a reliable power source is crucial. KineticKicks not only provide excellent support and comfort during long runs, but they also keep my GPS device and emergency phone charged. The technology is truly revolutionary."
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Scientist",
      avatar: "https://images.unsplash.com/photo-1559209172-0ff8f687c8b0?w=150&h=150&fit=crop&crop=face",
      quote: "The technology behind KineticKicks is revolutionary. As someone who studies renewable energy, I'm impressed by the efficiency and real-world application.",
      rating: 5,
      fullReview: "From a scientific perspective, the energy conversion efficiency is remarkable. The materials used are durable, and the power output is consistent across different walking speeds and terrains. This represents a significant advancement in wearable energy harvesting technology."
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto w-full bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 sm:mb-6 bg-green-400/10 border-green-400/20 text-green-400 text-xs sm:text-sm">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-green-400 to-green-500 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
            Join thousands of satisfied customers who are already powering their lives with every step
          </p>
        </div>

        <div className="bento-grid max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              ref={(el) => { testimonialsRef.current[index] = el; }}
              className={`${index === 0 ? 'bento-wide' : 'bento-small'} group relative transition-all duration-500 bg-gray-800/50 border-gray-700 hover:border-green-400/50 hover:bg-gray-800/70`}
            >
              <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-green-400/20 text-green-400 text-sm sm:text-base">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-white group-hover:text-green-400 transition-colors duration-300 text-sm sm:text-base lg:text-lg truncate">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-xs sm:text-sm truncate">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 self-start sm:self-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-green-400 text-green-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 p-4 sm:p-6">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-green-400/60 mb-3 sm:mb-4" />
                <p className={`text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300 ${index === 0 ? 'text-sm sm:text-base lg:text-lg' : 'text-sm sm:text-base'}`}>
                  {testimonial.quote}
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-green-400/30 text-green-400 hover:bg-green-400/10 text-xs sm:text-sm py-2 sm:py-3">
                      Read Full Review
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md sm:max-w-lg mx-4 sm:mx-auto">
                    <DialogHeader className="space-y-3 sm:space-y-4">
                      <DialogTitle className="flex items-center space-x-3 text-base sm:text-lg">
                        <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-green-400/20 text-green-400 text-xs sm:text-sm">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="truncate">{testimonial.name}</span>
                      </DialogTitle>
                      <DialogDescription className="text-gray-400 text-sm sm:text-base">
                        {testimonial.role}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 sm:space-y-4 mt-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-green-400 text-green-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {testimonial.fullReview}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social proof section */}
        <div className="mt-16 sm:mt-20 text-center">
          <Card className="bg-gradient-to-r from-gray-900/40 via-black to-gray-900/40 border-gray-700">
            <CardHeader className="p-4 sm:p-6 md:p-8">
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
                Trusted by Innovators Worldwide
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 md:p-8 pt-0">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center p-3 sm:p-4 bg-gray-800/30 rounded-lg">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2">10K+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Happy Customers</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gray-800/30 rounded-lg">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2">50+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Countries</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gray-800/30 rounded-lg">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2">4.9★</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Average Rating</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gray-800/30 rounded-lg">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2">100%</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
