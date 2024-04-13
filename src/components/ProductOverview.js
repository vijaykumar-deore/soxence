import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import star from "../img/SVG/star.svg";
import { Fragment } from "react";

const ProductOverview = function ({ images }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Fragment>
      <Carousel
        autoFocus
        autoPlay
        infiniteLoop
        stopOnHover="false"
        className="carousel"
      >
        {images.map((image, index) => (
          <img src={image} alt="men" className="carousel-images" key={index} />
        ))}
      </Carousel>
      <div className="overview">
        <h1
          className="overview__heading heading-tertiary"
          data-aos="fade-right"
        >
          Wrap your Feet in Luxury
        </h1>

        <div className="overview__stars">
          <img
            src={star}
            className="overview__icon-star"
            alt="rating star"
            data-aos="fade-left"
          />
          <img
            src={star}
            className="overview__icon-star"
            alt="rating star"
            data-aos="fade-left"
          />
          <img
            src={star}
            className="overview__icon-star"
            alt="rating star"
            data-aos="fade-left"
          />
          <img
            src={star}
            className="overview__icon-star"
            alt="rating star"
            data-aos="fade-left"
          />
          <img
            src={star}
            className="overview__icon-star"
            alt="rating star"
            data-aos="fade-left"
          />
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductOverview;
