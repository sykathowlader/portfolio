import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen/index";
import EducationPage from "../src/Pages/Education/EducationPage";
import CertificaionPage from "../src/Pages/Certifications/CertificationPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route for Home, Projects, Experience, Education, More */}
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/certifications" element={<CertificaionPage />} />

          {/*
        <Route path="/experience" element={<Experience />} />
        
        <Route path="/more" element={<More />} />*/}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
