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
    // Real-time calculated CO2 emissions based on 2024 data
    const baseYear = 2024;
    const baseEmissions = 38520000000; // tons per year
    const emissionsPerSecond = baseEmissions / (365.25 * 24 * 60 * 60);
    
    const startOfYear = new Date(baseYear, 0, 1).getTime();
    const now = Date.now();
    const secondsSinceYearStart = (now - startOfYear) / 1000;
    const currentEmissions = Math.floor(emissionsPerSecond * secondsSinceYearStart);

    const data = {
      year: baseYear,
      globalCO2: currentEmissions,
      annualProjection: baseEmissions,
      emissionsPerSecond: Math.floor(emissionsPerSecond),
      topCountries: [
        { country: "China", emissions: 11000000000, percentage: 28.6, perCapita: 7.8 },
        { country: "United States", emissions: 5000000000, percentage: 13.0, perCapita: 15.1 },
        { country: "India", emissions: 2900000000, percentage: 7.5, perCapita: 2.1 },
        { country: "Russia", emissions: 1700000000, percentage: 4.4, perCapita: 11.8 },
        { country: "Japan", emissions: 1100000000, percentage: 2.9, perCapita: 8.7 },
        { country: "Germany", emissions: 750000000, percentage: 1.9, perCapita: 9.0 },
        { country: "Iran", emissions: 720000000, percentage: 1.9, perCapita: 8.5 },
        { country: "South Korea", emissions: 650000000, percentage: 1.7, perCapita: 12.6 },
        { country: "Indonesia", emissions: 640000000, percentage: 1.7, perCapita: 2.3 },
        { country: "Saudi Arabia", emissions: 620000000, percentage: 1.6, perCapita: 17.8 }
      ],
      historical: [
        { year: 2014, emissions: 35600000000 },
        { year: 2015, emissions: 35800000000 },
        { year: 2016, emissions: 36100000000 },
        { year: 2017, emissions: 36500000000 },
        { year: 2018, emissions: 37200000000 },
        { year: 2019, emissions: 37900000000 },
        { year: 2020, emissions: 36100000000 }, // COVID drop
        { year: 2021, emissions: 37800000000 },
        { year: 2022, emissions: 38200000000 },
        { year: 2023, emissions: 38300000000 },
        { year: 2024, emissions: baseEmissions }
      ],
      sources: ["EDGAR", "IEA", "UN"],
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in co2-emissions function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});