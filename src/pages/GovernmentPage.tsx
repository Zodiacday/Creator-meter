import { Landmark, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CategorySection } from "@/components/CategorySection";
import { StatCard } from "@/components/StatCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";

const GovernmentPage = () => {
  const healthcareSpending = useRealtimeCounter({ initialValue: 9000000000000, incrementPerSecond: 285430 });
  const educationSpending = useRealtimeCounter({ initialValue: 5000000000000, incrementPerSecond: 158494 });
  const militarySpending = useRealtimeCounter({ initialValue: 2000000000000, incrementPerSecond: 63398 });
  const carsProduced = useRealtimeCounter({ initialValue: 70000000, incrementPerSecond: 2.22 });
  const bicyclesProduced = useRealtimeCounter({ initialValue: 130000000, incrementPerSecond: 4.12 });
  const computersProduced = useRealtimeCounter({ initialValue: 350000000, incrementPerSecond: 11.10 });

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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Government & Economics</h1>
            <p className="text-muted-foreground text-sm md:text-base">Global economic indicators and production statistics</p>
          </div>

          <CategorySection
            title="Government & Economics"
            icon={<Landmark className="w-6 h-6" />}
            color="hsl(var(--government))"
          >
            <StatCard
              icon={Landmark}
              label="Public Healthcare expenditure"
              value={healthcareSpending}
              color="hsl(var(--government))"
              increment={285430}
            />
            <StatCard
              icon={Landmark}
              label="Public Education expenditure"
              value={educationSpending}
              color="hsl(var(--government))"
              increment={158494}
            />
            <StatCard
              icon={Landmark}
              label="Military expenditure"
              value={militarySpending}
              color="hsl(var(--government))"
              increment={63398}
            />
            <StatCard
              icon={Landmark}
              label="Cars produced"
              value={carsProduced}
              color="hsl(var(--government))"
              increment={2}
            />
            <StatCard
              icon={Landmark}
              label="Bicycles produced"
              value={bicyclesProduced}
              color="hsl(var(--government))"
              increment={4}
            />
            <StatCard
              icon={Landmark}
              label="Computers produced"
              value={computersProduced}
              color="hsl(var(--government))"
              increment={11}
            />
          </CategorySection>
        </div>
      </main>
    </div>
  );
};

export default GovernmentPage;
