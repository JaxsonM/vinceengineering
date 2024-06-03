import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 md:px-20 mt-4">
      <div className="w-full text-center">
        <h1 className="page-title">About Us</h1>
        <div className="dividing-line"></div>
      </div>
      <div className="text-image-layout my-10">
        <div className="text-container">
          <h2 className="text-title">Our Background</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            VinceEngineering has a strong service and support background, with extensive experience in industries such as mining, web analytics, and networking. Our team has worked with renowned companies like Rio Tinto Kennecott, Omniture/Adobe, and Grifflink, providing top-notch solutions and support.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/Picture1.jpg')" }}></div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="image-container" style={{ backgroundImage: "url('/images/Picture2.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Our Expertise</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Founded by a Brigham Young University graduate with a BSEE degree, VinceEngineering excels in Power, Controls, and Communications. We specialize in instrumentation, data capture, and support, ensuring optimal performance and reliability for our clients.
          </p>
        </div>
      </div>
      <div className="text-image-layout">
        <div className="text-container">
          <h2 className="text-title">Our Mission</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            At VinceEngineering, we are committed to providing innovative solutions that drive efficiency and success in various industries. Our team in Salt Lake City, UT, is dedicated to delivering comprehensive electrical engineering solutions that meet the unique needs of our clients.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/Picture3.jpg')" }}></div>
      </div>
    </div>
  );
};

export default AboutUs;
