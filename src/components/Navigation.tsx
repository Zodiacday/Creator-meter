import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const additionalPages = [
    { name: "World Population Live", path: "/world-population-live", description: "Real-time world population counter" },
    { name: "Coronavirus Live Counter", path: "/coronavirus-live-counter", description: "Live COVID-19 global statistics" },
    { name: "World GDP Live", path: "/world-gdp-live", description: "Real-time global economic data" },
    { name: "US National Debt Clock", path: "/us-national-debt-clock", description: "Live US debt counter" },
    { name: "Life Expectancy Calculator", path: "/life-expectancy-calculator", description: "Calculate your life expectancy" },
    { name: "CO₂ Emissions", path: "/co2-emissions", description: "Global carbon emissions trends" },
    { name: "Coronavirus", path: "/coronavirus", description: "COVID-19 statistics and trends" },
    { name: "Countries", path: "/countries", description: "Population rankings by country" },
    { name: "Flags", path: "/flags", description: "Country flags and details" },
    { name: "Food & Agriculture", path: "/food-agriculture", description: "Global food production stats" },
    { name: "GDP by Country", path: "/gdp", description: "Economic output and growth" },
    { name: "World Map", path: "/world-map", description: "Interactive statistics map" },
    { name: "Commodities & Currencies", path: "/commodities", description: "Market prices and exchange rates" },
  ];

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Creator Meter Logo" className="w-10 h-10 md:w-14 md:h-14" />
            <h1 className="text-base md:text-xl font-bold gradient-text">Creator Meter</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  More Statistics
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[280px] bg-popover border border-border shadow-lg z-50">
                {additionalPages.map((page) => (
                  <DropdownMenuItem key={page.path} asChild>
                    <Link to={page.path} className="cursor-pointer">
                      <div className="flex flex-col gap-1">
                        <div className="font-medium">{page.name}</div>
                        <div className="text-xs text-muted-foreground">{page.description}</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <p className="text-sm text-muted-foreground">Real-time global statistics</p>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <h3 className="font-semibold text-lg mb-2">More Statistics</h3>
                  {additionalPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="block space-y-1 rounded-md p-3 hover:bg-accent transition-colors"
                    >
                      <div className="text-sm font-medium">{page.name}</div>
                      <p className="text-sm text-muted-foreground">{page.description}</p>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
