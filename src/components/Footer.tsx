import { Link } from "react-router-dom";

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
                <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/widgets" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Embeddable Widgets
                </Link>
              </li>
              <li>
                <Link to="/data-sources" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Data Sources
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Compare Countries
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
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
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <Link to="/population" className="text-muted-foreground hover:text-foreground">Population</Link>
            <Link to="/government" className="text-muted-foreground hover:text-foreground">Government</Link>
            <Link to="/society" className="text-muted-foreground hover:text-foreground">Society</Link>
            <Link to="/environment" className="text-muted-foreground hover:text-foreground">Environment</Link>
            <Link to="/food" className="text-muted-foreground hover:text-foreground">Food</Link>
            <Link to="/water" className="text-muted-foreground hover:text-foreground">Water</Link>
            <Link to="/energy" className="text-muted-foreground hover:text-foreground">Energy</Link>
            <Link to="/health" className="text-muted-foreground hover:text-foreground">Health</Link>
            <Link to="/co2-emissions" className="text-muted-foreground hover:text-foreground">CO2 Emissions</Link>
            <Link to="/coronavirus" className="text-muted-foreground hover:text-foreground">Coronavirus</Link>
            <Link to="/countries" className="text-muted-foreground hover:text-foreground">Countries</Link>
            <Link to="/flags" className="text-muted-foreground hover:text-foreground">Flags</Link>
            <Link to="/food-agriculture" className="text-muted-foreground hover:text-foreground">Food Agriculture</Link>
            <Link to="/gdp" className="text-muted-foreground hover:text-foreground">GDP</Link>
            <Link to="/world-map" className="text-muted-foreground hover:text-foreground">World Map</Link>
            <Link to="/commodities" className="text-muted-foreground hover:text-foreground">Commodities</Link>
            <Link to="/world-population-live" className="text-muted-foreground hover:text-foreground">World Population Live</Link>
            <Link to="/coronavirus-live-counter" className="text-muted-foreground hover:text-foreground">Coronavirus Live</Link>
            <Link to="/world-gdp-live" className="text-muted-foreground hover:text-foreground">World GDP Live</Link>
            <Link to="/us-national-debt-clock" className="text-muted-foreground hover:text-foreground">US National Debt</Link>
            <Link to="/life-expectancy-calculator" className="text-muted-foreground hover:text-foreground">Life Expectancy</Link>
            <Link to="/how-many-people-die-from-hunger-per-day" className="text-muted-foreground hover:text-foreground">Hunger Deaths</Link>
            <Link to="/births-per-day-worldwide" className="text-muted-foreground hover:text-foreground">Births Per Day</Link>
            <Link to="/deaths-per-day-worldwide" className="text-muted-foreground hover:text-foreground">Deaths Per Day</Link>
            <Link to="/world-population-by-age" className="text-muted-foreground hover:text-foreground">Population By Age</Link>
            <Link to="/population-growth-rate-by-country" className="text-muted-foreground hover:text-foreground">Growth Rate</Link>
            <Link to="/most-populated-countries-2025" className="text-muted-foreground hover:text-foreground">Most Populated</Link>
            <Link to="/least-populated-countries" className="text-muted-foreground hover:text-foreground">Least Populated</Link>
            <Link to="/median-age-by-country" className="text-muted-foreground hover:text-foreground">Median Age</Link>
            <Link to="/fertility-rate-by-country" className="text-muted-foreground hover:text-foreground">Fertility Rate</Link>
            <Link to="/infant-mortality-rate" className="text-muted-foreground hover:text-foreground">Infant Mortality</Link>
            <Link to="/internet-users-worldwide" className="text-muted-foreground hover:text-foreground">Internet Users</Link>
            <Link to="/co2-emissions-per-capita" className="text-muted-foreground hover:text-foreground">CO2 Per Capita</Link>
            <Link to="/renewable-energy-by-country" className="text-muted-foreground hover:text-foreground">Renewable Energy</Link>
            <Link to="/government-spending-by-country" className="text-muted-foreground hover:text-foreground">Government Spending</Link>
            <Link to="/poverty-rate-by-country" className="text-muted-foreground hover:text-foreground">Poverty Rate</Link>
            <Link to="/world-population-by-continent-counter" className="text-muted-foreground hover:text-foreground">Population By Continent</Link>
            <Link to="/global-gdp-by-country" className="text-muted-foreground hover:text-foreground">Global GDP</Link>
            <Link to="/widgets" className="text-muted-foreground hover:text-foreground">Widgets</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            <Link to="/data-methodology" className="text-muted-foreground hover:text-foreground">Data Methodology</Link>
            <Link to="/data-sources" className="text-muted-foreground hover:text-foreground">Data Sources</Link>
            <Link to="/compare" className="text-muted-foreground hover:text-foreground">Compare</Link>
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
