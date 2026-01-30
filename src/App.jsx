import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import JobDetails from './pages/JobDetails';
import ServiceDetail from './pages/ServiceDetail';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import HelpCenter from './pages/legal/HelpCenter';
import SystemStatus from './pages/legal/SystemStatus';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<JobDetails />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legal and Support Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/system-status" element={<SystemStatus />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
