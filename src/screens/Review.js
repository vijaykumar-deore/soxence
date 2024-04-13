import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import user1 from "../img/user-1.jpg";
import user2 from "../img/user-2.jpg";
import user3 from "../img/user-3.jpg";
import user4 from "../img/user-4.jpg";

const userReviews = [
  {
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Fuga",
    userName: "Nick Ong",
    date: "Feb 23rd, 2017",
    rating: "7.8",
    img: user1,
  },
  {
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Fuga",
    userName: "Nick Ong",
    date: "Feb 23rd, 2017",
    rating: "7.8",
    img: user2,
  },
  {
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Fuga",
    userName: "Nick Ong",
    date: "Feb 23rd, 2017",
    rating: "7.8",
    img: user3,
  },
  {
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Fuga",
    userName: "Nick Ong",
    date: "Feb 23rd, 2017",
    rating: "7.8",
    img: user4,
  },
  {
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Fuga",
    userName: "Nick Ong",
    date: "Feb 23rd, 2017",
    rating: "7.8",
    img: user1,
  },
  {
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Fuga",
    userName: "Nick Ong",
    date: "Feb 23rd, 2017",
    rating: "7.8",
    img: user2,
  },
  {
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Fuga",
    userName: "Nick Ong",
    date: "Feb 23rd, 2017",
    rating: "7.8",
    img: user3,
  },
  {
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Fuga",
    userName: "Nick Ong",
    date: "Feb 23rd, 2017",
    rating: "7.8",
    img: user4,
  },
];
export default function Review() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="description">
      {userReviews.map((userReview) => (
        <div className="user-reviews" data-aos="fade-up">
          <figure className="reviews">
            <blockquote className="review__text">
              {userReview.review}
            </blockquote>
            <figcaption className="review__user">
              <img
                src={userReview.img}
                alt="User 1"
                className="review__photo"
              />
              <div className="review__user-box">
                <p className="review__user-name">{userReview.userName}</p>
                <p className="review__user-date">{userReview.date}</p>
              </div>
              <div className="review__rating">{userReview.rating}</div>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}
