import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SearchResult {
  title: string;
  path: string;
  description: string;
  category: string;
}

const allPages: SearchResult[] = [
  { title: "World Population Live", path: "/world-population-live", description: "Real-time world population counter", category: "Population" },
  { title: "Births Per Day", path: "/births-per-day", description: "Daily global birth statistics", category: "Population" },
  { title: "Deaths Per Day", path: "/deaths-per-day", description: "Daily global death statistics", category: "Population" },
  { title: "Population by Age", path: "/population-by-age", description: "Age distribution worldwide", category: "Population" },
  { title: "Population Growth Rate", path: "/population-growth-rate", description: "Annual population growth trends", category: "Population" },
  { title: "Most Populated Countries", path: "/most-populated-countries", description: "Top countries by population", category: "Population" },
  { title: "Least Populated Countries", path: "/least-populated-countries", description: "Smallest countries by population", category: "Population" },
  { title: "Median Age by Country", path: "/median-age-by-country", description: "Median age statistics globally", category: "Population" },
  { title: "Fertility Rate by Country", path: "/fertility-rate-by-country", description: "Birth rates worldwide", category: "Population" },
  { title: "Infant Mortality Rate", path: "/infant-mortality-rate", description: "Infant death rates by country", category: "Health" },
  { title: "Life Expectancy Calculator", path: "/life-expectancy-calculator", description: "Calculate your life expectancy", category: "Health" },
  { title: "Coronavirus Live Counter", path: "/coronavirus-live-counter", description: "Live COVID-19 global statistics", category: "Health" },
  { title: "Coronavirus Statistics", path: "/coronavirus", description: "COVID-19 historical data", category: "Health" },
  { title: "Health Statistics", path: "/health", description: "Global health metrics", category: "Health" },
  { title: "World GDP Live", path: "/world-gdp-live", description: "Real-time global economic data", category: "Economy" },
  { title: "GDP by Country", path: "/gdp", description: "Economic output by nation", category: "Economy" },
  { title: "Global GDP by Country", path: "/global-gdp-by-country", description: "GDP rankings and trends", category: "Economy" },
  { title: "US National Debt Clock", path: "/us-national-debt-clock", description: "Live US debt counter", category: "Economy" },
  { title: "Government Spending", path: "/government-spending", description: "Public expenditure data", category: "Government" },
  { title: "Poverty Rate", path: "/poverty-rate", description: "Global poverty statistics", category: "Society" },
  { title: "CO₂ Emissions", path: "/co2-emissions", description: "Global carbon emissions", category: "Environment" },
  { title: "CO₂ Emissions Per Capita", path: "/co2-emissions-per-capita", description: "Per person carbon footprint", category: "Environment" },
  { title: "Renewable Energy", path: "/renewable-energy", description: "Clean energy adoption", category: "Energy" },
  { title: "Energy Statistics", path: "/energy", description: "Global energy consumption", category: "Energy" },
  { title: "Food & Agriculture", path: "/food-agriculture", description: "Food production data", category: "Food" },
  { title: "Hunger Deaths", path: "/hunger-deaths", description: "Malnutrition statistics", category: "Food" },
  { title: "Water Statistics", path: "/water", description: "Water access and usage", category: "Water" },
  { title: "Countries", path: "/countries", description: "Country population rankings", category: "Population" },
  { title: "World Map", path: "/world-map", description: "Interactive statistics map", category: "Geography" },
  { title: "Flags", path: "/flags", description: "Country flags and info", category: "Geography" },
  { title: "Internet Users", path: "/internet-users", description: "Global internet adoption", category: "Technology" },
  { title: "Commodities", path: "/commodities", description: "Market prices and currencies", category: "Economy" },
  { title: "Compare Statistics", path: "/compare", description: "Side-by-side comparisons", category: "Tools" },
  { title: "Data Sources", path: "/data-sources", description: "Data methodology", category: "About" },
  { title: "Blog", path: "/blog", description: "Insights and articles", category: "Content" },
];

export const SiteSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTerms = query.toLowerCase().split(" ");
    const filtered = allPages.filter((page) => {
      const searchText = `${page.title} ${page.description} ${page.category}`.toLowerCase();
      return searchTerms.every((term) => searchText.includes(term));
    });

    setResults(filtered.slice(0, 8));
  }, [query]);

  const handleSelect = (path: string) => {
    setOpen(false);
    setQuery("");
    navigate(path);
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative w-full md:w-64 justify-start text-sm text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search statistics...
        <kbd className="pointer-events-none absolute right-2 hidden h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 md:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="sr-only">Search Statistics</DialogTitle>
          </DialogHeader>
          <div className="flex items-center border-b border-border px-4">
            <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
            <Input
              placeholder="Search for statistics, countries, or topics..."
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="max-h-96 overflow-y-auto p-2">
            {results.length > 0 ? (
              <div className="space-y-1">
                {results.map((result) => (
                  <button
                    key={result.path}
                    onClick={() => handleSelect(result.path)}
                    className="w-full flex items-start gap-3 rounded-md p-3 text-left hover:bg-accent transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {result.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {result.description}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded bg-muted">
                      {result.category}
                    </span>
                  </button>
                ))}
              </div>
            ) : query ? (
              <div className="py-12 text-center text-sm text-muted-foreground">
                No results found for "{query}"
              </div>
            ) : (
              <div className="py-12 text-center text-sm text-muted-foreground">
                Start typing to search across 50+ statistics pages
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
