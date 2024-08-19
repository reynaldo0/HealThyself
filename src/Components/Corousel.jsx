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

  const images = [
    '/assets/carousel/baby/piramis.jpg',
    '/assets/carousel/baby/piramis.jpg',
    '/assets/carousel/baby/piramis.jpg',
    '/assets/carousel/baby/piramis.jpg',
    // Add more images as needed
  ];

  return (
    <div className="relative container mx-auto py-8 overflow-hidden px-4 md:px-0">
      <Slider {...settings}>
        {images.map((image, index) => (
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
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', zIndex: 10, color: '#fff', padding: '10px', borderRadius: '5px' }}>
                <h3 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>Lorem Ipsum</h3>
                <p style={{ margin: '0', fontSize: '14px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  lacinia odio vitae vestibulum vestibulum.
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
