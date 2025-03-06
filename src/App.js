import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen/index";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home, Projects, Experience, Education, More */}
        <Route path="/" element={<Home />} />

        {/*<Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/more" element={<More />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
