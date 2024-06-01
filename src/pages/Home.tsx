import React from 'react';
import Slideshow from '../components/Slideshow';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-20">
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/imageBackground.jpg')" }}>
        <Slideshow />
      </div>
      <div className="text-center p-6">
        <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-[#1D6FC6] text-white text-lg md:text-2xl font-semibold rounded hover:bg-[#8FD041] transition duration-300 ease-in-out">
          Contact Us
        </button>
      </div>
      <div className="text-image-layout">
        <div className="text-container">
          <h1 className="text-title">What We Do</h1>
          <div className="dividing-line"></div>
          <p className="text-p">
            At VinceEngineering, we specialize in delivering comprehensive electrical engineering solutions. Our expertise spans across power systems, control systems, network and communications, instrumentation, and data capture. With a strong background in service and support, we are committed to ensuring optimal performance and reliability for our clients. Located in Salt Lake City, UT, our team is dedicated to providing innovative solutions that drive efficiency and success in various industries.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/Picture4.jpg')" }}></div>
      </div>
    </div>
  );
};

export default Home;
