// import logo from "./logo.svg";
import "./App.css";
import PublicRoutes from "./router/PublicRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </Router>
  );
}
export default App;
