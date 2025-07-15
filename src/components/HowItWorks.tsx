import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { Zap, Footprints, Battery} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const steps = stepsRef.current;
    
    gsap.fromTo(steps,
      {
        opacity: 0,
        y: 80,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const steps = [
    {
      number: "01",
      icon: <Footprints className="w-12 h-12 text-green-400" />,
      title: "Walk",
      description: "Simply put on your KineticKicks and start walking. Every step activates the built-in energy harvesting technology."
    },
    {
      number: "02", 
      icon: <Zap className="w-12 h-12 text-green-400" />,
      title: "Generate",
      description: "Advanced piezoelectric technology converts the mechanical energy from your footsteps into electrical power."
    },
    {
      number: "03",
      icon: <Battery className="w-12 h-12 text-green-400" />,
      title: "Charge",
      description: "Store energy in the built-in battery or directly charge your devices through the integrated USB-C port."
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="min-h-screen flex items-center justify-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto w-full bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 sm:mb-6 bg-green-400/10 border-green-400/20 text-green-400 text-xs sm:text-sm">
            Revolutionary Technology
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-green-400 to-green-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
            Revolutionary energy harvesting technology in three simple steps
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full mb-8 sm:mb-12">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 border border-gray-700 h-10 sm:h-12">
            <TabsTrigger value="overview" className="data-[state=active]:bg-green-400/20 data-[state=active]:text-green-400 text-xs sm:text-sm">
              Overview
            </TabsTrigger>
            <TabsTrigger value="technical" className="data-[state=active]:bg-green-400/20 data-[state=active]:text-green-400 text-xs sm:text-sm">
              Technical Details
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
            <div className="bento-grid max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className={`${index === 1 ? 'bento-wide' : 'bento-small'} group relative transition-all duration-500 bg-gray-800/50 border-gray-700 hover:border-green-400/50 hover:bg-gray-800/70`}
                >
                  {/* Connection line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-green-500 z-20 transform -translate-y-1/2">
                      <div className="absolute right-0 top-1/2 w-0 h-0 border-l-4 border-r-0 border-t-2 border-b-2 border-l-green-500 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
                    </div>
                  )}

                  <CardHeader className="text-center p-4 sm:p-6">
                    <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold rounded-full flex items-center justify-center text-xs sm:text-sm">
                      {step.number}
                    </div>
                    <div className="mb-3 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <CardTitle className={`${index === 1 ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'} font-bold text-white group-hover:text-green-400 transition-colors duration-300`}>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center p-4 sm:p-6 pt-0">
                    <CardDescription className={`text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 ${index === 1 ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
                      {step.description}
                    </CardDescription>

                    {/* Additional info for middle card */}
                    {index === 1 && (
                      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-green-400">85%</div>
                          <div className="text-xs text-gray-400">Efficiency</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-green-400">50W</div>
                          <div className="text-xs text-gray-400">Power/Hr</div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="technical" className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-green-400 text-lg sm:text-xl">Energy Conversion</CardTitle>
                  <CardDescription className="text-sm sm:text-base">Real-time efficiency metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Piezoelectric Efficiency</span>
                      <span className="text-green-400">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Energy Storage</span>
                      <span className="text-green-400">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall System</span>
                      <span className="text-green-400">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-green-400 text-lg sm:text-xl">Power Output</CardTitle>
                  <CardDescription className="text-sm sm:text-base">Expected power generation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                      <AvatarFallback className="bg-green-400/20 text-green-400">
                        <Footprints className="w-3 h-3 sm:w-4 sm:h-4" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs sm:text-sm">Walking (3 mph): 25W</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                      <AvatarFallback className="bg-green-400/20 text-green-400">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs sm:text-sm">Jogging (6 mph): 50W</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                      <AvatarFallback className="bg-green-400/20 text-green-400">
                        <Battery className="w-3 h-3 sm:w-4 sm:h-4" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs sm:text-sm">Running (8 mph): 75W</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional info section */}
        <div className="mt-16 sm:mt-20 text-center">
          <Card className="bg-gradient-to-r from-gray-900/50 via-black to-gray-900/50 border-gray-700">
            <CardHeader className="p-4 sm:p-6 md:p-8">
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-2 sm:mb-4">
                Energy Efficiency
              </CardTitle>
              <CardDescription className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
                Our proprietary piezoelectric technology converts up to 85% of kinetic energy into usable electrical power, 
                making KineticKicks the most efficient energy-harvesting footwear on the market.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 md:p-8 pt-0">
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-center mb-6 sm:mb-8">
                <div className="flex-1 sm:flex-none">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">85%</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Energy Conversion</div>
                </div>
                <div className="flex-1 sm:flex-none">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">50W</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Power Output/Hour</div>
                </div>
                <div className="flex-1 sm:flex-none">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">10K</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Steps = Full Charge</div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3">
                  Learn More About Our Technology
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
