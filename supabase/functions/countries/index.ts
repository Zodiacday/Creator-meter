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

    // Return global population rankings
    const data = {
      worldPopulation: 8186152839,
      topCountries: [
        {
          rank: 1,
          country: "India",
          population: 1441719852,
          region: "Asia",
          area: 3287263,
          density: 438
        },
        {
          rank: 2,
          country: "China",
          population: 1425893465,
          region: "Asia",
          area: 9596961,
          density: 149
        },
        {
          rank: 3,
          country: "United States",
          population: 343092469,
          region: "North America",
          area: 9833517,
          density: 35
        },
        {
          rank: 4,
          country: "Indonesia",
          population: 279476346,
          region: "Asia",
          area: 1904569,
          density: 147
        },
        {
          rank: 5,
          country: "Pakistan",
          population: 235824862,
          region: "Asia",
          area: 881912,
          density: 267
        },
        {
          rank: 6,
          country: "Nigeria",
          population: 223804632,
          region: "Africa",
          area: 923768,
          density: 242
        },
        {
          rank: 7,
          country: "Brazil",
          population: 216422446,
          region: "South America",
          area: 8515767,
          density: 25
        },
        {
          rank: 8,
          country: "Bangladesh",
          population: 172954319,
          region: "Asia",
          area: 147570,
          density: 1172
        },
        {
          rank: 9,
          country: "Russia",
          population: 144444359,
          region: "Europe/Asia",
          area: 17098242,
          density: 8
        },
        {
          rank: 10,
          country: "Mexico",
          population: 128455567,
          region: "North America",
          area: 1964375,
          density: 65
        }
      ],
      regionalBreakdown: {
        "Asia": 4753079726,
        "Africa": 1489891325,
        "Europe": 742272442,
        "North America": 596581017,
        "South America": 439719009,
        "Oceania": 46608320
      },
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