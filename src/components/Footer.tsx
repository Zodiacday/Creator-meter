
"use client";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-xl py-6 md:py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold mb-3 gradient-text">CreatorMeter</h3>
            <p className="text-xs text-muted-foreground">
              Real-time global data visualization platform presenting continuously updating statistics about the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                  <Link href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                  <Link href="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                  <Link href="/widgets" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Embeddable Widgets
                </Link>
              </li>
              <li>
                  <Link href="/data-sources" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Data Sources
                </Link>
              </li>
              <li>
                  <Link href="/compare" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Compare Countries
                </Link>
              </li>
              <li>
                  <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                  <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Contact</h3>
            <p className="text-xs text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:Asteriuselos@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                Asteriuselos@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* SEO Sitemap - All Routes */}
        <div className="border-t border-border pt-6 mt-6">
          <h3 className="text-sm font-semibold mb-3">Complete Sitemap</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
            <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <Link href="/population" className="text-muted-foreground hover:text-foreground">Population</Link>
            <Link href="/government" className="text-muted-foreground hover:text-foreground">Government</Link>
            <Link href="/society" className="text-muted-foreground hover:text-foreground">Society</Link>
            <Link href="/environment" className="text-muted-foreground hover:text-foreground">Environment</Link>
            <Link href="/co2-emissions" className="text-muted-foreground hover:text-foreground">CO2 Emissions</Link>
            <Link href="/coronavirus" className="text-muted-foreground hover:text-foreground">Coronavirus</Link>
            <Link href="/flags" className="text-muted-foreground hover:text-foreground">Flags</Link>
            <Link href="/food-agriculture" className="text-muted-foreground hover:text-foreground">Food Agriculture</Link>
            <Link href="/world-map" className="text-muted-foreground hover:text-foreground">World Map</Link>
            <Link href="/commodities" className="text-muted-foreground hover:text-foreground">Commodities</Link>
            <Link href="/coronavirus-live-counter" className="text-muted-foreground hover:text-foreground">Coronavirus Live</Link>
            <Link href="/world-gdp-live" className="text-muted-foreground hover:text-foreground">World GDP Live</Link>
            <Link href="/life-expectancy-calculator" className="text-muted-foreground hover:text-foreground">Life Expectancy</Link>
            <Link href="/how-many-people-die-from-hunger-per-day" className="text-muted-foreground hover:text-foreground">Hunger Deaths</Link>
            <Link href="/deaths-per-day-worldwide" className="text-muted-foreground hover:text-foreground">Deaths Per Day</Link>
            <Link href="/world-population-by-age" className="text-muted-foreground hover:text-foreground">Population By Age</Link>
            <Link href="/population-growth-rate-by-country" className="text-muted-foreground hover:text-foreground">Growth Rate</Link>
            <Link href="/most-populated-countries-2025" className="text-muted-foreground hover:text-foreground">Most Populated</Link>
            <Link href="/least-populated-countries" className="text-muted-foreground hover:text-foreground">Least Populated</Link>
            <Link href="/median-age-by-country" className="text-muted-foreground hover:text-foreground">Median Age</Link>
            <Link href="/fertility-rate-by-country" className="text-muted-foreground hover:text-foreground">Fertility Rate</Link>
            <Link href="/infant-mortality-rate" className="text-muted-foreground hover:text-foreground">Infant Mortality</Link>
            <Link href="/internet-users-worldwide" className="text-muted-foreground hover:text-foreground">Internet Users</Link>
            <Link href="/co2-emissions-per-capita" className="text-muted-foreground hover:text-foreground">CO2 Per Capita</Link>
            <Link href="/renewable-energy-by-country" className="text-muted-foreground hover:text-foreground">Renewable Energy</Link>
            <Link href="/government-spending-by-country" className="text-muted-foreground hover:text-foreground">Government Spending</Link>
            <Link href="/poverty-rate-by-country" className="text-muted-foreground hover:text-foreground">Poverty Rate</Link>
            <Link href="/world-population-by-continent-counter" className="text-muted-foreground hover:text-foreground">Population By Continent</Link>
            <Link href="/global-gdp-by-country" className="text-muted-foreground hover:text-foreground">Global GDP</Link>
            <Link href="/widgets" className="text-muted-foreground hover:text-foreground">Widgets</Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            <Link href="/data-methodology" className="text-muted-foreground hover:text-foreground">Data Methodology</Link>
            <Link href="/data-sources" className="text-muted-foreground hover:text-foreground">Data Sources</Link>
            <Link href="/compare" className="text-muted-foreground hover:text-foreground">Compare</Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 mt-6 text-center">
          <p className="text-xs text-muted-foreground mb-2">
            Data sources: United Nations, World Health Organization, International Energy Agency, and more
          </p>
          <p className="text-xs text-muted-foreground">
            Statistics are updated in real-time based on the latest available data
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} CreatorMeter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
