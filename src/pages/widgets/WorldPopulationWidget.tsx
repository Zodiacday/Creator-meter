import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { Users } from "lucide-react";

const WorldPopulationWidget = () => {
  const worldPopulation = useRealtimeCounter({ 
    initialValue: 8252321533, 
    incrementPerSecond: 2.5 
  });

  return (
    <div className="min-h-full bg-gradient-to-br from-primary/10 to-background p-4 flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Users className="w-6 h-6 text-primary" />
          <h2 className="text-lg font-bold text-foreground">World Population</h2>
        </div>
        <Counter 
          value={worldPopulation} 
          className="text-3xl md:text-4xl font-bold text-primary mb-2" 
        />
        <p className="text-xs text-muted-foreground">Live counter • Updated every second</p>
        <a 
          href="https://creatormeter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline mt-2 inline-block"
        >
          Powered by CreatorMeter
        </a>
      </div>
    </div>
  );
};

export default WorldPopulationWidget;
