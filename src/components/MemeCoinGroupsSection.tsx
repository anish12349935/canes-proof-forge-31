import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Crown, Shield, TrendingUp } from "lucide-react";

const MemeCoinGroupsSection = () => {
  const groups = [
    {
      id: 1,
      name: "DOGE Army",
      members: "250K+",
      platform: "Telegram",
      role: "Admin",
      growth: "+45%",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "SHIB Warriors",
      members: "180K+",
      platform: "Discord",
      role: "Admin",
      growth: "+38%",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "PEPE Holders",
      members: "320K+",
      platform: "Telegram",
      role: "Admin",
      growth: "+62%",
      image: "https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "FLOKI Nation",
      members: "95K+",
      platform: "Twitter",
      role: "Admin",
      growth: "+28%",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      name: "BONK Community",
      members: "140K+",
      platform: "Telegram",
      role: "Admin",
      growth: "+51%",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      name: "SafeMoon Squad",
      members: "200K+",
      platform: "Discord",
      role: "Admin", 
      growth: "+33%",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4 hover-scale">
            <Crown className="w-4 h-4" />
            Community Leadership
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meme Coin Groups I <span className="text-primary">Admin</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Successfully managing and growing some of the largest meme coin communities across multiple platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <Card 
              key={group.id} 
              className="group hover:shadow-warm transition-all duration-500 transform hover:scale-105 border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={group.image}
                    alt={`${group.name} community`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      <Crown className="w-3 h-3 mr-1" />
                      Admin
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1">{group.name}</h3>
                    <p className="text-white/90 text-sm">{group.platform}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground">{group.members}</span>
                      <span className="text-muted-foreground text-sm">members</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-medium text-sm">{group.growth}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      <Shield className="w-3 h-3 mr-1" />
                      Active Moderation
                    </Badge>
                    <span className="text-xs text-muted-foreground">24/7 Management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto hover:shadow-warm transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Combined Community Impact
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">1.2M+</div>
                <div className="text-muted-foreground">Total Members</div>
              </div>
              <div className="hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">43%</div>
                <div className="text-muted-foreground">Avg Growth Rate</div>
              </div>
              <div className="hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">Active Communities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeCoinGroupsSection;