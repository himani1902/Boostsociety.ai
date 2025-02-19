import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Partners from "./pages/Partners"; // Corrected import
// import { DarkModeProvider } from "./context/DarkModeContext";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        {/* <DarkModeProvider> */}

          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<Partners />} />
          {/* </DarkModeProvider> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
