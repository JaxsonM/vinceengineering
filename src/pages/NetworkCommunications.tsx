import React from 'react';

const NetworkCommunications: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 md:px-20 mt-4">
      <div className="w-full text-center">
        <h1 className="page-title">Network & Communications</h1>
        <div className="dividing-line"></div>
      </div>
      <div className="text-image-layout my-10">
        <div className="text-container">
          <h2 className="text-title">Our Services</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We design, build, and troubleshoot Ethernet networks, and support any protocol, any bus, and any type of network communication. Our comprehensive services ensure your network infrastructure is robust and reliable.
          </p>
          <ul className="list-disc list-inside text-lg md:text-2xl mt-4">
            <li>Ethernet Network Design</li>
            <li>Network Building and Troubleshooting</li>
            <li>Protocol Support (Any Protocol, Any Bus)</li>
            <li>Comprehensive Network Communication Solutions</li>
          </ul>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/network1.jpg')" }}></div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="image-container" style={{ backgroundImage: "url('/images/network2.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Ethernet Network Design</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our Ethernet network design services ensure a robust and scalable network infrastructure tailored to your specific needs. We provide solutions that maximize efficiency and reliability for your business operations.
          </p>
        </div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="text-container">
          <h2 className="text-title">Network Building and Troubleshooting</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We build and troubleshoot networks to ensure seamless connectivity and performance. Our expertise covers a wide range of network configurations and environments, providing you with reliable network solutions.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/network3.jpg')" }}></div>
      </div>
      <div className="text-image-layout">
        <div className="image-container" style={{ backgroundImage: "url('/images/network4.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Protocol Support</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We support any protocol and any bus, providing you with flexible and comprehensive network communication solutions. Our services ensure that your network can handle a variety of communication protocols seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkCommunications;
