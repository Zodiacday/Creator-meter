import { Apple, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CategorySection } from "@/components/CategorySection";
import { StatCard } from "@/components/StatCard";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";

const FoodPage = () => {
  const undernourished = useRealtimeCounter({ initialValue: 820000000, incrementPerSecond: 26.0 });
  const overweight = useRealtimeCounter({ initialValue: 1900000000, incrementPerSecond: 60.2 });
  const obese = useRealtimeCounter({ initialValue: 800000000, incrementPerSecond: 25.4 });

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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Food & Nutrition</h1>
            <p className="text-muted-foreground text-sm md:text-base">Global nutrition and food security statistics</p>
          </div>

          <CategorySection
            title="Food"
            icon={<Apple className="w-6 h-6" />}
            color="hsl(var(--food))"
          >
            <StatCard
              icon={Apple}
              label="Undernourished people"
              value={undernourished}
              color="hsl(var(--food))"
              increment={26}
            />
            <StatCard
              icon={Apple}
              label="Overweight people"
              value={overweight}
              color="hsl(var(--food))"
              increment={60}
            />
            <StatCard
              icon={Apple}
              label="Obese people"
              value={obese}
              color="hsl(var(--food))"
              increment={25}
            />
          </CategorySection>
        </div>
      </main>
    </div>
  );
};

export default FoodPage;
