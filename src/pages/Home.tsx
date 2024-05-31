// src/pages/Home.tsx
import React from 'react';
import Slideshow from '../components/Slideshow';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/imageBackground.jpg')" }}>
        <Slideshow />
      </div>
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold bg-slate-50">Welcome to VinceEngineering</h1>
        <p className="mt-4 text-lg">Your partner in POWER, CONTROLS, and COMMUNICATIONS.</p>
      </div>
    </div>
  );
};

export default Home;
