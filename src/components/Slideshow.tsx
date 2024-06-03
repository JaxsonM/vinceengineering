// src/components/Slideshow.tsx
import React from 'react';
import Slider from 'react-slick';

const Slideshow: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const slides = [
    { src: "/images/Picture1.jpg", label: "Power Systems" },
    { src: "/images/Picture2.jpg", label: "Control Systems" },
    { src: "/images/Picture3.jpg", label: "Network & Communications" },
    { src: "/images/Picture4.jpg", label: "Instrumentation" },
    { src: "/images/Picture1.jpg", label: "Data Capture" },
    { src: "/images/Picture2.jpg", label: "Support" },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative flex justify-center">
            <img src={slide.src} alt={`Slide ${index + 1}`} className="w-full h-[calc(70vh-10rem)] object-contain" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2">
              {slide.label}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
