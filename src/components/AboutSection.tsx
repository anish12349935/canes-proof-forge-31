import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, TrendingUp, Users, Trophy, Target, Globe, MessageCircle } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { icon: Shield, title: "Community Moderation", description: "Expert in maintaining healthy community environments with proactive moderation" },
    { icon: Zap, title: "Engagement Boosting", description: "Proven strategies to increase community participation by 300%+" },
    { icon: TrendingUp, title: "Growth Hacking", description: "Scaling communities from zero to 50K+ members rapidly" },
    { icon: Users, title: "Team Leadership", description: "Managing and coordinating community teams across multiple platforms" },
    { icon: Trophy, title: "Campaign Management", description: "Running successful viral campaigns and community events" },
    { icon: Target, title: "Strategic Planning", description: "Developing long-term community growth and retention strategies" }
  ];

  const achievements = [
    { number: "50K+", label: "Community Members Grown", icon: Users },
    { number: "300%", label: "Average Engagement Boost", icon: TrendingUp },
    { number: "24/7", label: "Community Support", icon: MessageCircle },
    { number: "5+", label: "Platforms Mastered", icon: Globe }
  ];

  const platforms = ["Telegram", "Twitter/X", "Discord", "Reddit", "TikTok", "Instagram"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-warm-gradient bg-clip-text text-transparent">Canes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elite community strategist specializing in explosive crypto growth, viral meme coin campaigns, 
            and building unstoppable communities that dominate the space.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-warm transition-all duration-300 animate-fade-in hover-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:animate-pulse" />
              <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-6 bg-warm-gradient bg-clip-text text-transparent">
              The Canes Advantage
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I don't just manage communities—I architect viral ecosystems. My proven methodology transforms 
              dead chats into thriving hubs where every member becomes an evangelist for your project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From zero to moon mission, I've mastered the art of crypto community psychology, turning 
              holders into believers and believers into unstoppable advocates.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary mb-3">🚀 What Makes Me Different</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Deep understanding of crypto culture and meme psychology</li>
                <li>• 24/7 dedication with strategic engagement timing</li>
                <li>• Proven track record of viral campaign creation</li>
                <li>• Expert at turning FUD into FOMO</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Platform Mastery</h3>
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((platform, index) => (
                <Badge 
                  key={platform} 
                  variant="secondary" 
                  className="text-lg py-3 px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover-scale justify-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {platform}
                </Badge>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">🎯 Specialized Services</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Reply Guy Services & Engagement Amplification</div>
                <div>• Viral Campaign Strategy & Execution</div>
                <div>• Community Psychology & Behavior Analysis</div>
                <div>• Cross-Platform Growth Synchronization</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-warm transition-all duration-500 group hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:animate-pulse">
                  <skill.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{skill.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;