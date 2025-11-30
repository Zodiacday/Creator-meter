"use client";

import { useBackendData } from "@/hooks/useBackendData";
import { Counter } from "@/components/Counter";
import { Activity, AlertCircle } from "lucide-react";

interface CoronavirusData {
  global: {
    totalCases: number;
    totalDeaths: number;
    totalRecovered: number;
    activeCases: number;
  };
}

const CoronavirusWidget = () => {
  const { data, isLoading, error } = useBackendData<CoronavirusData>("coronavirus");

  if (isLoading) {
    return (
      <div className="min-h-full bg-card p-4 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-full bg-card p-4 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-6 h-6 text-red-500 mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">Unable to load data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-card p-4">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Activity className="w-5 h-5 text-foreground" />
          <h2 className="text-base font-bold text-foreground">COVID-19 Global Stats</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 text-left">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Total Cases</p>
            <Counter value={data.global.totalCases} className="text-lg font-bold text-foreground" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Deaths</p>
            <Counter value={data.global.totalDeaths} className="text-lg font-bold text-red-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Recovered</p>
            <Counter value={data.global.totalRecovered} className="text-lg font-bold text-green-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Active</p>
            <Counter value={data.global.activeCases} className="text-lg font-bold text-yellow-500" />
          </div>
        </div>
        <a 
          href="https://creatormeter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline mt-3 inline-block"
        >
          Powered by CreatorMeter
        </a>
      </div>
    </div>
  );
};

export default CoronavirusWidget;
