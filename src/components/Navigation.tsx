import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const additionalPages = [
    { name: "CO₂ Emissions", path: "/co2-emissions", description: "Global carbon emissions trends" },
    { name: "Coronavirus", path: "/coronavirus", description: "COVID-19 statistics and trends" },
    { name: "Countries", path: "/countries", description: "Population rankings by country" },
    { name: "Flags", path: "/flags", description: "Country flags and details" },
    { name: "Food & Agriculture", path: "/food-agriculture", description: "Global food production stats" },
    { name: "GDP by Country", path: "/gdp", description: "Economic output and growth" },
    { name: "World Map", path: "/world-map", description: "Interactive statistics map" },
  ];

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Creator Meter Logo" className="w-12 h-12 md:w-16 md:h-16" />
            <h1 className="text-lg md:text-2xl font-bold gradient-text">Creator Meter</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>More Statistics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[240px] p-3 bg-popover border border-border rounded-lg shadow-lg z-50">
                      {additionalPages.map((page) => (
                        <li key={page.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={page.path}
                              className="block px-4 py-3 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              <div className="font-medium">{page.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">{page.description}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
