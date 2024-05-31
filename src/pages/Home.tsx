// src/pages/Home.tsx
import React from 'react';
import Slideshow from '../components/Slideshow';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-20">
        {/* <h1 className="text-4xl font-bold bg-slate-50">Welcome to VinceEngineering</h1>
        <p className="mt-4 text-lg">Your partner in POWER, CONTROLS, and COMMUNICATIONS.</p> */}
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/imageBackground.jpg')" }}>
        <Slideshow />
      </div>
      <div className="text-center p-6">
        <button className="mt-6 px-8 py-4 bg-[#1D6FC6] text-white text-2xl font-semibold rounded hover:bg-[#8FD041]">
          Contact Us
        </button>
      </div>
      <div className="flex bg-[#D8D8D8] w-full h-[calc(70vh-10rem)]">
        <div className="w-1/2 p-10">
          <h1 className="text-6xl">What We Do</h1>
          <div className="border-b-4 border-[#1D6FC6] w-full my-4"></div>
          <p className="text-2xl">
            At VinceEngineering, we specialize in delivering comprehensive electrical engineering solutions. Our expertise spans across power systems, control systems, network and communications, instrumentation, and data capture. With a strong background in service and support, we are committed to ensuring optimal performance and reliability for our clients. Located in Salt Lake City, UT, our team is dedicated to providing innovative solutions that drive efficiency and success in various industries.
          </p>
        </div>
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/images/Picture4.jpg')" }}></div>
      </div>
    </div>
  );
};

export default Home;
