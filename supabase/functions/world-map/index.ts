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
      countries: [
        { 
          name: "China", 
          code: "CN", 
          population: 1425893465, 
          gdp: 17963171, 
          area: 9596961,
          coordinates: { lat: 35.8617, lng: 104.1954 }
        },
        { 
          name: "India", 
          code: "IN", 
          population: 1441719852, 
          gdp: 3737000, 
          area: 3287263,
          coordinates: { lat: 20.5937, lng: 78.9629 }
        },
        { 
          name: "United States", 
          code: "US", 
          population: 343092469, 
          gdp: 27358000, 
          area: 9833517,
          coordinates: { lat: 37.0902, lng: -95.7129 }
        },
        { 
          name: "Indonesia", 
          code: "ID", 
          population: 279476346, 
          gdp: 1370000, 
          area: 1904569,
          coordinates: { lat: -0.7893, lng: 113.9213 }
        },
        { 
          name: "Pakistan", 
          code: "PK", 
          population: 235824862, 
          gdp: 376500, 
          area: 881912,
          coordinates: { lat: 30.3753, lng: 69.3451 }
        },
        { 
          name: "Nigeria", 
          code: "NG", 
          population: 223804632, 
          gdp: 477400, 
          area: 923768,
          coordinates: { lat: 9.0820, lng: 8.6753 }
        },
        { 
          name: "Brazil", 
          code: "BR", 
          population: 216422446, 
          gdp: 2126000, 
          area: 8515767,
          coordinates: { lat: -14.2350, lng: -51.9253 }
        },
        { 
          name: "Bangladesh", 
          code: "BD", 
          population: 172954319, 
          gdp: 460200, 
          area: 147570,
          coordinates: { lat: 23.6850, lng: 90.3563 }
        },
        { 
          name: "Russia", 
          code: "RU", 
          population: 144444359, 
          gdp: 2062000, 
          area: 17098242,
          coordinates: { lat: 61.5240, lng: 105.3188 }
        },
        { 
          name: "Mexico", 
          code: "MX", 
          population: 128455567, 
          gdp: 1789000, 
          area: 1964375,
          coordinates: { lat: 23.6345, lng: -102.5528 }
        },
        { 
          name: "Japan", 
          code: "JP", 
          population: 123294513, 
          gdp: 4231000, 
          area: 377975,
          coordinates: { lat: 36.2048, lng: 138.2529 }
        },
        { 
          name: "Ethiopia", 
          code: "ET", 
          population: 126527060, 
          gdp: 156100, 
          area: 1104300,
          coordinates: { lat: 9.1450, lng: 40.4897 }
        },
        { 
          name: "Philippines", 
          code: "PH", 
          population: 117337368, 
          gdp: 437700, 
          area: 300000,
          coordinates: { lat: 12.8797, lng: 121.7740 }
        },
        { 
          name: "Egypt", 
          code: "EG", 
          population: 112716598, 
          gdp: 476750, 
          area: 1001450,
          coordinates: { lat: 26.8206, lng: 30.8025 }
        },
        { 
          name: "Vietnam", 
          code: "VN", 
          population: 98858950, 
          gdp: 433400, 
          area: 331212,
          coordinates: { lat: 14.0583, lng: 108.2772 }
        },
        { 
          name: "Germany", 
          code: "DE", 
          population: 84552242, 
          gdp: 4430000, 
          area: 357022,
          coordinates: { lat: 51.1657, lng: 10.4515 }
        },
        { 
          name: "Turkey", 
          code: "TR", 
          population: 85816199, 
          gdp: 1108000, 
          area: 783562,
          coordinates: { lat: 38.9637, lng: 35.2433 }
        },
        { 
          name: "United Kingdom", 
          code: "GB", 
          population: 68265209, 
          gdp: 3340000, 
          area: 242495,
          coordinates: { lat: 55.3781, lng: -3.4360 }
        },
        { 
          name: "France", 
          code: "FR", 
          population: 64531444, 
          gdp: 3052000, 
          area: 643801,
          coordinates: { lat: 46.2276, lng: 2.2137 }
        },
        { 
          name: "Italy", 
          code: "IT", 
          population: 58853482, 
          gdp: 2255000, 
          area: 301340,
          coordinates: { lat: 41.8719, lng: 12.5674 }
        }
      ],
      globalStats: {
        totalPopulation: 8186152839,
        totalCountries: 195,
        totalArea: 148940000,
        averageGDP: 12850
      },
      sources: ["UN", "World Bank", "IMF"],
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in world-map function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
