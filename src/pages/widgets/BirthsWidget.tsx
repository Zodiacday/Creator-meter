import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { Baby } from "lucide-react";

const BirthsWidget = () => {
  const births = useRealtimeCounter({
    initialValue: 140000000,
    incrementPerSecond: 4.17,
    enabled: true
  });

  return (
    <div className="min-h-full bg-gradient-to-br from-green-500/10 to-background p-4 flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Baby className="w-6 h-6 text-green-500" />
          <h2 className="text-lg font-bold text-foreground">Global Births</h2>
        </div>
        <Counter 
          value={births} 
          className="text-3xl md:text-4xl font-bold text-green-500 mb-2" 
        />
        <p className="text-xs text-muted-foreground">Births this year</p>
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

export default BirthsWidget;
