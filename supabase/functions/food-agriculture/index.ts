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
    // Real-time hunger statistics calculation
    const baseYear = 2024;
    const baseUndernourished = 733000000;
    const deathsPerYear = 9000000; // hunger-related deaths
    const deathsPerSecond = deathsPerYear / (365.25 * 24 * 60 * 60);
    
    const startOfYear = new Date(baseYear, 0, 1).getTime();
    const now = Date.now();
    const secondsSinceYearStart = (now - startOfYear) / 1000;
    const deathsThisYear = Math.floor(deathsPerSecond * secondsSinceYearStart);

    const data = {
      year: baseYear,
      undernourished: baseUndernourished,
      overweight: 2600000000,
      obese: 890000000,
      hungerDeathsThisYear: deathsThisYear,
      hungerDeathsPerSecond: deathsPerSecond.toFixed(1),
      foodWasted: {
        annual: 1300000000000, // kg per year
        percentage: 33
      },
      cropProduction: {
        wheat: {
          production: 789000000,
          unit: "metric tons",
          topProducers: ["China", "India", "Russia", "USA"]
        },
        rice: {
          production: 520000000,
          unit: "metric tons",
          topProducers: ["China", "India", "Bangladesh", "Indonesia"]
        },
        corn: {
          production: 1210000000,
          unit: "metric tons",
          topProducers: ["USA", "China", "Brazil", "Argentina"]
        },
        soybeans: {
          production: 396000000,
          unit: "metric tons",
          topProducers: ["Brazil", "USA", "Argentina", "China"]
        }
      },
      malnutrition: {
        stunted: 148100000,
        wasted: 45400000,
        underweight: 148500000
      },
      regionalHunger: {
        "Africa": 278000000,
        "Asia": 384000000,
        "Latin America": 56500000,
        "Middle East": 14500000
      },
      sources: ["FAO", "World Bank", "WHO", "UN WFP"],
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in food-agriculture function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});