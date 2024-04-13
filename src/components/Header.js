import React from "react";
import logo from "../img/logo.jpg";
import user from "../img/SVG/person-circle.svg";
import chat from "../img/SVG/chat.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Header = function () {
  const navigate = useNavigate();

  const homePageHandler = () => {
    navigate("/");
  };

  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <header className="header">
      <img
        src={logo}
        alt="trillo logo"
        className="logo"
        onClick={homePageHandler}
      />

      <nav className="user-nav">
        <NavLink to="/" className="user-nav__icon-box nav">
          <span className="">Home</span>
        </NavLink>
        <NavLink to="/about" className="user-nav__icon-box nav">
          <span className="">About</span>
        </NavLink>
        <NavLink to="/contactUs" className="user-nav__icon-box nav">
          <span className="">Contact us</span>
        </NavLink>
        <div className="user-nav__icon-box">
          <img src={chat} className="user-nav__icon" alt="chat icon" />
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user" onClick={loginHandler}>
          <img src={user} alt="User photo" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Login</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
