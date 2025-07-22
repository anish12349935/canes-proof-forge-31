import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, TrendingUp, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { icon: Shield, title: "Community Moderation", description: "Expert in maintaining healthy community environments" },
    { icon: Zap, title: "Engagement Boosting", description: "Proven strategies to increase community participation" },
    { icon: TrendingUp, title: "Growth Hacking", description: "Scaling communities from zero to thousands" },
    { icon: Users, title: "Team Leadership", description: "Managing and coordinating community teams" }
  ];

  const platforms = ["Telegram", "Twitter/X", "Discord", "Reddit", "TikTok"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-warm-gradient bg-clip-text text-transparent">Canes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional community manager with expertise in crypto engagement, meme coin communities, 
            and building loyal audiences across multiple platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I specialize in building and managing vibrant communities around meme coins and crypto projects. 
              My approach combines strategic engagement, authentic community building, and proven growth tactics 
              to create lasting connections between projects and their audiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With extensive experience as a Community Manager, Moderator, and Engagement Specialist, 
              I help projects achieve sustainable growth while maintaining authentic community relationships.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Platforms I Excel On</h3>
            <div className="flex flex-wrap gap-3">
              {platforms.map((platform) => (
                <Badge 
                  key={platform} 
                  variant="secondary" 
                  className="text-lg py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {platform}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="border-border hover:shadow-warm transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h4>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;