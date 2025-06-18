import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Services from './components/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import WebsiteQuote from './pages/WebsiteQuote';
import MobileQuote from './pages/MobileQuote';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote/website" element={<WebsiteQuote />} />
            <Route path="/quote/mobile" element={<MobileQuote />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
