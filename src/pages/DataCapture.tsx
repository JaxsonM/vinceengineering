import React from 'react';

const DataCapture: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 md:px-20 mt-4">
      <div className="w-full text-center">
        <h1 className="text-3xl md:text-6xl font-bold">Data Capture</h1>
        <div className="dividing-line"></div>
      </div>
      <div className="text-image-layout my-10">
        <div className="text-container">
          <h2 className="text-title">Our Services</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We offer data logging solutions from anywhere with cellular connectivity, and provide tools to capture and recall data for future trends. Our services ensure that your data is accurately recorded and easily accessible for analysis.
          </p>
          <ul className="list-disc list-inside text-lg md:text-2xl mt-4">
            <li>Data Logging from Anywhere</li>
            <li>Cellular Connectivity Solutions</li>
            <li>RSLinx to OPC-UA Solutions</li>
            <li>Data Capture and Recall Tools</li>
          </ul>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/dataCapture1.jpg')" }}></div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="image-container" style={{ backgroundImage: "url('/images/dataCapture2.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Data Logging</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our data logging services allow you to capture data from any location with cellular connectivity. This ensures continuous data collection and monitoring, even in remote locations.
          </p>
        </div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="text-container">
          <h2 className="text-title">Cellular Connectivity Solutions</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We provide solutions for data logging with cellular connectivity, enabling real-time data transmission and access from virtually anywhere. Our services are designed to keep your data flow uninterrupted.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/dataCapture3.jpg')" }}></div>
      </div>
      <div className="text-image-layout">
        <div className="image-container" style={{ backgroundImage: "url('/images/dataCapture4.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Data Capture and Recall</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our data capture and recall tools allow you to store data securely and retrieve it for future analysis. This service is essential for identifying trends and making informed decisions based on historical data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataCapture;
