import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Perbarui import
import LandingPage from "pages/LandingPage";

import "assets/scss/style.scss";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Ganti Switch dengan Routes */}
          <Route path="/" element={<LandingPage />} /> {/* Ganti component dengan element */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
