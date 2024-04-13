import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../img/background-image.jpg";

export default function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" description">
      <div className="flex-2 ">
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p1"
              data-aos="fade-right"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p2"
              data-aos="fade-left"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p3"
              data-aos="fade-up"
            />
          </div>
        </div>
        <div className="feature" data-aos="fade-up">
          <h4 className="heading-4 heading-4--dark">Our Vision</h4>
          <p className="feature__text">
            Driven by the vision of providing the finest in footwear fashion,
            Soxence aims to cater to every category, including men, women and
            kids. Our passion lies in weaving threads of comfort and
            sophistication, ensuring that each step you take is step into
            luxury.
          </p>
        </div>
      </div>
      <div className="flex-2">
        <div className="feature" data-aos="fade-up">
          <h4 className="heading-4 heading-4--dark">Crafting Excellence</h4>
          <p className="feature__text">
            Our socks meticulously crafted using high-quality material to ensure
            durability, breathability and utmost comfort. from vibrant patterns
            to classic designs, Soxence socks are a testament to our dedication
            to both fashion and functionality.
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            {/* <img src={img1} alt="Our Vision" className="about-img " /> */}
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p1"
              data-aos="fade-right"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p2"
              data-aos="fade-left"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p3"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
      <div className="flex-2">
        <div className="col-1-of-2">
          <div className="composition">
            {/* <img src={img1} alt="Our Vision" className="about-img " /> */}
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p1"
              data-aos="fade-right"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p2"
              data-aos="fade-left"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p3"
              data-aos="fade-up"
            />
          </div>
        </div>
        <div className="feature" data-aos="fade-up">
          <h4 className="heading-4 heading-4--dark">Diversity in Style</h4>
          <p className="feature__text">
            Whether you are seeking the perfect pair for formal occasion, a cozy
            evening at home, or a playful adventure with the little ones,
            Soxence has a diverse range to suit every occasion. Our collection
            boast a fusion of trends, colors and patterns allowing you to
            express your unique style effortlessly.
          </p>
        </div>
      </div>
      <div className="flex-2">
        <div className="feature" data-aos="fade-up">
          <h4 className="heading-4 heading-4--dark">Commitment to Quality</h4>
          <p className="feature__text">
            Quality is the cornerstone of our brand. each pair of soxence
            undergoes rigorous testing to meet the highest standards. we believe
            that your feet deserver nothing but the best and we strive to
            deliver unmatched quality with every stitch.
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            {/* <img src={img1} alt="Our Vision" className="about-img " /> */}
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p1"
              data-aos="fade-right"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p2"
              data-aos="fade-left"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p3"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
      <div className="flex-2">
        <div className="col-1-of-2">
          <div className="composition">
            {/* <img src={img1} alt="Our Vision" className="about-img " /> */}
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p1"
              data-aos="fade-right"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p2"
              data-aos="fade-left"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p3"
              data-aos="fade-up"
            />
          </div>
        </div>
        <div className="feature" data-aos="fade-up">
          <h4 className="heading-4 heading-4--dark">Innovation at the Core</h4>
          <p className="feature__text">
            Innovation drives us forward. Soxence embraces the latest trends and
            technologies in the world of hosiery, ensuring that our designs are
            not just fashionable but also align with the evolving needs of our
            customers.
          </p>
        </div>
      </div>
      <div className="flex-2">
        <div className="feature" data-aos="fade-up">
          <h4 className="heading-4 heading-4--dark">
            Community and Sustainability
          </h4>
          <p className="feature__text">
            At Soxence, we value our community and the enviroment. we are
            commited to sustainable practices in our manufacturing processes,
            promoting eco-friendly materials and contrubuting to initiatives
            that make a positive impact on society.
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            {/* <img src={img1} alt="Our Vision" className="about-img " /> */}
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p1"
              data-aos="fade-right"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p2"
              data-aos="fade-left"
            />
            <img
              src={img1}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Our Vision"
              className="composition__photo composition__photo--p3"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
