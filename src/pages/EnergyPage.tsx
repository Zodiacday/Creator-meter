import { Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CategorySection } from "@/components/CategorySection";
import { StatCard } from "@/components/StatCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";

const EnergyPage = () => {
  const energyUsed = useRealtimeCounter({ initialValue: 580000000000000, incrementPerSecond: 18384776 });
  const nonRenewable = useRealtimeCounter({ initialValue: 500000000000000, incrementPerSecond: 15854324 });
  const renewable = useRealtimeCounter({ initialValue: 80000000000000, incrementPerSecond: 2536783 });

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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Energy Consumption</h1>
            <p className="text-muted-foreground text-sm md:text-base">Global energy usage and sources</p>
          </div>

          <CategorySection
            title="Energy"
            icon={<Zap className="w-6 h-6" />}
            color="hsl(var(--energy))"
          >
            <StatCard
              icon={Zap}
              label="Energy used (MWh)"
              value={energyUsed}
              color="hsl(var(--energy))"
              increment={18384776}
            />
            <StatCard
              icon={Zap}
              label="Non-renewable sources (MWh)"
              value={nonRenewable}
              color="hsl(var(--energy))"
              increment={15854324}
            />
            <StatCard
              icon={Zap}
              label="Renewable sources (MWh)"
              value={renewable}
              color="hsl(var(--energy))"
              increment={2536783}
            />
          </CategorySection>
        </div>
      </main>
    </div>
  );
};

export default EnergyPage;
