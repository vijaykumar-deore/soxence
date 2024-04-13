import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import socksimg from "../img/socks10.jpg";

import { NavLink } from "react-router-dom";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="description flex-2 padding-small">
      <div className="">
        <h2
          className="heading-secondary"
          style={{ fontSize: "3.5rem" }}
          data-aos="fade-up"
        >
          About US
        </h2>
        <h3 className="cta__book-now heading-tertiary" data-aos="fade-up">
          The Indian B2B platform
        </h3>
        <p className="paragraph" data-aos="fade-up">
          Soxence understands the buyer’s requirements and connects to the
          manufacturer accordingly.
        </p>
        <NavLink to="/about" className="btn-show" data-aos="fade-up">
          View all
        </NavLink>
      </div>
      <figure className="" style={{ paddingTop: "2rem" }}>
        <img
          src={socksimg}
          alt="socks photo"
          className="image"
          data-aos="fade-up"
        />
        <figcaption className=""></figcaption>
      </figure>
    </div>
  );
}
