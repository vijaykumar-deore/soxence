import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useForm, ValidatioError } from "@formspree/react";
import { useForm } from "@formspree/react";
import whatsapp from "../img/SVG/icons8-whatsapp.svg";
import instagram from "../img/SVG/icons8-instagram.svg";
import gmail from "../img/SVG/icons8-gmail.svg";
import pin from "../img/SVG/icons8-place-48.png";

export default function ContactUs() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [state, handleSubmit] = useForm("mzbnkbzn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="description">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d223803.72893491332!2d76.9480016!3d28.7812501!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390da9db150e5d83%3A0x7d371622e1c19ee0!2sQ3V5%2B555%20Bawana%20Industrial%20Area%20Sector%204%20b3%2C%20DSIIDC%20Industrial%20Area%2C%20Sector%204%2C%20Bawana%2C%20Delhi%2C%20110039!3m2!1d28.7928791!2d77.0579794!5e0!3m2!1sen!2sin!4v1712409634428!5m2!1sen!2sin"
        width="100%"
        height="450px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex-2 margin-top background-box">
        <div className="max-width">
          <div className="main-heading">
            <span>Follow us on:</span>
          </div>
          <a
            href="https://wa.me/919891127839?text=Hello team Soxence"
            target="_blank"
            className="side-nav__link"
          >
            <img src={whatsapp} alt="Whats app Icon" data-aos="fade-up" />
            <h4 className=" heading-3 margin-md-left" data-aos="fade-down">
              +91-9891127839
            </h4>
          </a>
          <a
            href="https://www.instagram.com/soxence_socks/"
            className="side-nav__link"
          >
            <img src={instagram} alt="Instagram Icon" data-aos="fade-up" />
            <h4 className="heading-3 margin-md-left" data-aos="fade-down">
              soxence_socks
            </h4>
          </a>

          <a href="#" className="side-nav__link">
            <img src={gmail} alt="gmail Icon" data-aos="fade-up" />
            <h4 className="heading-3 margin-md-left" data-aos="fade-down">
              aarcherindustries@gmail.com
            </h4>
          </a>
          <a
            href="https://www.google.com/maps/dir//Q3V5%2B555+Bawana+Industrial+Area+Sector+4+b3,+DSIIDC+Industrial+Area,+Sector+4,+Bawana,+Delhi,+110039/@28.7812501,76.9480016,11.79z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390da9db150e5d83:0x7d371622e1c19ee0!2m2!1d77.0579794!2d28.7928791?entry=ttu"
            className="side-nav__link"
          >
            <img src={pin} alt="location pin" data-aos="fade-up" />
            <h4 className="heading-3 margin-md-left" data-aos="fade-down">
              Archer Industries, C-122, Sector-4, DSIIDC, Bawana Industrial
              area, Delhi-110039
            </h4>
          </a>
        </div>
        <form
          action="https://formspree.io/f/mzbnkbzn"
          method="POST"
          className="form"
        >
          <p className="main-heading" data-aos="fade-up">
            Leave us your details will contact you.
          </p>
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Full name"
              id="name"
              autoComplete="off"
              name="User name"
              required
              data-aos="fade-up"
            />
            {/* <label for="name" className="form__label">
              Full name
            </label> */}
          </div>
          <div className="form__group">
            <input
              type="email"
              name="Email"
              autoComplete="off"
              className="form__input"
              placeholder="Email address"
              id="email"
              required
              data-aos="fade-up"
            />
            {/* <label for="email" className="form__label">
              Email address
            </label> */}
          </div>
          <div className="form__group">
            <input
              className="form__input"
              type="tel"
              placeholder="Enter Mobile number"
              id="phone"
              name="Mobile Number"
              required
              data-aos="fade-up"
            />
            {/* <label for="phone" className="form__label">
              Mobile number
            </label> */}
          </div>
          <div className="form__group">
            <textarea
              type="text"
              name="Message"
              autoComplete="off"
              className="form__input"
              placeholder="Enter your Message"
              id="message"
              required
              data-aos="fade-up"
            ></textarea>
            {/* <label for="message" className="form__label">
              Message
            </label> */}
          </div>
          <button
            data-aos="fade-down"
            type="submit"
            className="btn-show align-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
