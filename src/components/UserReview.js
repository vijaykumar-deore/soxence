import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import user1 from "../img/user-1.jpg";
import user2 from "../img/user-2.jpg";
// import video1 from "../img/video.mp4";
// import video2 from "../img/video.webm";

const UserReview = function () {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="section-stories u-margin-top-huge">
      {/* <div className="bg-video">
        <video className="bg-video__content" autoplay muted loop>
          <source src={video1} type="video/mp4" />
          <source src={video2} type="video/webm" />
          Your browser is not supported!
        </video>
      </div> */}

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" data-aos="fade-up">
          We make Our customers genuinely happy
        </h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={user1} alt="user photo" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3
              className="heading-tertiary u-margin-bottom-small"
              style={{ fontSize: "1.6rem" }}
              data-aos="fade-up"
            >
              I had the best week ever with my family
            </h3>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={user2} alt="User photo" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3
              className="heading-tertiary u-margin-bottom-small"
              style={{ fontSize: "1.6rem" }}
              data-aos="fade-up"
            >
              WOW! My life is completely different now
            </h3>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge" data-aos="fade-up">
        <NavLink to="/reviews" className="btn-show">
          Read all Reviews &rarr;
        </NavLink>
      </div>
    </section>
  );
};

export default UserReview;
