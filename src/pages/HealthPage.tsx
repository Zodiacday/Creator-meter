import { Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CategorySection } from "@/components/CategorySection";
import { StatCard } from "@/components/StatCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";

const HealthPage = () => {
  const infectiousDeaths = useRealtimeCounter({ initialValue: 17000000, incrementPerSecond: 0.54 });
  const cancerDeaths = useRealtimeCounter({ initialValue: 8200000, incrementPerSecond: 0.26 });
  const smokingDeaths = useRealtimeCounter({ initialValue: 5000000, incrementPerSecond: 0.16 });
  const alcoholDeaths = useRealtimeCounter({ initialValue: 2500000, incrementPerSecond: 0.08 });
  const trafficDeaths = useRealtimeCounter({ initialValue: 1350000, incrementPerSecond: 0.043 });
  const healthSpending = useRealtimeCounter({ initialValue: 9000000000000, incrementPerSecond: 285430 });

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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Health Statistics</h1>
            <p className="text-muted-foreground text-sm md:text-base">Global health indicators and mortality data</p>
          </div>

          <CategorySection
            title="Health"
            icon={<Heart className="w-6 h-6" />}
            color="hsl(var(--health))"
          >
            <StatCard
              icon={Heart}
              label="Deaths from infectious diseases"
              value={infectiousDeaths}
              color="hsl(var(--health))"
              increment={1}
            />
            <StatCard
              icon={Heart}
              label="Deaths from cancer"
              value={cancerDeaths}
              color="hsl(var(--health))"
              increment={0}
            />
            <StatCard
              icon={Heart}
              label="Deaths from smoking"
              value={smokingDeaths}
              color="hsl(var(--health))"
              increment={0}
            />
            <StatCard
              icon={Heart}
              label="Deaths from alcohol"
              value={alcoholDeaths}
              color="hsl(var(--health))"
              increment={0}
            />
            <StatCard
              icon={Heart}
              label="Road traffic deaths"
              value={trafficDeaths}
              color="hsl(var(--health))"
              increment={0}
            />
            <StatCard
              icon={Heart}
              label="Healthcare spending"
              value={healthSpending}
              color="hsl(var(--health))"
              increment={285430}
            />
          </CategorySection>
        </div>
      </main>
    </div>
  );
};

export default HealthPage;
