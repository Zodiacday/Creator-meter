import { Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CategorySection } from "@/components/CategorySection";
import { StatCard } from "@/components/StatCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";

const PopulationPage = () => {
  const births = useRealtimeCounter({ initialValue: 140000000, incrementPerSecond: 4.17 });
  const deaths = useRealtimeCounter({ initialValue: 60000000, incrementPerSecond: 1.80 });
  const netGrowth = useRealtimeCounter({ initialValue: 80000000, incrementPerSecond: 2.37 });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <Link to="/" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Population Statistics</h1>
            <p className="text-muted-foreground text-sm md:text-base">Real-time global population data and trends</p>
          </div>

          <CategorySection
            title="Population"
            icon={<Users className="w-6 h-6" />}
            color="hsl(var(--population))"
          >
            <StatCard
              icon={Users}
              label="Births this year"
              value={births}
              color="hsl(var(--population))"
              subtitle={`${(births / 365).toFixed(0)} today`}
              increment={4}
            />
            <StatCard
              icon={Users}
              label="Deaths this year"
              value={deaths}
              color="hsl(var(--population))"
              subtitle={`${(deaths / 365).toFixed(0)} today`}
              increment={2}
            />
            <StatCard
              icon={Users}
              label="Net population growth"
              value={netGrowth}
              color="hsl(var(--population))"
              subtitle={`${(netGrowth / 365).toFixed(0)} today`}
              increment={2}
            />
          </CategorySection>
        </div>
      </main>
    </div>
  );
};

export default PopulationPage;
