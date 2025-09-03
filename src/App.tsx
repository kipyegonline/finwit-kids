import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "@/routes";
import RootLayout from "@/components/layouts/RootLayout";
import "./App.css";

function App() {
  return (
    <Router>
      <RootLayout>
        <AppRoutes />
      </RootLayout>
    </Router>
  );
}

export default App;
