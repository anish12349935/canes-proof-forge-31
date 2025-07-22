import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

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

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Client <span className="bg-warm-gradient bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what crypto projects and community leaders say about working with Canes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-warm transition-all duration-300 relative overflow-hidden group">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
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

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="text-lg font-semibold text-primary">4.9/5 Average Rating</span>
            <span className="text-muted-foreground">• 50+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;