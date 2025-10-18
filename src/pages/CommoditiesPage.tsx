import { Navigation } from "@/components/Navigation";
import { TrendingUp, DollarSign, BarChart3, Coins } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const CommoditiesPage = () => {
  // Sample data for commodities
  const commodityPrices = [
    { name: "Gold", price: 2043, change: 1.2, unit: "$/oz" },
    { name: "Silver", price: 24.5, change: -0.8, unit: "$/oz" },
    { name: "Crude Oil (WTI)", price: 78.2, change: 2.1, unit: "$/barrel" },
    { name: "Natural Gas", price: 2.85, change: -1.5, unit: "$/MMBtu" },
    { name: "Copper", price: 8542, change: 0.9, unit: "$/ton" },
    { name: "Wheat", price: 625, change: -2.3, unit: "$/bushel" },
    { name: "Coffee", price: 175, change: 1.8, unit: "$/lb" },
    { name: "Cotton", price: 84.5, change: 0.5, unit: "¢/lb" },
  ];

  const currencyRates = [
    { currency: "EUR/USD", rate: 1.088, change: 0.15 },
    { currency: "GBP/USD", rate: 1.268, change: -0.22 },
    { currency: "USD/JPY", rate: 149.85, change: 0.38 },
    { currency: "USD/CHF", rate: 0.875, change: -0.11 },
    { currency: "AUD/USD", rate: 0.658, change: 0.45 },
    { currency: "USD/CAD", rate: 1.352, change: 0.18 },
  ];

  const historicalGold = [
    { date: "Jan", price: 2020 },
    { date: "Feb", price: 2035 },
    { date: "Mar", price: 2055 },
    { date: "Apr", price: 2040 },
    { date: "May", price: 2025 },
    { date: "Jun", price: 2043 },
  ];

  const commodityVolume = [
    { name: "Oil", volume: 98.5 },
    { name: "Gold", volume: 187.4 },
    { name: "Natural Gas", volume: 145.2 },
    { name: "Copper", volume: 76.8 },
    { name: "Silver", volume: 45.3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[hsl(var(--government))]/20">
            <BarChart3 className="w-8 h-8 text-[hsl(var(--government))]" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Commodities & Currencies</h1>
            <p className="text-muted-foreground mt-2">Real-time tracking of global commodity prices and currency exchange rates</p>
          </div>
        </div>

        <div className="mb-8">
          <QuickFacts facts={[
            "Commodity markets trade over $20 trillion worth of goods annually",
            "Gold is considered a safe haven asset during economic uncertainty",
            "Oil prices influence inflation rates worldwide",
            "Currency exchange rates affect international trade and investment",
            "Agricultural commodities feed the global population of 8+ billion"
          ]} />
        </div>

        {/* Summary Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <StatCard
            icon={TrendingUp}
            label="Gold Price"
            value={2043}
            color="hsl(var(--chart-1))"
            subtitle="$/oz"
          />
          <StatCard
            icon={BarChart3}
            label="Oil Price (WTI)"
            value={78.2}
            color="hsl(var(--chart-2))"
            subtitle="$/barrel"
          />
          <StatCard
            icon={DollarSign}
            label="EUR/USD"
            value={1.088}
            color="hsl(var(--chart-3))"
            subtitle="Exchange Rate"
          />
          <StatCard
            icon={Coins}
            label="Daily Volume"
            value={187.4}
            color="hsl(var(--chart-4))"
            subtitle="Million oz"
          />
        </div>

        {/* Charts */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ChartCard title="Gold Price Trend (6 Months)" icon={TrendingUp} color="hsl(var(--chart-1))">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={historicalGold}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="price" stroke="hsl(var(--chart-1))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Trading Volume by Commodity" icon={BarChart3} color="hsl(var(--chart-2))">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={commodityVolume}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="volume" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Commodity Prices */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[hsl(var(--chart-1))]" />
                Commodity Prices
              </h3>
              <div className="space-y-3">
                {commodityPrices.map((commodity) => (
                  <div key={commodity.name} className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div>
                      <p className="font-medium">{commodity.name}</p>
                      <p className="text-sm text-muted-foreground">{commodity.unit}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{commodity.price}</p>
                      <p className={`text-sm ${commodity.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {commodity.change >= 0 ? '+' : ''}{commodity.change}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[hsl(var(--chart-3))]" />
                Currency Exchange Rates
              </h3>
              <div className="space-y-3">
                {currencyRates.map((curr) => (
                  <div key={curr.currency} className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div>
                      <p className="font-medium">{curr.currency}</p>
                      <p className="text-sm text-muted-foreground">Exchange Rate</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{curr.rate.toFixed(3)}</p>
                      <p className={`text-sm ${curr.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {curr.change >= 0 ? '+' : ''}{curr.change}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <SourceCitation sources={[
            {
              name: "Commodity Prices",
              url: "https://www.worldbank.org/en/research/commodity-markets",
              organization: "World Bank Commodity Markets"
            },
            {
              name: "Currency Exchange Rates",
              url: "https://www.imf.org/external/np/fin/data/rms_mth.aspx",
              organization: "International Monetary Fund (IMF)"
            },
            {
              name: "Energy Statistics",
              url: "https://www.iea.org/data-and-statistics",
              organization: "International Energy Agency (IEA)"
            }
          ]} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommoditiesPage;
