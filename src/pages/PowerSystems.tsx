import React from 'react';

const PowerSystems: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 md:px-20 mt-4">
      <div className="w-full text-center">
        <h1 className="text-3xl md:text-6xl font-bold">Power Systems</h1>
        <div className="dividing-line"></div>
      </div>
      <div className="text-image-layout my-10">
        <div className="text-container">
          <h2 className="text-title">Our Services</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We provide comprehensive power systems services, ensuring your operations run smoothly and efficiently. Our services include:
          </p>
          <ul className="list-disc list-inside text-lg md:text-2xl mt-4">
            <li>Single Line Diagrams</li>
            <li>Safety Isolation</li>
            <li>Lockout Tagout</li>
            <li>Circuit Traceability</li>
          </ul>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/powerSystem1.jpg')" }}></div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="image-container" style={{ backgroundImage: "url('/images/powerSystem2.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Single Line Diagrams</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our single line diagrams are designed to provide a clear and concise representation of your power system. These diagrams help in the planning, maintenance, and operation of electrical systems.
          </p>
        </div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="text-container">
          <h2 className="text-title">Safety Isolation & Lockout Tagout</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We prioritize safety in all our operations. Our safety isolation and lockout tagout services ensure that electrical systems are safely de-energized during maintenance, preventing accidental start-up and ensuring worker safety.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/powerSystem3.jpg')" }}></div>
      </div>
      <div className="text-image-layout">
      <div className="image-container" style={{ backgroundImage: "url('/images/powerSystem4.jpg')" }}></div> 
        <div className="text-container">
          <h2 className="text-title">Circuit Traceability</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our circuit traceability services ensure that every component of your electrical system is accurately mapped and documented. This service is crucial for troubleshooting, maintenance, and future expansion of your power systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerSystems;
