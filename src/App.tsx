import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import WhyOrganic from "./pages/WhyOrganic";
import Courses from "./pages/Courses";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import FAQs from "./pages/FAQs";
import Team from "./pages/Team";
import History from "./pages/History";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import AIChatBot from "./components/AIChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/why-organic" element={<WhyOrganic />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/history" element={<History />} />
          <Route path="/support" element={<Support />} />
          <Route path="/ai-chat" element={<AIChatBot />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
