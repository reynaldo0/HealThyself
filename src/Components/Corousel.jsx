import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowLeft = ({ onClick }) => {
  return (
    <div
      className="group absolute -left-2 md:-left-5 z-10 top-1/2 transform -translate-y-1/2 md:flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-child-light text-secondary hover:bg-transparent hover:border-2 hover:border-child-light hover:text-primary transition duration-300 cursor-pointer hidden"
      onClick={onClick}
    >
      <span className="text-lg text-white  group-hover:text-child-light">
        <svg width="17" height="33" viewBox="0 0 17 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.61068 15.5225L10.6248 7.74412L12.6279 9.68837L5.61543 16.4946L12.6279 23.3009L10.6248 25.2451L2.61068 17.4667C2.3451 17.2089 2.1959 16.8592 2.1959 16.4946C2.1959 16.13 2.3451 15.7803 2.61068 15.5225Z" />
        </svg>
      </span>

    </div>
  );
};

const ArrowRight = ({ onClick }) => {
  return (
    <div
      className="group absolute -right-2 md:-right-5 z-10 top-1/2 transform -translate-y-1/2 md:flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-child-light text-secondary hover:bg-transparent hover:border-2 hover:border-child-light hover:text-primary transition duration-300 cursor-pointer hidden"
      onClick={onClick}
    >
      <span className="text-lg text-white group-hover:text-child-light">
        <svg width="17" height="33" viewBox="0 0 17 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.3893 17.4775L6.37524 25.2559L4.37207 23.3116L11.3846 16.5054L4.37207 9.69913L6.37524 7.75488L14.3893 15.5333C14.6549 15.7911 14.8041 16.1408 14.8041 16.5054C14.8041 16.87 14.6549 17.2197 14.3893 17.4775Z"/>
        </svg>
      </span>
    </div>
  );
};

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    { src: '/assets/carousel/baby/piramis.jpg', title: 'First Slide', description: 'Description for the first slide.' },
    { src: '/assets/carousel/baby/piramis.jpg', title: 'Second Slide', description: 'Description for the second slide.' },
    { src: '/assets/carousel/baby/piramis.jpg', title: 'Third Slide', description: 'Description for the third slide.' },
    { src: '/assets/carousel/baby/piramis.jpg', title: 'Fourth Slide', description: 'Description for the fourth slide.' },
  ];

  return (
    <div className="relative container mx-auto py-8 overflow-hidden px-5" data-aos="fade-up"
      data-aos-easing="ease-in-out" data-aos-duration="800">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'active-slide' : ''}`}
            style={{
              padding: '10px',
              transform: currentSlide === index ? 'scale(1)' : 'scale(0.9)',
              transition: 'transform 0.5s ease',
              position: 'relative',
            }}
          >
            <div
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', zIndex: 10, color: '#fff', padding: '10px' }}>
                <h3 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>{slide.title}</h3>
                <p style={{ margin: '0', fontSize: '14px' }}>
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
