import React from 'react';

const AllServices: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 md:px-20 mt-4">
      <div className="w-full text-center">
        <h1 className="page-title">All Services</h1>
        <div className="dividing-line"></div>
      </div>
      <div className="text-image-layout my-10">
        <div className="text-container">
          <h2 className="text-title">Comprehensive Services</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            At VinceEngineering, we offer a wide range of services to meet all your electrical engineering needs. Our expertise spans across power systems, control systems, network and communications, instrumentation, and data capture. Explore our services to find out how we can help you achieve optimal performance and reliability.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/service-overview.jpg')" }}></div>
      </div>
      <div className="w-full text-left px-6 md:px-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-lg md:text-xl">
          <li className="mb-2">Power Systems</li>
          <li className="mb-2">Control Systems</li>
          <li className="mb-2">Network & Communications</li>
          <li className="mb-2">Instrumentation</li>
          <li className="mb-2">Data Capture</li>
          <li className="mb-2">Support</li>
        </ul>
      </div>
    </div>
  );
};

export default AllServices;
