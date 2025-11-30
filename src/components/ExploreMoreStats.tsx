"use client";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface RelatedStat {
  title: string;
  path: string;
  description: string;
  category: string;
  icon?: string;
}

interface ExploreMoreStatsProps {
  currentPath: string;
  relatedStats?: RelatedStat[];
}

const defaultRelatedStats: RelatedStat[] = [
  { title: "World Population Live", path: "/world-population-live", description: "Real-time population counter", category: "Population", icon: "👥" },
  { title: "CO₂ Emissions", path: "/co2-emissions", description: "Global carbon emissions", category: "Environment", icon: "🌍" },
  { title: "World GDP Live", path: "/world-gdp-live", description: "Real-time economic data", category: "Economy", icon: "💰" },
  { title: "Renewable Energy", path: "/renewable-energy", description: "Clean energy adoption", category: "Energy", icon: "⚡" },
  { title: "Life Expectancy Calculator", path: "/life-expectancy-calculator", description: "Calculate your life expectancy", category: "Health", icon: "❤️" },
  { title: "Internet Users", path: "/internet-users", description: "Global internet adoption", category: "Technology", icon: "🌐" },
];

export const ExploreMoreStats = ({ currentPath, relatedStats }: ExploreMoreStatsProps) => {
  const stats = relatedStats || defaultRelatedStats;
  const filteredStats = stats.filter(stat => stat.path !== currentPath).slice(0, 6);

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <div className="flex items-center gap-2 mb-8">
        <TrendingUp className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold">Explore More Statistics</h2>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredStats.map((stat) => (
          <Link key={stat.path} href={stat.path} className="group">
            <Card className="h-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-border hover:border-primary/50">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {stat.icon && <span className="mr-2">{stat.icon}</span>}
                      {stat.title}
                    </CardTitle>
                    <CardDescription className="text-xs mt-1">
                      {stat.category}
                    </CardDescription>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
        >
          View All Statistics
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};
