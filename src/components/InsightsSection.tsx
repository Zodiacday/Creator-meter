import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface InsightCard {
  title: string;
  stat: string;
  image?: string;
  link?: string;
}

const insights: InsightCard[] = [
  {
    title: "Global CO₂ passes 37B tons in 2025",
    stat: "37B tons",
    link: "/environment"
  },
  {
    title: "Fertility rates drop below 2.0 for half of nations",
    stat: "< 2.0 rate",
    link: "/population"
  },
  {
    title: "Renewables surpass 20% milestone",
    stat: "20%+",
    link: "/energy"
  }
];

export const InsightsSection = () => {
  return (
    <section className="py-12 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Latest Insights</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, idx) => (
          <a 
            key={idx} 
            href={insight.link}
            className="group"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">{insight.stat}</span>
              </div>
              <CardContent className="p-4">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {insight.title}
                </h3>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};
