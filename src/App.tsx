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
import CommoditiesPage from "./pages/CommoditiesPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import ContactPage from "./pages/ContactPage";
import WorldPopulationLivePage from "./pages/WorldPopulationLivePage";
import CoronavirusLiveCounterPage from "./pages/CoronavirusLiveCounterPage";
import WorldGdpLivePage from "./pages/WorldGdpLivePage";
import UsNationalDebtClockPage from "./pages/UsNationalDebtClockPage";
import LifeExpectancyCalculatorPage from "./pages/LifeExpectancyCalculatorPage";
import HungerDeathsPage from "./pages/HungerDeathsPage";
import BirthsPerDayPage from "./pages/BirthsPerDayPage";
import DeathsPerDayPage from "./pages/DeathsPerDayPage";
import PopulationByAgePage from "./pages/PopulationByAgePage";
import PopulationGrowthRatePage from "./pages/PopulationGrowthRatePage";
import MostPopulatedCountriesPage from "./pages/MostPopulatedCountriesPage";
import LeastPopulatedCountriesPage from "./pages/LeastPopulatedCountriesPage";
import MedianAgeByCountryPage from "./pages/MedianAgeByCountryPage";
import FertilityRateByCountryPage from "./pages/FertilityRateByCountryPage";
import InfantMortalityRatePage from "./pages/InfantMortalityRatePage";
import InternetUsersPage from "./pages/InternetUsersPage";
import Co2EmissionsPerCapitaPage from "./pages/Co2EmissionsPerCapitaPage";
import RenewableEnergyPage from "./pages/RenewableEnergyPage";
import GovernmentSpendingPage from "./pages/GovernmentSpendingPage";
import PovertyRatePage from "./pages/PovertyRatePage";
import WorldPopulationByContinentCounterPage from "./pages/WorldPopulationByContinentCounterPage";
import GlobalGdpByCountryPage from "./pages/GlobalGdpByCountryPage";

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
          <Route path="/commodities" element={<CommoditiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/world-population-live" element={<WorldPopulationLivePage />} />
          <Route path="/coronavirus-live-counter" element={<CoronavirusLiveCounterPage />} />
          <Route path="/world-gdp-live" element={<WorldGdpLivePage />} />
          <Route path="/us-national-debt-clock" element={<UsNationalDebtClockPage />} />
          <Route path="/life-expectancy-calculator" element={<LifeExpectancyCalculatorPage />} />
          <Route path="/how-many-people-die-from-hunger-per-day" element={<HungerDeathsPage />} />
          <Route path="/births-per-day-worldwide" element={<BirthsPerDayPage />} />
          <Route path="/deaths-per-day-worldwide" element={<DeathsPerDayPage />} />
          <Route path="/world-population-by-age" element={<PopulationByAgePage />} />
          <Route path="/population-growth-rate-by-country" element={<PopulationGrowthRatePage />} />
          <Route path="/most-populated-countries-2025" element={<MostPopulatedCountriesPage />} />
          <Route path="/least-populated-countries" element={<LeastPopulatedCountriesPage />} />
          <Route path="/median-age-by-country" element={<MedianAgeByCountryPage />} />
          <Route path="/fertility-rate-by-country" element={<FertilityRateByCountryPage />} />
          <Route path="/infant-mortality-rate" element={<InfantMortalityRatePage />} />
          <Route path="/internet-users-worldwide" element={<InternetUsersPage />} />
          <Route path="/co2-emissions-per-capita" element={<Co2EmissionsPerCapitaPage />} />
          <Route path="/renewable-energy-by-country" element={<RenewableEnergyPage />} />
          <Route path="/government-spending-by-country" element={<GovernmentSpendingPage />} />
          <Route path="/poverty-rate-by-country" element={<PovertyRatePage />} />
          <Route path="/world-population-by-continent-counter" element={<WorldPopulationByContinentCounterPage />} />
          <Route path="/global-gdp-by-country" element={<GlobalGdpByCountryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
