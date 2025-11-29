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
    const data = {
      year: 2025,
      globalGDP: 118000000000000, // 118 trillion USD - 2025 IMF projection
      topCountries: [
        {
          rank: 1,
          country: "United States",
          gdp: 28720000000000,
          perCapita: 83700,
          growthRate: 2.3,
          percentage: 25.6
        },
        {
          rank: 2,
          country: "China",
          gdp: 18520000000000,
          perCapita: 13000,
          growthRate: 4.8,
          percentage: 16.5
        },
        {
          rank: 3,
          country: "Germany",
          gdp: 4720000000000,
          perCapita: 56600,
          growthRate: 0.8,
          percentage: 4.2
        },
        {
          rank: 4,
          country: "Japan",
          gdp: 4120000000000,
          perCapita: 32800,
          growthRate: 1.1,
          percentage: 3.7
        },
        {
          rank: 5,
          country: "India",
          gdp: 4050000000000,
          perCapita: 2900,
          growthRate: 6.5,
          percentage: 3.6
        },
        {
          rank: 6,
          country: "United Kingdom",
          gdp: 3710000000000,
          perCapita: 54600,
          growthRate: 1.4,
          percentage: 3.3
        },
        {
          rank: 7,
          country: "France",
          gdp: 3320000000000,
          perCapita: 50800,
          growthRate: 1.2,
          percentage: 3.0
        },
        {
          rank: 8,
          country: "Brazil",
          gdp: 2420000000000,
          perCapita: 11200,
          growthRate: 2.8,
          percentage: 2.2
        },
        {
          rank: 9,
          country: "Italy",
          gdp: 2370000000000,
          perCapita: 40200,
          growthRate: 0.9,
          percentage: 2.1
        },
        {
          rank: 10,
          country: "Canada",
          gdp: 2320000000000,
          perCapita: 60200,
          growthRate: 2.0,
          percentage: 2.1
        }
      ],
      regionalGDP: {
        "North America": 31500000000000,
        "Europe": 24800000000000,
        "Asia": 45200000000000,
        "South America": 5100000000000,
        "Africa": 3200000000000,
        "Oceania": 2200000000000
      },
      historical: [
        { year: 2014, gdp: 79600000000000 },
        { year: 2016, gdp: 76800000000000 },
        { year: 2018, gdp: 86900000000000 },
        { year: 2020, gdp: 84700000000000 },
        { year: 2022, gdp: 101600000000000 },
        { year: 2024, gdp: 112000000000000 }
      ],
      sources: ["IMF", "World Bank", "OECD"],
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in gdp function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});