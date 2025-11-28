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
    // Climate Emergency Metrics 2025
    const methanePerSecond = 31.7; // kg per second
    const startOfYear = new Date(2025, 0, 1).getTime();
    const now = Date.now();
    const secondsSinceYearStart = (now - startOfYear) / 1000;
    const methaneThisYear = Math.floor(methanePerSecond * secondsSinceYearStart);

    const data = {
      year: 2025,
      status: "Active climate monitoring",
      methaneEmissions: {
        annual: 1000000000,
        thisYear: methaneThisYear,
        perSecond: methanePerSecond,
        yearOverYearChange: 2.3,
        unit: "metric tons"
      },
      co2Emissions: {
        annual: 37500000000,
        yearOverYearChange: -0.8,
        targetReduction: -45,
        actualProgress: -12.4
      },
      globalTargets: {
        netZeroCommitments: 142,
        countriesOnTrack: 23,
        countriesBehind: 119,
        globalTemperatureTarget: 1.5,
        currentTrajectory: 2.7
      },
      nationalPledges: [
        { country: "EU", target: "Net zero by 2050", progress: 43.2, status: "On track" },
        { country: "USA", target: "Net zero by 2050", progress: 38.7, status: "Needs acceleration" },
        { country: "China", target: "Net zero by 2060", progress: 31.4, status: "Moderate progress" },
        { country: "India", target: "Net zero by 2070", progress: 28.9, status: "Early stage" },
        { country: "UK", target: "Net zero by 2050", progress: 48.3, status: "Leading" },
        { country: "Japan", target: "Net zero by 2050", progress: 35.6, status: "Moderate progress" },
        { country: "Canada", target: "Net zero by 2050", progress: 34.2, status: "Needs acceleration" },
        { country: "Australia", target: "Net zero by 2050", progress: 29.7, status: "Behind schedule" },
        { country: "Brazil", target: "Net zero by 2050", progress: 26.8, status: "Early stage" },
        { country: "South Korea", target: "Net zero by 2050", progress: 32.4, status: "Moderate progress" }
      ],
      renewableEnergy: {
        globalCapacity: 3870000,
        share: 31.2,
        yearOverYearGrowth: 9.8,
        investment: 678000000000
      },
      extremeEvents: {
        heatwaves: 234,
        floods: 189,
        droughts: 156,
        wildfires: 98,
        hurricanes: 45
      },
      yearOverYearTimeline: [
        { year: "2015", co2: 35900000000, methane: 950000000, temp: 1.0 },
        { year: "2016", co2: 36100000000, methane: 962000000, temp: 1.1 },
        { year: "2017", co2: 36200000000, methane: 974000000, temp: 1.0 },
        { year: "2018", co2: 36600000000, methane: 986000000, temp: 1.0 },
        { year: "2019", co2: 36700000000, methane: 998000000, temp: 1.1 },
        { year: "2020", co2: 35300000000, methane: 1010000000, temp: 1.2 },
        { year: "2021", co2: 36300000000, methane: 1022000000, temp: 1.1 },
        { year: "2022", co2: 37100000000, methane: 1034000000, temp: 1.2 },
        { year: "2023", co2: 37400000000, methane: 1046000000, temp: 1.3 },
        { year: "2024", co2: 37800000000, methane: 1058000000, temp: 1.4 },
        { year: "2025", co2: 37500000000, methane: 1070000000, temp: 1.5 }
      ],
      milestones: {
        achieved: [
          "Global renewable capacity exceeded 3,800 GW",
          "Electric vehicle sales surpassed 18 million units",
          "142 countries committed to net-zero targets",
          "Coal use declined 15% in OECD countries"
        ],
        missed: [
          "Global emissions not decreasing fast enough",
          "Temperature rise exceeds 1.5°C pathway",
          "Deforestation still occurring at high rates",
          "Climate finance below required levels"
        ],
        upcoming: [
          "COP31 climate summit in November 2025",
          "Updated national climate pledges due",
          "Green hydrogen scaling targets",
          "Carbon capture technology deployment"
        ]
      },
      sources: ["IPCC", "UNEP", "IEA", "Global Carbon Project", "National Climate Agencies"],
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in climate-emergency function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});