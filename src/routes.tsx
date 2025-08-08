import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here as the app grows */}
    </Routes>
  );
};

export default AppRoutes;
