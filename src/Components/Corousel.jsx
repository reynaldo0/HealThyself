import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const ArrowLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "10px",
        zIndex: 2,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      &#9664;
    </div>
  );
};

const ArrowRight = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "10px",
        zIndex: 2,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      &#9654;
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
    // Add more slides as needed
  ];

  return (
    <div className="relative container mx-auto py-8 overflow-hidden px-4 md:px-0"  data-aos="fade-up"
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
              position: 'relative', // Ensure positioning context for text
            }}
          >
            <div
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative', // Ensure relative positioning for the text container
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
