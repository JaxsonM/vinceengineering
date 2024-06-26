import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PowerSystems from './pages/PowerSystems';
import ControlSystems from './pages/ControlSystems';
import NetworkCommunications from './pages/NetworkCommunications';
import Instrumentation from './pages/Instrumentation';
import DataCapture from './pages/DataCapture';
import Support from './pages/Support';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';
import AllServices from './pages/AllServices';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/power-systems" element={<PowerSystems />} />
        <Route path="/services/control-systems" element={<ControlSystems />} />
        <Route path="/services/network-communications" element={<NetworkCommunications />} />
        <Route path="/services/instrumentation" element={<Instrumentation />} />
        <Route path="/services/data-capture" element={<DataCapture />} />
        <Route path="/services/support" element={<Support />} />
        <Route path="/services/all" element={<AllServices />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
