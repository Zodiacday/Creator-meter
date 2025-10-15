import { Droplet, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CategorySection } from "@/components/CategorySection";
import { StatCard } from "@/components/StatCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";

const WaterPage = () => {
  const waterUsed = useRealtimeCounter({ initialValue: 4000000000000, incrementPerSecond: 126839 });
  const waterDeaths = useRealtimeCounter({ initialValue: 1500000, incrementPerSecond: 0.048 });
  const noSafeWater = useRealtimeCounter({ initialValue: 780000000, incrementPerSecond: 24.7 });

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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Water Resources</h1>
            <p className="text-muted-foreground text-sm md:text-base">Global water usage and access statistics</p>
          </div>

          <CategorySection
            title="Water"
            icon={<Droplet className="w-6 h-6" />}
            color="hsl(var(--water))"
          >
            <StatCard
              icon={Droplet}
              label="Water used (liters)"
              value={waterUsed}
              color="hsl(var(--water))"
              increment={126839}
            />
            <StatCard
              icon={Droplet}
              label="Deaths from water diseases"
              value={waterDeaths}
              color="hsl(var(--water))"
              increment={0}
            />
            <StatCard
              icon={Droplet}
              label="People with no safe water"
              value={noSafeWater}
              color="hsl(var(--water))"
              increment={25}
            />
          </CategorySection>
        </div>
      </main>
    </div>
  );
};

export default WaterPage;
