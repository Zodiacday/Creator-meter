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
          flag: "🇨🇳",
          capital: "Beijing",
          region: "Asia",
          population: 1425893465,
          area: 9596961,
          languages: ["Mandarin Chinese"],
          currency: "Yuan (¥)",
          timezone: "UTC+8"
        },
        {
          name: "India",
          code: "IN",
          flag: "🇮🇳",
          capital: "New Delhi",
          region: "Asia",
          population: 1441719852,
          area: 3287263,
          languages: ["Hindi", "English"],
          currency: "Indian Rupee (₹)",
          timezone: "UTC+5:30"
        },
        {
          name: "United States",
          code: "US",
          flag: "🇺🇸",
          capital: "Washington, D.C.",
          region: "North America",
          population: 343092469,
          area: 9833517,
          languages: ["English"],
          currency: "US Dollar ($)",
          timezone: "UTC-5 to UTC-10"
        },
        {
          name: "Indonesia",
          code: "ID",
          flag: "🇮🇩",
          capital: "Jakarta",
          region: "Asia",
          population: 279476346,
          area: 1904569,
          languages: ["Indonesian"],
          currency: "Indonesian Rupiah (Rp)",
          timezone: "UTC+7 to UTC+9"
        },
        {
          name: "Pakistan",
          code: "PK",
          flag: "🇵🇰",
          capital: "Islamabad",
          region: "Asia",
          population: 235824862,
          area: 881912,
          languages: ["Urdu", "English"],
          currency: "Pakistani Rupee (₨)",
          timezone: "UTC+5"
        },
        {
          name: "Nigeria",
          code: "NG",
          flag: "🇳🇬",
          capital: "Abuja",
          region: "Africa",
          population: 223804632,
          area: 923768,
          languages: ["English"],
          currency: "Naira (₦)",
          timezone: "UTC+1"
        },
        {
          name: "Brazil",
          code: "BR",
          flag: "🇧🇷",
          capital: "Brasília",
          region: "South America",
          population: 216422446,
          area: 8515767,
          languages: ["Portuguese"],
          currency: "Brazilian Real (R$)",
          timezone: "UTC-2 to UTC-5"
        },
        {
          name: "Bangladesh",
          code: "BD",
          flag: "🇧🇩",
          capital: "Dhaka",
          region: "Asia",
          population: 172954319,
          area: 147570,
          languages: ["Bengali"],
          currency: "Taka (৳)",
          timezone: "UTC+6"
        },
        {
          name: "Russia",
          code: "RU",
          flag: "🇷🇺",
          capital: "Moscow",
          region: "Europe/Asia",
          population: 144444359,
          area: 17098242,
          languages: ["Russian"],
          currency: "Russian Ruble (₽)",
          timezone: "UTC+2 to UTC+12"
        },
        {
          name: "Mexico",
          code: "MX",
          flag: "🇲🇽",
          capital: "Mexico City",
          region: "North America",
          population: 128455567,
          area: 1964375,
          languages: ["Spanish"],
          currency: "Mexican Peso ($)",
          timezone: "UTC-5 to UTC-8"
        },
        {
          name: "Japan",
          code: "JP",
          flag: "🇯🇵",
          capital: "Tokyo",
          region: "Asia",
          population: 123294513,
          area: 377975,
          languages: ["Japanese"],
          currency: "Yen (¥)",
          timezone: "UTC+9"
        },
        {
          name: "Germany",
          code: "DE",
          flag: "🇩🇪",
          capital: "Berlin",
          region: "Europe",
          population: 84552242,
          area: 357022,
          languages: ["German"],
          currency: "Euro (€)",
          timezone: "UTC+1"
        },
        {
          name: "United Kingdom",
          code: "GB",
          flag: "🇬🇧",
          capital: "London",
          region: "Europe",
          population: 68265209,
          area: 242495,
          languages: ["English"],
          currency: "Pound Sterling (£)",
          timezone: "UTC+0"
        },
        {
          name: "France",
          code: "FR",
          flag: "🇫🇷",
          capital: "Paris",
          region: "Europe",
          population: 64531444,
          area: 643801,
          languages: ["French"],
          currency: "Euro (€)",
          timezone: "UTC+1"
        },
        {
          name: "Italy",
          code: "IT",
          flag: "🇮🇹",
          capital: "Rome",
          region: "Europe",
          population: 58853482,
          area: 301340,
          languages: ["Italian"],
          currency: "Euro (€)",
          timezone: "UTC+1"
        }
      ],
      totalCountries: 195,
      sources: ["ISO", "UN", "World Bank"],
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in flags function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
