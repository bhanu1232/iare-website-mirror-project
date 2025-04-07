
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import VisionMissionPage from "./pages/about/VisionMissionPage";
import GoverningBodyPage from "./pages/about/GoverningBodyPage";
import ChairmanPage from "./pages/about/ChairmanPage";
import PrincipalPage from "./pages/about/PrincipalPage";
import AdministrationPage from "./pages/about/AdministrationPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ResearchPage from "./pages/ResearchPage";
import CampusLifePage from "./pages/CampusLifePage";
import ContactPage from "./pages/ContactPage";
import StudentServicesPage from "./pages/StudentServicesPage";
import ExaminationPage from "./pages/student-services/ExaminationPage";
import LibraryPage from "./pages/student-services/LibraryPage";
import PlacementsPage from "./pages/placements/PlacementsPage";
import PlacementsOverviewPage from "./pages/placements/PlacementsOverviewPage";
import PlacementsStatisticsPage from "./pages/placements/PlacementsStatisticsPage";
import PlacementsCompaniesPage from "./pages/placements/PlacementsCompaniesPage";
import PlacementsTrainingPage from "./pages/placements/PlacementsTrainingPage";
import HostelPage from "./pages/student-services/HostelPage";
import TransportationPage from "./pages/student-services/TransportationPage";
import ScholarshipsPage from "./pages/student-services/ScholarshipsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/vision-mission" element={<VisionMissionPage />} />
          <Route path="/about/governing-body" element={<GoverningBodyPage />} />
          <Route path="/about/chairman" element={<ChairmanPage />} />
          <Route path="/about/principal" element={<PrincipalPage />} />
          <Route path="/about/administration" element={<AdministrationPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/placements/overview" element={<PlacementsOverviewPage />} />
          <Route path="/placements/statistics" element={<PlacementsStatisticsPage />} />
          <Route path="/placements/companies" element={<PlacementsCompaniesPage />} />
          <Route path="/placements/training" element={<PlacementsTrainingPage />} />
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/student-services" element={<StudentServicesPage />} />
          <Route path="/student-services/examination" element={<ExaminationPage />} />
          <Route path="/student-services/library" element={<LibraryPage />} />
          <Route path="/student-services/hostel" element={<HostelPage />} />
          <Route path="/student-services/transportation" element={<TransportationPage />} />
          <Route path="/student-services/scholarships" element={<ScholarshipsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
