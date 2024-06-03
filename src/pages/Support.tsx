import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 md:px-20 mt-4">
      <div className="w-full text-center">
        <h1 className="page-title">Support</h1>
        <div className="dividing-line"></div>
      </div>
      <div className="text-image-layout my-10">
        <div className="text-container">
          <h2 className="text-title">Our Services</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We offer 24x7 on-call support with a team of engineers and specialists, and operate a UL508A panel shop. Our dedicated support ensures that your systems are always running smoothly and efficiently.
          </p>
          <ul className="list-disc list-inside text-lg md:text-2xl mt-4">
            <li>24x7 On Call Support “VEOC”</li>
            <li>Experienced Engineers and Specialists</li>
            <li>1 Engineer, 2 Electrical/Control Specialists, 2 Control Systems Apprentice</li>
            <li>UL508A Panel Shop</li>
          </ul>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/support1.jpg')" }}></div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="image-container" style={{ backgroundImage: "url('/images/support2.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">24x7 On-Call Support</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our 24x7 on-call support ensures that you have access to expert assistance whenever you need it. Our team is always ready to help you troubleshoot and resolve any issues promptly.
          </p>
        </div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="text-container">
          <h2 className="text-title">UL508A Panel Shop</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We operate a UL508A panel shop, providing high-quality control panels that meet industry standards. Our panels are designed and built to ensure reliable performance and safety.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/support3.jpg')" }}></div>
      </div>
      <div className="text-image-layout">
        <div className="image-container" style={{ backgroundImage: "url('/images/support4.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Experienced Engineers and Specialists</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our team of experienced engineers and specialists is dedicated to providing top-notch support for your systems. We bring a wealth of knowledge and expertise to ensure your operations run smoothly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
