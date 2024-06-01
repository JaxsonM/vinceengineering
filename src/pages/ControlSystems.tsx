import React from 'react';

const ControlSystems: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 md:px-20 mt-4">
      <div className="w-full text-center">
        <h1 className="text-3xl md:text-6xl font-bold">Control Systems</h1>
        <div className="dividing-line"></div>
      </div>
      <div className="text-image-layout my-10">
        <div className="text-container">
          <h2 className="text-title">Our Services</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our control systems services include PLC design and programming, equipment rebuilds, migrations, new machine development, and plantwide implementations. We ensure your control systems are optimized for performance and reliability.
          </p>
          <ul className="list-disc list-inside text-lg md:text-2xl mt-4">
            <li>PLC Design and Programming</li>
            <li>Equipment Rebuilds</li>
            <li>PLC Migrations</li>
            <li>New Machine Development</li>
            <li>Plantwide Implementations</li>
          </ul>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/controlSystem1.jpg')" }}></div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="image-container" style={{ backgroundImage: "url('/images/controlSystem2.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">PLC Design and Programming</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We specialize in designing and programming PLCs to meet the specific needs of your operations. Our solutions are tailored to enhance the efficiency and reliability of your control systems.
          </p>
        </div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="text-container">
          <h2 className="text-title">Equipment Rebuilds</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our team excels in rebuilding old equipment, breathing new life into your existing machinery. This service includes comprehensive upgrades and enhancements to improve performance and extend the lifespan of your equipment.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/controlSystem3.jpg')" }}></div>
      </div>
      <div className="text-image-layout">
        <div className="image-container" style={{ backgroundImage: "url('/images/controlSystem4.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">New Machine Development</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We develop new machines from prototypes to fully functioning systems. Our expertise includes creating specialized equipment such as boilers, vaporizers, CNC saws, generators, and fountains.
          </p>
        </div>
      </div>
      <div className="text-image-layout">
        <div className="text-container">
          <h2 className="text-title">Plantwide Implementations</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our plantwide implementation services cover various industries including asphalt, food & beverage, bioplastics, and water & wastewater. We ensure seamless integration and optimization of your control systems across your entire plant.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/controlSystem5.jpg')" }}></div>
      </div>
    </div>
  );
};

export default ControlSystems;
