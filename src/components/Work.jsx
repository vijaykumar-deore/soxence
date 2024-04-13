import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import people from "../img/icons8-business-people-100.png";

function Work() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="description flex-2-column work">
      <img src={people} className="" alt="men icon" data-aos="fade-up" />
      <div className="max-width">
        <h2 className="heading-secondary" data-aos="fade-up">
          WE CONNECT{" "}
        </h2>
      </div>
      <div className="max-width">
        <h2 className="heading-secondary" data-aos="fade-up">
          KNIT PRODUCTS MANUFACTURERS
        </h2>
      </div>
      <div className="max-width">
        <h2 className="heading-secondary" data-aos="fade-up">
          TO THE BUYERS
        </h2>
      </div>
      <h3 data-aos="fade-up">We aim to provide a common platform</h3>
      <h3 data-aos="fade-up">for our manufacturing partners to</h3>
      <h3 data-aos="fade-up">sell their products in the</h3>
      <h3 data-aos="fade-up"> international market.</h3>
    </div>
  );
}

export default Work;
