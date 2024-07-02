import React from "react";
import { Image } from "react-bootstrap";

const SingleComment = ({ comment = {} }) => {
  const { image, message, sender, time } = comment;

  return (
    <div className="comment-one__single">
      <div className="comment-one__image">
        <Image src={require(`@/images/blog/${image}`).default.src} alt="" />
      </div>
      <div className="comment-one__content">
        <h3>
          {sender} <span>{time}</span>
        </h3>
        <p>{message}</p>
        <a href="#" className="comment-one__btn thm-btn">
          <i className="fas fa-arrow-circle-right"></i>Reply
        </a>
      </div>
    </div>
  );
};

export default SingleComment;
