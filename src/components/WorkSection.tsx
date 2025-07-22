import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, MessageSquare } from "lucide-react";

const WorkSection = () => {
  const projects = [
    {
      title: "Meme Coin Launch Campaign",
      description: "Managed complete community launch strategy for new meme coin, growing from 0 to 50K followers in 30 days",
      metrics: ["50K+ Followers", "2M+ Engagement", "500% Growth"],
      platforms: ["Telegram", "Twitter", "Discord"],
      type: "Community Management"
    },
    {
      title: "Telegram Community Moderation",
      description: "Established moderation protocols and community guidelines for high-volume crypto trading group",
      metrics: ["25K+ Members", "99% Spam Reduction", "24/7 Coverage"],
      platforms: ["Telegram"],
      type: "Moderation"
    },
    {
      title: "Twitter Engagement Campaign",
      description: "Executed strategic reply campaigns and engagement boosting for crypto influencers and projects",
      metrics: ["5M+ Impressions", "150% Engagement↑", "10K+ Replies"],
      platforms: ["Twitter/X"],
      type: "Engagement Boost"
    },
    {
      title: "Cross-Platform Raids",
      description: "Coordinated community raids and promotional activities across multiple social media platforms",
      metrics: ["100+ Coordinated Raids", "1M+ Reach", "25% Conversion"],
      platforms: ["Twitter", "Telegram", "Discord"],
      type: "Growth Hacking"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Community Management": return "bg-primary/10 text-primary";
      case "Moderation": return "bg-accent/10 text-accent";
      case "Engagement Boost": return "bg-secondary/50 text-secondary-foreground";
      case "Growth Hacking": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-warm-gradient bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven results in community building, engagement, and growth across the crypto ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border hover:shadow-warm transition-all duration-300 group overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge className={getTypeColor(project.type)}>
                    {project.type}
                  </Badge>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-primary">{metric.split(' ')[0]}</div>
                      <div className="text-sm text-muted-foreground">{metric.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.platforms.map((platform) => (
                    <Badge key={platform} variant="outline" className="text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">500K+</div>
              <div className="text-muted-foreground">Total Community Members Managed</div>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">1000%</div>
              <div className="text-muted-foreground">Average Community Growth</div>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">10M+</div>
              <div className="text-muted-foreground">Engagement Interactions Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;