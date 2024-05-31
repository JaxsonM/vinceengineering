// src/pages/Services.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <h1>Our Services</h1>
      <ul>
        <li><Link to="/services/power-systems">Power Systems</Link></li>
        <li><Link to="/services/control-systems">Control Systems</Link></li>
        <li><Link to="/services/network-communications">Network & Communications</Link></li>
        <li><Link to="/services/instrumentation">Instrumentation</Link></li>
        <li><Link to="/services/data-capture">Data Capture</Link></li>
        <li><Link to="/services/support">Support</Link></li>
      </ul>
    </div>
  );
};

export default Services;
