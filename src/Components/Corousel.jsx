import React from "react";
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
        left: "10px", // Adjusted positioning
        zIndex: 2,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
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
        right: "10px", // Adjusted positioning
        zIndex: 2,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
    </div>
  );
};

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time on larger screens
    slidesToScroll: 1,
    arrows: true, // Show arrows
    prevArrow: <ArrowLeft />, // Custom left arrow
    nextArrow: <ArrowRight />, // Custom right arrow
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="relative container mx-auto py-8 overflow-hidden px-4 md:px-0">
      <Slider {...settings}>
        <div className="slide">
          <img src="https://via.placeholder.com/600x300?text=Slide+1" alt="Slide 1" className="carousel-image" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/600x300?text=Slide+2" alt="Slide 2" className="carousel-image" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/600x300?text=Slide+3" alt="Slide 3" className="carousel-image" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/600x300?text=Slide+4" alt="Slide 4" className="carousel-image" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/600x300?text=Slide+5" alt="Slide 5" className="carousel-image" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/600x300?text=Slide+6" alt="Slide 6" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
