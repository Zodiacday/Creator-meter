import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

// All routes that need to be pre-rendered for SEO
const routes = [
  "/",
  "/population",
  "/government",
  "/society",
  "/environment",
  "/food",
  "/water",
  "/energy",
  "/health",
  "/co2-emissions",
  "/coronavirus",
  "/countries",
  "/flags",
  "/food-agriculture",
  "/gdp",
  "/world-map",
  "/commodities",
  "/about",
  "/privacy",
  "/contact",
  "/data-methodology",
  "/data-sources",
  "/compare",
  "/blog",
  "/world-population-live",
  "/coronavirus-live-counter",
  "/world-gdp-live",
  "/us-national-debt-clock",
  "/life-expectancy-calculator",
  "/how-many-people-die-from-hunger-per-day",
  "/births-per-day-worldwide",
  "/deaths-per-day-worldwide",
  "/world-population-by-age",
  "/population-growth-rate-by-country",
  "/most-populated-countries-2025",
  "/least-populated-countries",
  "/median-age-by-country",
  "/fertility-rate-by-country",
  "/infant-mortality-rate",
  "/internet-users-worldwide",
  "/co2-emissions-per-capita",
  "/renewable-energy-by-country",
  "/government-spending-by-country",
  "/poverty-rate-by-country",
  "/world-population-by-continent-counter",
  "/global-gdp-by-country",
  "/widgets",
  "/widget/world-population",
  "/widget/world-gdp",
  "/widget/co2-emissions",
  "/widget/coronavirus",
  "/widget/births",
  "/widget/deaths",
  "/widget/health-spending",
  "/blog/population-trends-2025",
  "/blog/climate-data-explained",
  "/blog/understanding-gdp-growth",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      prerender({
        staticDir: path.join(__dirname, "dist"),
        routes,
        // Ensure proper rendering of dynamic content
        renderer: {
          renderAfterDocumentEvent: "render-event",
          renderAfterTime: 5000, // Wait 5 seconds for dynamic content to load
        },
        // Post-process to ensure meta tags are visible
        postProcess(renderedRoute) {
          // Ensure all meta tags and structured data are in the static HTML
          return renderedRoute;
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable static HTML generation for better SEO
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
