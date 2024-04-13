import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import quality from "../img/quality.png";

function Quality() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="description flex-2-column work">
      <img src={quality} className="" alt="men icon" data-aos="fade-up" />
      <div className="max-width">
        <h2 className="heading-secondary" data-aos="fade-up">
          QUALITY{" "}
        </h2>
      </div>

      <h3 data-aos="fade-up">All the manufacturing facilities are</h3>
      <h3 data-aos="fade-up">Visited, Tested and Assured</h3>
      <h3 data-aos="fade-up">
        by SOXENCE quality & standard maintain executives.
      </h3>
    </div>
  );
}

export default Quality;
