import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Project Founder",
      project: "MemeCoin Pro",
      avatar: "AC",
      rating: 5,
      text: "Canes transformed our community from 500 to 50K members in just 2 months. His engagement strategies are unmatched in the crypto space."
    },
    {
      name: "Sarah Martinez",
      role: "Marketing Director",
      project: "CryptoRise",
      avatar: "SM",
      rating: 5,
      text: "Working with Canes was a game-changer. His moderation skills and community building expertise helped us maintain a healthy, engaged community."
    },
    {
      name: "Mike Thompson",
      role: "Community Lead",
      project: "DeFi Moon",
      avatar: "MT",
      rating: 5,
      text: "Canes' reply guy services and engagement boosting delivered incredible results. Our Twitter engagement increased by 300% within weeks."
    },
    {
      name: "Jessica Liu",
      role: "Founder",
      project: "Meme Kingdom",
      avatar: "JL",
      rating: 5,
      text: "Professional, reliable, and results-driven. Canes understands the meme coin space like no one else. Highly recommended!"
    }
  ];

  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Client <span className="bg-warm-gradient bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what crypto projects and community leaders say about working with Canes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`border-border hover:shadow-warm transition-all duration-1000 relative overflow-hidden group hover-scale ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: isVisible ? `${200 + (index * 200)}ms` : '0ms'
              }}
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-all duration-300 group-hover:animate-pulse">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-primary text-primary group-hover:animate-pulse transition-all duration-300" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold group-hover:bg-primary/20 transition-colors duration-300">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.project}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;