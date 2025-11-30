"use client";
import { Menu, ChevronDown, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SiteSearch } from "@/components/SiteSearch";

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
    <header className="border-b border-border bg-card/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Optional Back Button (shows when not on home) */}
          <div className="flex items-center gap-2">
            {/* Back button will be rendered conditionally below */}
            <BackButtonInline />

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Creator Meter Logo" className="w-14 h-14 md:w-20 md:h-20" />
            <div className="flex flex-col leading-tight">
              <h1 className="text-base md:text-xl font-bold text-foreground">CreatorMeter</h1>
              <span className="text-[13px] mt-[3px] text-muted-foreground/100">Global Statistics & Live World Data</span>
            </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <SiteSearch />
            <Link href="/data-sources" className="text-sm text-muted-foreground hover:text-foreground transition-colors dark:text-white">
              Data Sources
            </Link>
            <Link href="/compare" className="text-sm text-muted-foreground hover:text-foreground transition-colors dark:text-white">
              Compare
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors dark:text-white">
              Blog
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  More Statistics
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[600px] bg-popover border border-border shadow-lg z-50">
                <div className="grid grid-cols-2 gap-1 p-1">
                  {additionalPages.map((page) => (
                    <DropdownMenuItem key={page.path} asChild>
                      <Link href={page.path} className="cursor-pointer dark:text-white">
                        <div className="flex flex-col gap-1">
                          <div className="font-medium">{page.name}</div>
                          <div className="text-xs text-muted-foreground">{page.description}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-4">
                  <SiteSearch />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-sm mb-2 px-2">More Statistics</h3>
                  {additionalPages.map((page) => (
                      <Link
                      key={page.path}
                        href={page.path}
                      className="block rounded-md px-2 py-1.5 hover:bg-accent transition-colors dark:text-white"
                    >
                      <div className="text-xs font-medium">{page.name}</div>
                    </Link>
                  ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

// Small inline back button component placed in header
  const BackButtonInline = () => {
  const pathname = usePathname();

  // Don't show back button on home route
  if (pathname === "/") return null;

  const goBack = () => {
    // Prefer router navigate, fallback to window.history
    window.history.back();
  };

  return (
    <button
      onClick={goBack}
      aria-label="Go back"
      className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-border bg-card text-foreground hover:bg-opacity-90 transition-colors"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
  );
};
