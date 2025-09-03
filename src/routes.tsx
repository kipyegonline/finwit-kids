import { Routes, Route } from "react-router-dom";
import Home from "@/components/Home";
import DomainDetail from "@/components/DomainDetail";
import ProgramsPage from "./pages/Programs";
import ResourcesPage from "./pages/Resources";
import CommunityPage from "./pages/Community";
import AboutUsPage from "./pages/Aboutus";
import ContactUs from "./pages/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route
        path="/domains-of-development/:domain"
        element={<DomainDetail />}
      />
      {/* Add more routes here as the app grows */}
    </Routes>
  );
};

export default AppRoutes;
