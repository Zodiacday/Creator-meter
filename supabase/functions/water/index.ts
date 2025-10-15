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
    // Real-time water consumption and death calculations
    const baseYear = 2024;
    const annualConsumption = 4300000000000; // cubic meters per year
    const consumptionPerSecond = annualConsumption / (365.25 * 24 * 60 * 60);
    
    const deathsPerYear = 1400000; // water-related deaths
    const deathsPerSecond = deathsPerYear / (365.25 * 24 * 60 * 60);
    
    const startOfYear = new Date(baseYear, 0, 1).getTime();
    const now = Date.now();
    const secondsSinceYearStart = (now - startOfYear) / 1000;
    const currentConsumption = Math.floor(consumptionPerSecond * secondsSinceYearStart);
    const deathsThisYear = Math.floor(deathsPerSecond * secondsSinceYearStart);

    const data = {
      year: baseYear,
      consumption: {
        current: currentConsumption,
        annualProjection: annualConsumption,
        perSecond: Math.floor(consumptionPerSecond),
        perCapita: 525 // cubic meters per person per year
      },
      access: {
        noSafeWater: 2200000000,
        noSanitationAccess: 3600000000,
        percentage: {
          safeWater: 73,
          basicWater: 88,
          safelyManaged: 71
        }
      },
      deaths: {
        thisYear: deathsThisYear,
        annual: deathsPerYear,
        perSecond: deathsPerSecond.toFixed(4),
        causes: {
          diarrhea: 827000,
          malnutrition: 297000,
          malaria: 276000
        }
      },
      scarcity: {
        peopleAffected: 3600000000,
        physicalScarcity: 1800000000,
        economicScarcity: 1800000000,
        regions: {
          "Middle East": 83,
          "North Africa": 92,
          "Sub-Saharan Africa": 64,
          "South Asia": 54,
          "East Asia": 36
        }
      },
      usage: {
        agriculture: {
          amount: 3010000000000,
          percentage: 70
        },
        industry: {
          amount: 860000000000,
          percentage: 20
        },
        domestic: {
          amount: 430000000000,
          percentage: 10
        }
      },
      freshwater: {
        total: 35000000000000,
        available: 10000000000000,
        renewable: 43000000000
      },
      sources: ["UNESCO", "FAO", "WHO", "UN Water"],
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in water function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});