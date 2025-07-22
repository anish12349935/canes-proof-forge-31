import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, Twitter, Users } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to <span className="text-secondary">Grow Your Community?</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Let's discuss how I can help take your project to the next level with proven community management strategies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-card/20 backdrop-blur-sm border-primary-foreground/20 animate-fade-in hover-scale" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-foreground mb-4">What I Offer</h3>
                <ul className="space-y-3 text-primary-foreground/90">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Complete community management setup
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    24/7 moderation and engagement
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Strategic growth campaigns
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Cross-platform coordination
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Meme coin community expertise
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/20 backdrop-blur-sm border-primary-foreground/20 animate-fade-in hover-scale" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-foreground mb-4">Quick Response</h3>
                <p className="text-primary-foreground/90 mb-4">
                  I typically respond within 2 hours and can start working on your project within 24 hours.
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <Send className="w-4 h-4 animate-pulse" />
                  <span className="font-medium">Fast turnaround guaranteed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-primary-foreground mb-6">Get In Touch</h3>
            </div>

            <div className="grid gap-4">
              <Button 
                size="lg" 
                className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white flex items-center gap-3 justify-center py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <Twitter className="w-6 h-6" />
                Connect on Twitter/X
              </Button>
              
              <Button 
                size="lg" 
                className="bg-[#0088cc] hover:bg-[#006699] text-white flex items-center gap-3 justify-center py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: "1s" }}
              >
                <MessageCircle className="w-6 h-6" />
                Message on Telegram
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 flex items-center gap-3 justify-center py-6 text-lg font-medium transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: "1.2s" }}
              >
                <Users className="w-6 h-6" />
                Join My Community
              </Button>
            </div>

            <div className="text-center pt-6">
              <p className="text-primary-foreground/70 text-sm">
                Available for new projects • Flexible packages • Results guaranteed
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="mt-20 pt-12 border-t border-primary-foreground/20">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-3">Canes</h4>
              <p className="text-primary-foreground/80 text-sm">
                Professional Community Manager specializing in meme coins and crypto engagement
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-3">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>Community Management</li>
                <li>Moderation & Raiding</li>
                <li>Engagement Boosting</li>
                <li>Growth Strategies</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-3">Stats</h4>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>500K+ Members Managed</li>
                <li>50+ Projects Completed</li>
                <li>24/7 Availability</li>
                <li>Proven Results</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Canes. All rights reserved. | Expert Community Management & Crypto Engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;