import { Leaf, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CategorySection } from "@/components/CategorySection";
import { StatCard } from "@/components/StatCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";

const EnvironmentPage = () => {
  const forestLoss = useRealtimeCounter({ initialValue: 10000000, incrementPerSecond: 0.32 });
  const co2Emissions = useRealtimeCounter({ initialValue: 38000000000, incrementPerSecond: 1205 });
  const toxicChemicals = useRealtimeCounter({ initialValue: 16000000, incrementPerSecond: 0.51 });

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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Environment</h1>
            <p className="text-muted-foreground text-sm md:text-base">Environmental impact and climate change indicators</p>
          </div>

          <CategorySection
            title="Environment"
            icon={<Leaf className="w-6 h-6" />}
            color="hsl(var(--environment))"
          >
            <StatCard
              icon={Leaf}
              label="Forest loss (hectares)"
              value={forestLoss}
              color="hsl(var(--environment))"
              increment={0}
            />
            <StatCard
              icon={Leaf}
              label="CO2 emissions (tons)"
              value={co2Emissions}
              color="hsl(var(--environment))"
              increment={1205}
            />
            <StatCard
              icon={Leaf}
              label="Toxic chemicals released (tons)"
              value={toxicChemicals}
              color="hsl(var(--environment))"
              increment={1}
            />
          </CategorySection>
        </div>
      </main>
    </div>
  );
};

export default EnvironmentPage;
