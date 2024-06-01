import React from 'react';

const Instrumentation: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 md:px-20 mt-4">
      <div className="w-full text-center">
        <h1 className="text-3xl md:text-6xl font-bold">Instrumentation</h1>
        <div className="dividing-line"></div>
      </div>
      <div className="text-image-layout my-10">
        <div className="text-container">
          <h2 className="text-title">Our Services</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We provide a wide range of instrumentation services including pressure, temperature, flow, voltage, current, power, and safety instrumented systems. Our expertise ensures that your systems are accurately monitored and controlled.
          </p>
          <ul className="list-disc list-inside text-lg md:text-2xl mt-4">
            <li>Pressure Measurement</li>
            <li>Temperature Monitoring</li>
            <li>Flow Measurement</li>
            <li>Voltage and Current Monitoring</li>
            <li>Power Measurement</li>
            <li>Safety Instrumented Systems</li>
          </ul>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/instrumentation1.jpg')" }}></div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="image-container" style={{ backgroundImage: "url('/images/instrumentation2.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Pressure and Temperature</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our pressure and temperature measurement services ensure that your systems operate within the desired parameters. We provide accurate and reliable monitoring solutions to maintain optimal performance.
          </p>
        </div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="text-container">
          <h2 className="text-title">Flow Measurement</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We offer flow measurement services to help you monitor and control the flow of liquids and gases in your systems. Our solutions are designed to provide precise and reliable measurements.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/instrumentation3.jpg')" }}></div>
      </div>
      <div className="text-image-layout">
        <div className="image-container" style={{ backgroundImage: "url('/images/instrumentation4.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Voltage, Current, and Power</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our voltage, current, and power measurement services provide you with the data you need to ensure efficient and safe operation of your electrical systems. We offer comprehensive solutions for monitoring and controlling electrical parameters.
          </p>
        </div>
      </div>
      <div className="text-image-layout">
        <div className="text-container">
          <h2 className="text-title">Safety Instrumented Systems</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We specialize in safety instrumented systems that help protect your operations from hazardous conditions. Our systems are designed to provide reliable protection and ensure compliance with safety standards.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/instrumentation5.jpg')" }}></div>
      </div>
    </div>
  );
};

export default Instrumentation;
