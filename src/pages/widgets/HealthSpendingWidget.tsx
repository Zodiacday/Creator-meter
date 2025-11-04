import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { Heart } from "lucide-react";

const HealthSpendingWidget = () => {
  const healthSpending = useRealtimeCounter({
    initialValue: 9000000000000,
    incrementPerSecond: 285430,
    enabled: true
  });

  return (
    <div className="min-h-full bg-gradient-to-br from-pink-500/10 to-background p-4 flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-6 h-6 text-pink-500" />
          <h2 className="text-lg font-bold text-foreground">Healthcare Spending</h2>
        </div>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl font-bold text-pink-500">$</span>
          <Counter 
            value={healthSpending} 
            className="text-3xl md:text-4xl font-bold text-pink-500 mb-2" 
          />
        </div>
        <p className="text-xs text-muted-foreground">Global spending this year</p>
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

export default HealthSpendingWidget;
