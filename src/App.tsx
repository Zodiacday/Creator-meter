import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PopulationPage from "./pages/PopulationPage";
import GovernmentPage from "./pages/GovernmentPage";
import SocietyPage from "./pages/SocietyPage";
import EnvironmentPage from "./pages/EnvironmentPage";
import FoodPage from "./pages/FoodPage";
import WaterPage from "./pages/WaterPage";
import EnergyPage from "./pages/EnergyPage";
import HealthPage from "./pages/HealthPage";
import Co2EmissionsPage from "./pages/Co2EmissionsPage";
import CoronavirusPage from "./pages/CoronavirusPage";
import CountriesPage from "./pages/CountriesPage";
import FlagsPage from "./pages/FlagsPage";
import FoodAgriculturePage from "./pages/FoodAgriculturePage";
import GdpPage from "./pages/GdpPage";
import WorldMapPage from "./pages/WorldMapPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/population" element={<PopulationPage />} />
          <Route path="/government" element={<GovernmentPage />} />
          <Route path="/society" element={<SocietyPage />} />
          <Route path="/environment" element={<EnvironmentPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/water" element={<WaterPage />} />
          <Route path="/energy" element={<EnergyPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/co2-emissions" element={<Co2EmissionsPage />} />
          <Route path="/coronavirus" element={<CoronavirusPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/flags" element={<FlagsPage />} />
          <Route path="/food-agriculture" element={<FoodAgriculturePage />} />
          <Route path="/gdp" element={<GdpPage />} />
          <Route path="/world-map" element={<WorldMapPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
