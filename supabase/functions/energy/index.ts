import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Real-time energy consumption calculation
    const baseYear = 2024;
    const annualConsumption = 580000000000000; // kWh per year
    const consumptionPerSecond = annualConsumption / (365.25 * 24 * 60 * 60);
    
    const startOfYear = new Date(baseYear, 0, 1).getTime();
    const now = Date.now();
    const secondsSinceYearStart = (now - startOfYear) / 1000;
    const currentConsumption = Math.floor(consumptionPerSecond * secondsSinceYearStart);

    const data = {
      year: baseYear,
      currentConsumption: currentConsumption,
      annualProjection: annualConsumption,
      consumptionPerSecond: Math.floor(consumptionPerSecond),
      sources: {
        oil: {
          amount: 173800000000000,
          percentage: 29.97,
          trend: "stable"
        },
        coal: {
          amount: 160400000000000,
          percentage: 27.66,
          trend: "declining"
        },
        naturalGas: {
          amount: 145800000000000,
          percentage: 25.14,
          trend: "growing"
        },
        nuclear: {
          amount: 29000000000000,
          percentage: 5.0,
          trend: "stable"
        },
        renewables: {
          amount: 71000000000000,
          percentage: 12.24,
          trend: "growing"
        }
      },
      renewableBreakdown: {
        hydro: 38000000000000,
        wind: 18000000000000,
        solar: 12000000000000,
        other: 3000000000000
      },
      topConsumers: [
        { country: "China", consumption: 180000000000000, perCapita: 126000 },
        { country: "United States", consumption: 100000000000000, perCapita: 291000 },
        { country: "India", consumption: 48000000000000, perCapita: 33000 },
        { country: "Russia", consumption: 30000000000000, perCapita: 208000 },
        { country: "Japan", consumption: 27000000000000, perCapita: 214000 }
      ],
      historical: [
        { year: 2014, total: 530000000000000 },
        { year: 2016, total: 545000000000000 },
        { year: 2018, total: 560000000000000 },
        { year: 2020, total: 552000000000000 },
        { year: 2022, total: 575000000000000 },
        { year: 2024, total: annualConsumption }
      ],
      dataSources: ["IEA", "World Bank", "BP Statistical Review"],
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in energy function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});