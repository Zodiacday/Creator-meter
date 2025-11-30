"use client";

import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { Skull } from "lucide-react";

const DeathsWidget = () => {
  const deaths = useRealtimeCounter({
    initialValue: 60000000,
    incrementPerSecond: 1.80,
    enabled: true
  });

  return (
    <div className="min-h-full bg-gradient-to-br from-red-500/10 to-background p-4 flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Skull className="w-6 h-6 text-red-500" />
          <h2 className="text-lg font-bold text-foreground">Global Deaths</h2>
        </div>
        <Counter 
          value={deaths} 
          className="text-3xl md:text-4xl font-bold text-red-500 mb-2" 
        />
        <p className="text-xs text-muted-foreground">Deaths this year</p>
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

export default DeathsWidget;
