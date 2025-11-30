"use client";

import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { Counter } from "@/components/Counter";
import { DollarSign } from "lucide-react";

const WorldGdpWidget = () => {
  const worldGdp = useRealtimeCounter({
    initialValue: 105000000000000,
    incrementPerSecond: 3500000,
    enabled: true
  });

  return (
    <div className="min-h-full bg-gradient-to-br from-green-500/10 to-background p-4 flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <DollarSign className="w-6 h-6 text-green-500" />
          <h2 className="text-lg font-bold text-foreground">World GDP</h2>
        </div>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl font-bold text-green-500">$</span>
          <Counter 
            value={worldGdp} 
            className="text-3xl md:text-4xl font-bold text-green-500 mb-2" 
          />
        </div>
        <p className="text-xs text-muted-foreground">Live counter • USD Trillions</p>
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

export default WorldGdpWidget;
