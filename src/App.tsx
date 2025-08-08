import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
