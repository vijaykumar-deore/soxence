import { NavLink } from "react-router-dom";
import logo from "../img/logo.jpg";
import whatsapp from "../img/SVG/icons8-whatsapp.svg";
import instagram from "../img/SVG/icons8-instagram.svg";
import gmail from "../img/SVG/icons8-gmail.svg";
import pin from "../img/SVG/icons8-place-48.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <img className="logo" alt="Full logo" src={logo} />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <NavLink to="/contactUs" className="footer__link">
                  Contact us
                </NavLink>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="main-heading">
            <span>Follow us on:</span>
          </div>
          <div className="flex-4">
            <a
              href="https://wa.me/919891127839?text=Hello team Soxence"
              target="_blank"
              className="side-nav__link"
            >
              <img src={whatsapp} alt="Whats app Icon" />
            </a>
            <a
              href="https://www.instagram.com/soxence_socks/"
              className="side-nav__link"
            >
              <img src={instagram} alt="Instagram Icon" />
            </a>

            <a href="#" className="side-nav__link">
              <img src={gmail} alt="gmail Icon" />
            </a>
            <a
              href="https://www.google.com/maps/dir//Q3V5%2B555+Bawana+Industrial+Area+Sector+4+b3,+DSIIDC+Industrial+Area,+Sector+4,+Bawana,+Delhi,+110039/@28.7812501,76.9480016,11.79z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390da9db150e5d83:0x7d371622e1c19ee0!2m2!1d77.0579794!2d28.7928791?entry=ttu"
              className="side-nav__link"
            >
              <img src={pin} alt="location pin" />
            </a>
          </div>
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} by Soxence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
