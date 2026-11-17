import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AnimatedBackground from './components/common/AnimatedBackground';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import AppsPage from './pages/AppsPage';
import AppDetailsPage from './pages/AppDetailsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/NotFoundPage';

export const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#05070d] text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
        <ScrollToTop />
        <AnimatedBackground />
        
        <Navbar />

        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/apps/:id" element={<AppDetailsPage />} />
            <Route path="/apps/:id/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy/:appId" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
