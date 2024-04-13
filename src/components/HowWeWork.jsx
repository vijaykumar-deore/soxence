import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import people from "../img/icons8-business-people-100.png";
import requirement from "../img/icons8-requirement-64.png";
import order from "../img/icons8-order-96.png";
import shipped from "../img/icons8-shipped-100.png";

export default function HowWeWork() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="description flex-2-column">
      <div className="max-width">
        <h2 className="heading-secondary" data-aos="fade-up">
          How We Work
        </h2>
      </div>
      <div className="how-we">
        <div className="flex-2-column">
          <img src={people} className="" alt="men icon" data-aos="fade-up" />
          <h3 className="heading-tertiary" data-aos="fade-up">
            CONVERSATION
          </h3>
          <h4 data-aos="fade-up">By Our Executive</h4>
        </div>
        <div className="flex-2-column">
          <img
            src={requirement}
            className=""
            alt="men icon"
            data-aos="fade-up"
          />
          <h3 className="heading-tertiary" data-aos="fade-up">
            UNDERSTAND
          </h3>
          <h4 data-aos="fade-up">The Requirements</h4>
        </div>
        <div className="flex-2-column">
          <img src={order} className="" alt="men icon" data-aos="fade-up" />
          <h3 className="heading-tertiary" data-aos="fade-up">
            Prepare
          </h3>
          <h4 data-aos="fade-up">The order</h4>
        </div>
        <div className="flex-2-column">
          <img src={shipped} className="" alt="men icon" data-aos="fade-up" />
          <h3 className="heading-tertiary" data-aos="fade-up">
            Deliver
          </h3>
          <h4 data-aos="fade-up">At Doorstep</h4>
        </div>
      </div>
    </div>
  );
}
