// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./Styles/StylesApp.css";
import Navbar from "./components/Navbar";
import Home from "./components/Accueil";
import Services from "./components/Services";
import Produits from "./components/Produits";
import Contactpage from "./components/Contactpage";
import About from "./components/A propos";
import Footer from "./components/Footer";
import Product from "./components/Produits";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loader on page load
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]); // Runs on route change

  return (
    <div className="App">
      {/** Loading **/}
      {loading && <Loader loading={loading} />}
      {!loading && (
        <>
          {/** Navbar **/}
          <Navbar />
          <div className="content">
            {/** Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Produits" element={<Produits />} />
              <Route path="/products" element={<Product />} />
              <Route path="/Contactez" element={<Contactpage />} />
              <Route path="/A propos" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
