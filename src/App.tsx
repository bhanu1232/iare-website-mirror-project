
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ResearchPage from "./pages/ResearchPage";
import CampusLifePage from "./pages/CampusLifePage";
import ContactPage from "./pages/ContactPage";
import StudentServicesPage from "./pages/StudentServicesPage";
import ExaminationPage from "./pages/student-services/ExaminationPage";
import LibraryPage from "./pages/student-services/LibraryPage";
import PlacementsPage from "./pages/student-services/PlacementsPage";
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
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/student-services" element={<StudentServicesPage />} />
          <Route path="/student-services/examination" element={<ExaminationPage />} />
          <Route path="/student-services/library" element={<LibraryPage />} />
          <Route path="/student-services/placements" element={<PlacementsPage />} />
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
