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
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="flex justify-center">
          <img src="/images/Picture1.jpg" alt="Slide 1" className="w-full h-[calc(70vh-10rem)] object-contain" />
        </div>
        <div className="flex justify-center">
          <img src="/images/Picture2.jpg" alt="Slide 2" className="w-full h-[calc(70vh-10rem)] object-contain" />
        </div>
        <div className="flex justify-center">
          <img src="/images/Picture3.jpg" alt="Slide 3" className="w-full h-[calc(70vh-10rem)] object-contain" />
        </div>
        <div className="flex justify-center">
          <img src="/images/Picture4.jpg" alt="Slide 4" className="w-full h-[calc(70vh-10rem)] object-contain" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
