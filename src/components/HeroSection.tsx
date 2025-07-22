import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Users, Star, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary">
                <Star className="w-4 h-4 fill-current" />
                Top Crypto Community Manager
              </div>
              
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight">
                I am
                <span className="block text-primary">
                  Canes
                </span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Expert Community Manager specializing in <span className="text-primary font-semibold">meme coins</span>, 
              engagement boosting, and building loyal crypto communities across all platforms.
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-warm transition-all duration-300">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Members Managed</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-warm transition-all duration-300">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">CM • MOD • RAIDER</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">REPLY GUY • BOOSTER</span>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-warm"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-bounce delay-700"></div>
              
              {/* Main image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/66188365-0df5-4037-a97a-64ba5b4198ba.png" 
                  alt="Canes - Professional Community Manager and Crypto Engagement Expert"
                  className="relative z-10 w-[450px] h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] object-cover rounded-full shadow-glow animate-float border-8 border-card"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-full px-4 py-2 shadow-lg animate-float delay-1000">
                  <span className="text-sm font-semibold text-primary">🚀 Community Expert</span>
                </div>
                
                <div className="absolute -bottom-8 right-8 bg-card border border-border rounded-full px-4 py-2 shadow-lg animate-float delay-500">
                  <span className="text-sm font-semibold text-primary">⚡ Engagement Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;