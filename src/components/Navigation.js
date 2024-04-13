import React, { useState, useEffect } from "react";
import men from "../img/SVG/accessibility-sharp.svg";
import women from "../img/SVG/woman-sharp.svg";
import kid from "../img/SVG/walk-sharp.svg";
import aboutUs from "../img/SVG/information-circle-sharp.svg";
import contactUs from "../img/SVG/call-sharp.svg";
import review from "../img/SVG/star-half.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = function ({ navClickStatusData }) {
  const navigate = useNavigate();
  const [mens, setMens] = useState(true);
  const [womens, setWomens] = useState(false);
  const [kids, setKids] = useState(false);
  const [aboutus, setAboutus] = useState(false);
  const [contactus, setContactus] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [isFocusedMen, setIsFocusedMen] = useState(true);
  const [isFocusedWomen, setIsFocusedWomen] = useState(false);
  const [isFocusedKids, setIsFocusedKids] = useState(false);
  const [isFocusedAboutus, setIsFocusedAboutus] = useState(false);
  const [isFocusedContactus, setIsFocusedContactus] = useState(false);
  const [isFocusedReviews, setIsFocusedReviews] = useState(false);

  const menClickHandler = () => {
    setMens(true);
    setWomens(false);
    setKids(false);
    setAboutus(false);
    setContactus(false);
    setIsFocusedMen(true);
    setIsFocusedWomen(false);
    setIsFocusedKids(false);
    setIsFocusedAboutus(false);
    setIsFocusedContactus(false);
    navigate("/mens");
  };
  const womenClickHandler = () => {
    setMens(false);
    setWomens(true);
    setKids(false);
    setAboutus(false);
    setContactus(false);
    setIsFocusedMen(false);
    setIsFocusedWomen(true);
    setIsFocusedKids(false);
    setIsFocusedAboutus(false);
    setIsFocusedContactus(false);
    navigate("/womens");
  };
  const kidsClickHandler = () => {
    setMens(false);
    setWomens(false);
    setKids(true);
    setAboutus(false);
    setContactus(false);
    setIsFocusedMen(false);
    setIsFocusedWomen(false);
    setIsFocusedKids(true);
    setIsFocusedAboutus(false);
    setIsFocusedContactus(false);
    navigate("/kids");
  };
  const aboutUsClickHandler = () => {
    setMens(false);
    setWomens(false);
    setKids(false);
    setAboutus(true);
    setContactus(false);
    setIsFocusedMen(false);
    setIsFocusedWomen(false);
    setIsFocusedKids(false);
    setIsFocusedAboutus(true);
    setIsFocusedContactus(false);
  };

  const contactUsClickHandler = () => {
    setMens(false);
    setWomens(false);
    setKids(false);
    setAboutus(false);
    setContactus(true);
    setIsFocusedMen(false);
    setIsFocusedWomen(false);
    setIsFocusedKids(false);
    setIsFocusedAboutus(false);
    setIsFocusedContactus(true);
  };
  const reviewsClickHandler = () => {
    setMens(false);
    setWomens(false);
    setKids(false);
    setAboutus(false);
    setContactus(false);
    setReviews(true);
    setIsFocusedMen(false);
    setIsFocusedWomen(false);
    setIsFocusedKids(false);
    setIsFocusedAboutus(false);
    setIsFocusedReviews(true);
    navigate("/reviews");
  };

  useEffect(() => {
    navClickStatusData([mens, womens, kids, aboutus, contactus, reviews]);
  }, [aboutus, contactus, kids, mens, womens, reviews, navClickStatusData]);

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li
          className={`side-nav__item ${
            isFocusedMen ? "side-nav__item--active" : ""
          }`}
          onClick={menClickHandler}
        >
          <NavLink className="side-nav__link">
            <img src={men} className="side-nav__icon" alt="men icon" />

            <span>Men</span>
          </NavLink>
        </li>
        <li
          className={`side-nav__item ${
            isFocusedWomen ? "side-nav__item--active" : ""
          }`}
          onClick={womenClickHandler}
        >
          <NavLink className="side-nav__link">
            <img src={women} className="side-nav__icon" alt="women icon" />

            <span>Women</span>
          </NavLink>
        </li>
        <li
          className={`side-nav__item ${
            isFocusedKids ? "side-nav__item--active" : ""
          }`}
          onClick={kidsClickHandler}
        >
          <NavLink className="side-nav__link">
            <img src={kid} className="side-nav__icon" alt="kids icon" />

            <span>Kids</span>
          </NavLink>
        </li>
        <li
          className={`side-nav__item ${
            isFocusedAboutus ? "side-nav__item--active" : ""
          }`}
          onClick={aboutUsClickHandler}
        >
          <NavLink href="#" className="side-nav__link">
            <img src={aboutUs} className="side-nav__icon" alt="about-us Icon" />

            <span>About Us</span>
          </NavLink>
        </li>
        <li
          className={`side-nav__item ${
            isFocusedContactus ? "side-nav__item--active" : ""
          }`}
          onClick={contactUsClickHandler}
        >
          <NavLink href="#" className="side-nav__link">
            <img
              src={contactUs}
              className="side-nav__icon"
              alt="Contact Us Icon"
            />

            <span>Contact Us</span>
          </NavLink>
        </li>
        <li
          className={`side-nav__item ${
            isFocusedReviews ? "side-nav__item--active" : ""
          }`}
          onClick={reviewsClickHandler}
        >
          <NavLink href="#" className="side-nav__link">
            <img src={review} className="side-nav__icon" alt="Reviews Icon" />

            <span>Reviews</span>
          </NavLink>
        </li>
      </ul>

      <div className="legal">&copy; 2023 by Soxence. All rights reserved.</div>
    </nav>
  );
};

export default Navigation;
