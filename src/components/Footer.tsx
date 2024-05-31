// src/components/Footer.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#343a40] text-white p-10 mt-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">VINCEENGINEERING</h2>
          <p>
            At VinceEngineering, we specialize in delivering comprehensive electrical engineering solutions. Our expertise spans across power systems, control systems, network and communications, instrumentation, and data capture.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>1890 S 3850 W, Salt Lake City, UT 84104</p>
          <p>Email: info@vinceengineering.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl hover:text-[#A7EA53]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl hover:text-[#A7EA53]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl hover:text-[#A7EA53]" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>&copy; {new Date().getFullYear()} VinceEngineering. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;