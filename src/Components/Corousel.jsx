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
    '/assets/carousel/baby/another-image.jpg',
    '/assets/carousel/baby/yet-another-image.jpg',
    '/assets/carousel/baby/final-image.jpg',
    // Tambahkan lebih banyak gambar sesuai kebutuhan
  ];

  return (
    <div className="relative container mx-auto py-8 overflow-hidden px-4 md:px-0">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'active-slide' : ''}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
