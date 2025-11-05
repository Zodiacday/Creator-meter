import { Users, TrendingUp, TrendingDown } from "lucide-react";
import { Counter } from "./Counter";

interface FloatingPopulationCounterProps {
  population: number;
  birthsPerSecond: number;
  deathsPerSecond: number;
}

export const FloatingPopulationCounter = ({ 
  population, 
  birthsPerSecond, 
  deathsPerSecond 
}: FloatingPopulationCounterProps) => {
  return (
    <div className="fixed top-20 left-4 z-40 bg-background/80 backdrop-blur-md border border-border rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 max-w-[200px]">
      <div className="flex items-center gap-2 mb-1">
        <Users className="w-4 h-4 text-primary" />
        <span className="text-xs font-medium text-muted-foreground">World Population</span>
      </div>
      <div className="text-lg font-bold text-foreground mb-2">
        <Counter value={population} className="text-lg font-bold" />
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-1.5 text-xs">
          <TrendingUp className="w-3 h-3 text-green-500" />
          <span className="text-muted-foreground">+{birthsPerSecond.toFixed(1)}/s births</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <TrendingDown className="w-3 h-3 text-red-500" />
          <span className="text-muted-foreground">+{deathsPerSecond.toFixed(1)}/s deaths</span>
        </div>
      </div>
    </div>
  );
};
