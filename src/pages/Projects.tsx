import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 md:px-20 mt-4">
      <div className="w-full text-center">
        <h1 className="page-title">Our Projects</h1>
        <div className="dividing-line"></div>
      </div>
      <div className="text-image-layout my-10">
        <div className="text-container">
          <h2 className="text-title">Overview</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Explore our completed projects, including client testimonials and detailed case studies. Our projects showcase the breadth and depth of our expertise in electrical engineering solutions.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/project1.jpg')" }}></div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="image-container" style={{ backgroundImage: "url('/images/project2.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Project 1: Innovative Power Solutions</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            In this project, we provided innovative power solutions for a major industrial client. Our team designed and implemented a robust power system that increased efficiency and reliability.
          </p>
        </div>
      </div>
      <div className="text-image-layout mb-10">
        <div className="text-container">
          <h2 className="text-title">Project 2: Advanced Control Systems</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            We developed advanced control systems for a manufacturing plant, including PLC programming and equipment upgrades. This project improved the plant’s automation and productivity.
          </p>
        </div>
        <div className="image-container" style={{ backgroundImage: "url('/images/project3.jpg')" }}></div>
      </div>
      <div className="text-image-layout">
        <div className="image-container" style={{ backgroundImage: "url('/images/project4.jpg')" }}></div>
        <div className="text-container">
          <h2 className="text-title">Project 3: Comprehensive Network Solutions</h2>
          <div className="dividing-line"></div>
          <p className="text-p">
            Our team provided comprehensive network solutions for a corporate client, including the design and installation of Ethernet networks. This project enhanced the client’s communication infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
