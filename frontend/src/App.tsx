// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";

// components
import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";

// functions
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  return (
    <>
      <div className="app">
        <ScrollToTop />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
