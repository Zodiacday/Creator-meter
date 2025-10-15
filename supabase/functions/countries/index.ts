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
    const url = new URL(req.url);
    const country = url.searchParams.get('country');

    if (country) {
      // Return specific country data
      const countryData = getCountryData(country);
      return new Response(JSON.stringify(countryData), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Real-time population calculation
    const baseYear = 2025;
    const basePopulation = 8186152839;
    const growthPerYear = 73000000; // approximate annual growth
    const growthPerSecond = growthPerYear / (365.25 * 24 * 60 * 60);
    
    const startOfYear = new Date(baseYear, 0, 1).getTime();
    const now = Date.now();
    const secondsSinceYearStart = (now - startOfYear) / 1000;
    const currentPopulation = Math.floor(basePopulation + (growthPerSecond * secondsSinceYearStart));

    // Return global population rankings
    const data = {
      worldPopulation: currentPopulation,
      populationGrowthPerSecond: growthPerSecond,
      topCountries: [
        {
          rank: 1,
          country: "India",
          population: 1441719852,
          percentage: 17.6,
          growthRate: 0.81
        },
        {
          rank: 2,
          country: "China",
          population: 1425893465,
          percentage: 17.4,
          growthRate: -0.23
        },
        {
          rank: 3,
          country: "United States",
          population: 343092469,
          percentage: 4.2,
          growthRate: 0.50
        },
        {
          rank: 4,
          country: "Indonesia",
          population: 279476346,
          percentage: 3.4,
          growthRate: 0.87
        },
        {
          rank: 5,
          country: "Pakistan",
          population: 235824862,
          percentage: 2.9,
          growthRate: 1.91
        },
        {
          rank: 6,
          country: "Nigeria",
          population: 223804632,
          percentage: 2.7,
          growthRate: 2.41
        },
        {
          rank: 7,
          country: "Brazil",
          population: 216422446,
          percentage: 2.6,
          growthRate: 0.68
        },
        {
          rank: 8,
          country: "Bangladesh",
          population: 172954319,
          percentage: 2.1,
          growthRate: 0.98
        },
        {
          rank: 9,
          country: "Russia",
          population: 144444359,
          percentage: 1.8,
          growthRate: -0.19
        },
        {
          rank: 10,
          country: "Mexico",
          population: 128455567,
          percentage: 1.6,
          growthRate: 0.75
        },
        {
          rank: 11,
          country: "Ethiopia",
          population: 126527060,
          percentage: 1.5,
          growthRate: 2.55
        },
        {
          rank: 12,
          country: "Japan",
          population: 123294513,
          percentage: 1.5,
          growthRate: -0.53
        },
        {
          rank: 13,
          country: "Philippines",
          population: 117337368,
          percentage: 1.4,
          growthRate: 1.54
        },
        {
          rank: 14,
          country: "Egypt",
          population: 112716598,
          percentage: 1.4,
          growthRate: 1.56
        },
        {
          rank: 15,
          country: "Vietnam",
          population: 98858950,
          percentage: 1.2,
          growthRate: 0.68
        }
      ],
      regionalPopulation: {
        "Asia": 4753079726,
        "Africa": 1489891325,
        "Europe": 742272442,
        "North America": 596581017,
        "South America": 439719009,
        "Oceania": 46608320
      },
      historical: [
        { year: 1970, population: 3700437046 },
        { year: 1980, population: 4458003514 },
        { year: 1990, population: 5327231061 },
        { year: 2000, population: 6143493823 },
        { year: 2010, population: 6956823603 },
        { year: 2020, population: 7840952880 },
        { year: 2025, population: currentPopulation }
      ],
      sources: ["UN", "World Bank", "Worldometer"],
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in countries function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function getCountryData(country: string) {
  const historicalData: Record<string, any> = {
    "USA": {
      country: "United States",
      population: 343092469,
      region: "North America",
      area: 9833517,
      density: 35,
      historical: [
        { year: 1950, population: 158000000 },
        { year: 1960, population: 180671000 },
        { year: 1970, population: 205052000 },
        { year: 1980, population: 227225000 },
        { year: 1990, population: 249623000 },
        { year: 2000, population: 282162411 },
        { year: 2010, population: 309321666 },
        { year: 2020, population: 331449281 },
        { year: 2024, population: 343092469 }
      ],
      projections: [
        { year: 2030, population: 359402000 },
        { year: 2040, population: 373504000 },
        { year: 2050, population: 386067000 }
      ]
    }
  };

  return historicalData[country] || { error: "Country not found" };
}