import { Navigation } from "@/components/Navigation";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceCitation } from "@/components/SourceCitation";
import { ExpandableInfo } from "@/components/ExpandableInfo";
import { useRealtimeCounter } from "@/hooks/useRealtimeCounter";
import { DollarSign, TrendingUp, AlertCircle, Users } from "lucide-react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const UsNationalDebtClockPage = () => {
  const nationalDebt = useRealtimeCounter({
    initialValue: 34500000000000,
    incrementPerSecond: 100000,
    enabled: true
  });

  const debtPerCitizen = useRealtimeCounter({
    initialValue: 103000,
    incrementPerSecond: 0.3,
    enabled: true
  });

  const debtPerTaxpayer = useRealtimeCounter({
    initialValue: 267000,
    incrementPerSecond: 0.8,
    enabled: true
  });

  const historicalDebt = [
    { year: "2000", debt: 5.7 },
    { year: "2005", debt: 7.9 },
    { year: "2010", debt: 13.5 },
    { year: "2015", debt: 18.1 },
    { year: "2020", debt: 27.7 },
    { year: "2021", debt: 28.4 },
    { year: "2022", debt: 30.9 },
    { year: "2023", debt: 33.2 },
    { year: "2024", debt: 34.5 }
  ];

  const debtByCategory = [
    { category: "Social Security", amount: 1100, color: "#3b82f6" },
    { category: "Medicare", amount: 850, color: "#10b981" },
    { category: "Defense", amount: 820, color: "#f59e0b" },
    { category: "Interest", amount: 660, color: "#ef4444" },
    { category: "Medicaid", amount: 590, color: "#8b5cf6" },
    { category: "Other", amount: 1480, color: "#ec4899" }
  ];

  const debtToGdpData = [
    { year: "2000", ratio: 56 },
    { year: "2005", ratio: 61 },
    { year: "2010", ratio: 91 },
    { year: "2015", ratio: 99 },
    { year: "2020", ratio: 129 },
    { year: "2021", ratio: 124 },
    { year: "2022", ratio: 121 },
    { year: "2023", ratio: 123 },
    { year: "2024", ratio: 126 }
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

  const faqData = [
    {
      question: "What is the current US national debt?",
      answer: "The US national debt currently exceeds $34.5 trillion and is increasing by approximately $100,000 per second. This represents the total amount of money the federal government has borrowed to cover budget deficits."
    },
    {
      question: "How much is the national debt per citizen?",
      answer: "The national debt per US citizen is approximately $103,000, while per taxpayer it's about $267,000. This is calculated by dividing the total national debt by the number of citizens or taxpayers."
    },
    {
      question: "What causes the national debt to increase?",
      answer: "The national debt increases when the government spends more than it collects in revenue. Major contributors include social programs (Social Security, Medicare), defense spending, and interest payments on existing debt."
    },
    {
      question: "Is the US national debt a problem?",
      answer: "Economists debate this issue. While high debt levels can limit fiscal flexibility and increase interest costs, the US benefits from being able to borrow at low rates. The debt-to-GDP ratio of 126% is above the 90% threshold that some economists consider problematic."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "US National Debt Clock", url: "/us-national-debt-clock" }
  ];

  return (
    <>
      <MetaTags
        title="US National Debt Clock - Real-Time $34.5 Trillion America Debt 2025"
        description="Live US national debt counter showing $34.5 trillion growing in real-time. Track debt per citizen ($103k), per taxpayer ($267k), historical trends, debt-to-GDP ratio, and spending breakdown 2025."
        keywords="US national debt clock, debt clock, US debt counter, America debt, national debt per citizen, federal debt clock, debt to GDP ratio, US debt live, debt clock 2025"
        canonical="https://creatormeter.com/us-national-debt-clock"
      />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SchemaMarkup
        type="Dataset"
        data={{
          name: "US National Debt Clock Statistics",
          description: "Real-time US national debt counter with per-citizen calculations and spending breakdowns",
          url: "https://creatormeter.com/us-national-debt-clock",
          keywords: ["US national debt", "debt clock", "federal debt", "government spending"],
          temporalCoverage: "2000/2024",
          spatialCoverage: "United States"
        }}
      />
      <SchemaMarkup type="FAQPage" data={faqData} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              US National Debt Clock
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-time tracker of America's national debt showing total debt, per-citizen obligations, and spending trends
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard
              label="US National Debt"
              value={nationalDebt}
              icon={DollarSign}
              color="#ef4444"
              subtitle="USD"
              increment={100000}
            />
            <StatCard
              label="Debt Per Citizen"
              value={debtPerCitizen}
              icon={Users}
              color="#f59e0b"
              subtitle="USD"
              increment={0.3}
            />
            <StatCard
              label="Debt Per Taxpayer"
              value={debtPerTaxpayer}
              icon={AlertCircle}
              color="#8b5cf6"
              subtitle="USD"
              increment={0.8}
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <ChartCard
              title="Historical US National Debt (Trillions USD)"
              icon={TrendingUp}
              color="#ef4444"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalDebt}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="debt" stroke="#ef4444" strokeWidth={2} name="National Debt (Trillions)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Federal Spending by Category (Billions USD)"
              icon={DollarSign}
              color="#3b82f6"
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={debtByCategory}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ category, percent }) => `${category} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="amount"
                  >
                    {debtByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Debt-to-GDP Ratio (%)"
              icon={TrendingUp}
              color="#f59e0b"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={debtToGdpData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="ratio" stroke="#f59e0b" strokeWidth={2} name="Debt-to-GDP (%)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <QuickFacts
              facts={[
                "The debt grows by about $100,000 every second",
                "US debt exceeded $1 trillion for the first time in 1981",
                "Interest on the debt costs over $660 billion annually",
                "Debt-to-GDP ratio reached 126% in 2024",
                "Social Security and Medicare account for $1.95 trillion in spending",
                "The US has never defaulted on its debt obligations"
              ]}
            />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <ExpandableInfo
                  key={index}
                  title={faq.question}
                >
                  {faq.answer}
                </ExpandableInfo>
              ))}
            </div>
          </section>

          <SourceCitation
            sources={[
              { name: "TreasuryDirect", url: "https://www.treasurydirect.gov/govt/reports/pd/pd.htm", organization: "U.S. Treasury Department" },
              { name: "Budget and Economic Data", url: "https://www.cbo.gov/data", organization: "Congressional Budget Office (CBO)" },
              { name: "Economic Data", url: "https://fred.stlouisfed.org/", organization: "Federal Reserve (FRED)" },
              { name: "Budget Data", url: "https://www.whitehouse.gov/omb/", organization: "Office of Management and Budget (OMB)" }
            ]}
          />
        </main>
      </div>
    </>
  );
};

export default UsNationalDebtClockPage;
