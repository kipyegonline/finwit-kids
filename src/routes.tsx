import { Routes, Route } from "react-router-dom";
import Home from "@/components/Home";
import DomainDetail from "@/components/DomainDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/domains-of-development/:domain"
        element={<DomainDetail />}
      />
      {/* Add more routes here as the app grows */}
    </Routes>
  );
};

export default AppRoutes;
