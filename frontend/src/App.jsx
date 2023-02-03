import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Conseils from "./pages/Conseils";
import Consommation from "./pages/Consommation";
import Liens from "./pages/Liens";
import Navbar from "./components/Navbar";
import Resultats from "./pages/Resultats";
import Soutien from "@pages/Soutien";

function App() {
  return (
    <>
      <div>
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consommation" element={<Consommation />} />
          <Route path="/conseils" element={<Conseils />} />
          <Route path="/liens" element={<Liens />} />
          <Route path="/resultat" element={<Resultats />} />
          <Route path="/soutien" element={<Soutien />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
