import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import user3 from "../img/user-3.jpg";
import user4 from "../img/user-4.jpg";
import user5 from "../img/user-5.jpg";
import user6 from "../img/user-6.jpg";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="description">
      <h2 className="cta__book-now heading-tertiary" data-aos="fade-up">
        Sock it to Comfort, sock it to style
      </h2>
      <p className="paragraph" data-aos="fade-up">
        "Elevate your comfort and style with Soxence - Where a wide variety of
        premium socks awaits to add touch of luxury to every step."
      </p>
      <ul className="list">
        <li className="list__item" data-aos="fade-right">
          Half Socks
        </li>
        <li className="list__item" data-aos="fade-left">
          No-Show Socks
        </li>
        <li className="list__item" data-aos="fade-right">
          Anckle Socks
        </li>
        <li className="list__item" data-aos="fade-left">
          Quarter Length Socks
        </li>
        <li className="list__item" data-aos="fade-right">
          Crew Socks
        </li>
        <li className="list__item" data-aos="fade-left">
          Mid-Calf Socks
        </li>
        <li className="list__item" data-aos="fade-right">
          Calf Socks
        </li>
        <li className="list__item" data-aos="fade-left">
          Knee-High Socks
        </li>
        <li className="list__item" data-aos="fade-right">
          Thigh High Socks
        </li>
        <li className="list__item" data-aos="fade-left">
          Sports Socks
        </li>
      </ul>
      <div className="recommend">
        <p className="recommend__count" data-aos="fade-up">
          Lucy and 3 other friends recommend Soxence as a better choice.
        </p>
        <div className="recommend__friends">
          <img src={user3} alt="Friend 1" className="recommend__photo" />
          <img src={user4} alt="Friend 2" className="recommend__photo" />
          <img src={user5} alt="Friend 3" className="recommend__photo" />
          <img src={user6} alt="Friend 4" className="recommend__photo" />
        </div>
      </div>
    </div>
  );
}
