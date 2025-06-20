import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen/index";
import EducationPage from "./Pages/Education/EducationPage";
import CertificationPage from "./Pages/Certifications/CertificationPage";
import ContactPage from "./Pages/Contact/ContactPage";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/certifications" element={<CertificationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
