import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* App wrapper to ensure footer stays at bottom if content is short */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/* Added pt-20 to offset the fixed navbar height */}
        <main className="main-wrapper pt-20 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
