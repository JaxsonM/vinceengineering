import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaCaretDown, FaCaretUp, FaBars, FaTimes } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isServiceClicked, setIsServiceClicked] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

  // Function to handle mouse entering the services button
  const handleMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  // Function to handle mouse leaving the services button or dropdown
  const handleMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  // Function to handle a service link click
  const handleServiceClick = () => {
    setIsServiceClicked(true);
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  // Effect to set the state of the services button based on the current path
  useEffect(() => {
    if (!location.pathname.startsWith('/services')) {
      setIsServiceClicked(false);
    }
  }, [location]);

  // Determine if any service page is active
  const isServicesActive = location.pathname.startsWith('/services');

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsServicesDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-[#343a40] text-white p-5 flex justify-between items-center shadow fixed top-0 w-full z-50">
      {/* Company Name and Slogan */}
      <div className="flex text-center justify-between items-center w-full md:w-auto">
        <div className="flex-col">
        <div className="text-[#A7EA53] text-xs md:text-sm">
          POWER. CONTROLS. COMMUNICATIONS.
        </div>
        <div className="text-2xl md:text-3xl font-bold text-[#B4DCFA] mx-4">
          <NavLink to="/" end>
            VINC<span className="underline">EE</span>NGIN<span className="underline">EE</span>RING
          </NavLink>
        </div>
        </div>
        <button onClick={toggleMobileMenu} className="text-3xl md:hidden focus:outline-none">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`md:flex md:text-2xl md:items-center md:space-x-10 md:relative absolute bg-[#343a40] w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all duration-500 ease-in ${isMobileMenuOpen ? 'top-20 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100 md:top-0'}`}>
        <li className="mx-4 my-6 md:my-0">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-[#A7EA53] hover:text-[#6B9635]" : "hover:text-gray-300"} end onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#A7EA53] hover:text-[#6B9635]" : "hover:text-gray-300"} onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
        </li>

        {/* Services Dropdown */}
        <li className="relative mx-4 my-6 md:my-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className={`hover:text-gray-300 focus:outline-none flex items-center ${isServicesActive || isServiceClicked ? 'text-[#A7EA53]' : ''}`} onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>
            Services {isServicesDropdownOpen ? <FaCaretUp className="ml-1" /> : <FaCaretDown className="ml-1" />}
          </div>
          <ul ref={dropdownRef} className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg transform transition-all duration-300 z-50 ${isServicesDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <li>
              <NavLink to="/services/power-systems" className={({ isActive }) => isActive ? "block px-4 py-2 bg-gray-200" : "block px-4 py-2 hover:bg-gray-200"} onClick={handleServiceClick}>
                Power Systems
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/control-systems" className={({ isActive }) => isActive ? "block px-4 py-2 bg-gray-200" : "block px-4 py-2 hover:bg-gray-200"} onClick={handleServiceClick}>
                Control Systems
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/network-communications" className={({ isActive }) => isActive ? "block px-4 py-2 bg-gray-200" : "block px-4 py-2 hover:bg-gray-200"} onClick={handleServiceClick}>
                Network & Communications
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/instrumentation" className={({ isActive }) => isActive ? "block px-4 py-2 bg-gray-200" : "block px-4 py-2 hover:bg-gray-200"} onClick={handleServiceClick}>
                Instrumentation
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/data-capture" className={({ isActive }) => isActive ? "block px-4 py-2 bg-gray-200" : "block px-4 py-2 hover:bg-gray-200"} onClick={handleServiceClick}>
                Data Capture
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/support" className={({ isActive }) => isActive ? "block px-4 py-2 bg-gray-400" : "block px-4 py-2 hover:bg-gray-400"} onClick={handleServiceClick}>
                Support
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-[#A7EA53] hover:text-[#6B9635]" : "hover:text-gray-300"} onClick={() => setIsMobileMenuOpen(false)}>Projects</NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#A7EA53] hover:text-[#6B9635]" : "hover:text-gray-300"} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
